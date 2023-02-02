import { grpcHTTP } from "@whisklabs/grpc";
import {
  whisk_x_recipe_v1_GetRecipeResponse,
  whisk_x_recipe_v1_RecipeAPI_GetRecipe,
  whisk_x_user_v1_AuthAPI_CreateAnonymousUser,
} from "./out";

// Found in the static JS files, when you pass in a random client id, then you get an error:
//   Error: {"code":"ERROR_INVALID_ARGUMENTS","message":"App not found","display_message":"Something went wrong. Please try again."}
const CLIENT_ID =
  "6FLMPrxutqIWIiua5sVDmqpTyOLGle7Y2pbccmKfmwFcMdNnXZUW03ftI6mUDUHT";

async function createAnonymousUser() {
  const grpc = grpcHTTP({
    server: "https://login.whisk.com/api/grpc-web",
    transformRequest: (params) => {
      params.xhr.setRequestHeader("x-whisk-client-id", CLIENT_ID);
    },
  });

  const res = await grpc(whisk_x_user_v1_AuthAPI_CreateAnonymousUser, {
    userParams: {
      language: "en-us",
      location: { oneof: "locate", value: true },
    },
  });
  if (res.success) {
    const token = res.data.authenticated?.token?.accessToken;
    if (token == null) {
      throw Error("null token");
    }
    return token;
  }
  throw Error(res.error.message);
}

async function getRecipe({
  recipeId,
  authToken,
}: {
  recipeId: string;
  authToken: string;
}) {
  const grpc = grpcHTTP({
    server: "https://my.whisk.com/api/grpc-web",
    transformRequest: (params) => {
      params.xhr.setRequestHeader("Authorization", "Bearer ".concat(authToken));
    },
  });

  // without these the API won't return some fields, like Instructions, by default
  const paths = [
    "normalized_ingredients",
    "instructions",
    "nutrition",
    "content_policy_violation",
    "save_count",
    "reviews.will_be_reset_after_edit",
    "reviews.my_review",
    "reviews.rating",
    "reviews.tags",
    "reviews.filled_reviews",
    "instructions.analysis.intents",
    "recipe_author.author",
    "publicity.sample_community",
    "publicity.public_community_count",
    "publicity.private_community_count",
    "parent",
    "labels",
  ];
  const res = await grpc(whisk_x_recipe_v1_RecipeAPI_GetRecipe, {
    recipeId,
    recipeMask: {
      paths,
    },
  });

  if (res.success) {
    const data: whisk_x_recipe_v1_GetRecipeResponse = res.data;
    console.log(JSON.stringify(data.recipe, null, 2));
  } else {
    // If error we have same structure with optional fields
    console.error(res.error.message, res.error.data);
  }
}

async function main() {
  const authToken = await createAnonymousUser();
  const recipeId = "10767297e7b43aa4fb88612fc1be6929c85";
  await getRecipe({ recipeId, authToken });
}
main().catch((e) => console.error(e));
