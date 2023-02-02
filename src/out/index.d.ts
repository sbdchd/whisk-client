// Code created by generator @whisklabs/grpc
// https://github.com/whisklabs/grpc-ts
// Version: 1.1.1

import {
  FieldMap,
  FieldRepeated,
  FieldType,
  FieldItem,
  Field,
  FieldEmpty,
  FieldGet,
  Service,
  ServiceRequest,
  ServiceResponse,
  Values
} from '@whisklabs/grpc';

export type whisk_x_recipe_v1_GetRecipeRequest = {
/** optional gets translated to [fieldId, fieldName, fieldType, isOptional ? 0 : 1]
 https://my.whisk.com/api/grpc-web/whisk.x.recipe.v1.RecipeAPI/GetRecipe */
  recipeId: string;
  recipeMask?: whisk_x_recipe_v1_GetRecipeRequest_GetRecipeMask;
};
export const whisk_x_recipe_v1_GetRecipeRequest: Field<whisk_x_recipe_v1_GetRecipeRequest>;
export type whisk_x_recipe_v1_GetRecipeRequest_GetRecipeMask = {
  paths: string[];
};
export const whisk_x_recipe_v1_GetRecipeRequest_GetRecipeMask: Field<whisk_x_recipe_v1_GetRecipeRequest_GetRecipeMask>;
export type whisk_x_recipe_v1_GetRecipeResponse = {
  recipe?: whisk_x_recipe_v1_GetRecipeResponse_Recipe;
};
export const whisk_x_recipe_v1_GetRecipeResponse: Field<whisk_x_recipe_v1_GetRecipeResponse>;
export type whisk_x_recipe_v1_GetRecipeResponse_Ingredient = {
  text: string;
  group: string;
  id: string;
};
export const whisk_x_recipe_v1_GetRecipeResponse_Ingredient: Field<whisk_x_recipe_v1_GetRecipeResponse_Ingredient>;
export type whisk_x_recipe_v1_GetRecipeResponse_InstructionStep = {
  text: string;
  group: string;
};
/** optional Picture image = 4;
 optional Analysis analysis = 3; */
export const whisk_x_recipe_v1_GetRecipeResponse_InstructionStep: Field<whisk_x_recipe_v1_GetRecipeResponse_InstructionStep>;
export type whisk_x_recipe_v1_GetRecipeResponse_Instruction = {
  steps: whisk_x_recipe_v1_GetRecipeResponse_InstructionStep[];
};
export const whisk_x_recipe_v1_GetRecipeResponse_Instruction: Field<whisk_x_recipe_v1_GetRecipeResponse_Instruction>;
export type whisk_x_recipe_v1_GetRecipeResponse_SourceImage = FieldEmpty;
/** optional SourceImageOriginal sourceImageOriginal = 1;
 optional Responsive picture = 2; */
export const whisk_x_recipe_v1_GetRecipeResponse_SourceImage: Field<whisk_x_recipe_v1_GetRecipeResponse_SourceImage>;
export type whisk_x_recipe_v1_GetRecipeResponse_Source = {
  name: string;
  displayName: string;
  sourceRecipeUrl: string;
  image?: whisk_x_recipe_v1_GetRecipeResponse_SourceImage;
};
export const whisk_x_recipe_v1_GetRecipeResponse_Source: Field<whisk_x_recipe_v1_GetRecipeResponse_Source>;
export type whisk_x_recipe_v1_GetRecipeResponse_Durations = {
  cookTime: number;
  prepTime: number;
};
export const whisk_x_recipe_v1_GetRecipeResponse_Durations: Field<whisk_x_recipe_v1_GetRecipeResponse_Durations>;
export type whisk_x_recipe_v1_GetRecipeResponse_NormalizedIngredient = {
  id: string;
  rawId: string;
/** optional NormalizedAnlysis analysis = 2;
 optional string analysis = 2; */
  sourceText: string;
  group: string;
};
/** {
     id: 'd936cd21131f07695ef6c8d8e2aae7e60f88b77b:0:0',
     sourceText: '250g chicken breast',
     rawId: '0',
     group: ''
   }, optional NormalizedNutrition nutrition = 5;
 optional string nutrition = 5; */
export const whisk_x_recipe_v1_GetRecipeResponse_NormalizedIngredient: Field<whisk_x_recipe_v1_GetRecipeResponse_NormalizedIngredient>;
export type whisk_x_recipe_v1_GetRecipeResponse_Recipe = {
  id: string;
  name: string;
  description: string;
  ingredients: whisk_x_recipe_v1_GetRecipeResponse_Ingredient[];
  instructions?: whisk_x_recipe_v1_GetRecipeResponse_Instruction;
  images: whisk_x_recipe_v1_GetRecipeResponse_SourceImage[];
  source?: whisk_x_recipe_v1_GetRecipeResponse_Source;
  servings: number;
  durations?: whisk_x_recipe_v1_GetRecipeResponse_Durations;
  normalizedIngredients: whisk_x_recipe_v1_GetRecipeResponse_NormalizedIngredient[];
/** optional Nutrition nutrition = 12;
 int32 servingsScaled = 13;
 optional Saved saved = 15;
 string language = 16;
 optional Saved user = 17;
 bool isFlagged = 18;
 optional CommunitySharing communitySharing = 21;
 optional ContentPolicyViolation contentPolicyViolation = 19;
 int32 saveCount = 20;
 optional Brand brand = 22;
 repeated PromotedIngredient promotedIngredients = 23;
 optional Reviews reviews = 24;
 optional Labels labels = 25;
 optional Publicity publicity = 26;
 optional RecipeAuthor recipeAuthor = 27; */
  updatedAt: number;
};
/** message Publisher {
     string name = 1;
     string displayName = 2;
     string sourceRecipeUrl = 3;
     string imageUrl = 4;
 }
 message RecipeAuthor  {
     Publisher publisher = 1;
     // Creator user = 2;
 } optional Parent parent = 29;
 optional Permissions permissions = 30;
 repeated Video videos = 31;
 optional Creator creator = 32; */
export const whisk_x_recipe_v1_GetRecipeResponse_Recipe: Field<whisk_x_recipe_v1_GetRecipeResponse_Recipe>;
export type whisk_x_recipe_v1_RecipeAPI_GetRecipe = Service<Field<whisk_x_recipe_v1_GetRecipeRequest>, Field<whisk_x_recipe_v1_GetRecipeResponse>>;
export const whisk_x_recipe_v1_RecipeAPI_GetRecipe: whisk_x_recipe_v1_RecipeAPI_GetRecipe;
export type whisk_x_user_v1_CreateAnonymousUserRequest = {
  userParams?: whisk_x_user_v1_CreateAnonymousUserRequest_UserParams;
};
export const whisk_x_user_v1_CreateAnonymousUserRequest: Field<whisk_x_user_v1_CreateAnonymousUserRequest>;
export type whisk_x_user_v1_CreateAnonymousUserRequest_LocationParams = {
  country: string;
};
export const whisk_x_user_v1_CreateAnonymousUserRequest_LocationParams: Field<whisk_x_user_v1_CreateAnonymousUserRequest_LocationParams>;
export type whisk_x_user_v1_CreateAnonymousUserRequest_UserParams = {
  language: string;
  location?:
    | { oneof: 'locationParams'; value?: whisk_x_user_v1_CreateAnonymousUserRequest_LocationParams; }
    | { oneof: 'locate'; value: boolean; };
};
export const whisk_x_user_v1_CreateAnonymousUserRequest_UserParams: Field<whisk_x_user_v1_CreateAnonymousUserRequest_UserParams>;
export type whisk_x_user_v1_CreateAnonymousUserResponse = {
  authenticated?: whisk_x_user_v1_CreateAnonymousUserResponse_Authenticated;
};
export const whisk_x_user_v1_CreateAnonymousUserResponse: Field<whisk_x_user_v1_CreateAnonymousUserResponse>;
export type whisk_x_user_v1_CreateAnonymousUserResponse_Token = {
  accessToken: string;
  tokenType: string;
  expiresIn: number;
  refreshToken: string;
  refreshTokenExpiresIn: number;
};
export const whisk_x_user_v1_CreateAnonymousUserResponse_Token: Field<whisk_x_user_v1_CreateAnonymousUserResponse_Token>;
export type whisk_x_user_v1_CreateAnonymousUserResponse_Timestamp = {
  seconds: number;
  nanos: number;
};
export const whisk_x_user_v1_CreateAnonymousUserResponse_Timestamp: Field<whisk_x_user_v1_CreateAnonymousUserResponse_Timestamp>;
export type whisk_x_user_v1_CreateAnonymousUserResponse_User = {
  id: string;
/** repeated Identity identities = 2; */
  hasPassword: boolean;
/** optional Settings settings = 4;
 repeated enum apps = 5; */
  createdTime?: whisk_x_user_v1_CreateAnonymousUserResponse_Timestamp;
};
export const whisk_x_user_v1_CreateAnonymousUserResponse_User: Field<whisk_x_user_v1_CreateAnonymousUserResponse_User>;
export type whisk_x_user_v1_CreateAnonymousUserResponse_Authenticated = {
  token?: whisk_x_user_v1_CreateAnonymousUserResponse_Token;
  user?: whisk_x_user_v1_CreateAnonymousUserResponse_User;
  isNewUser: boolean;
  resetPasswordCode: string;
  unsubscribeToken: string;
};
export const whisk_x_user_v1_CreateAnonymousUserResponse_Authenticated: Field<whisk_x_user_v1_CreateAnonymousUserResponse_Authenticated>;
export type whisk_x_user_v1_AuthAPI_CreateAnonymousUser = Service<Field<whisk_x_user_v1_CreateAnonymousUserRequest>, Field<whisk_x_user_v1_CreateAnonymousUserResponse>>;
export const whisk_x_user_v1_AuthAPI_CreateAnonymousUser: whisk_x_user_v1_AuthAPI_CreateAnonymousUser;