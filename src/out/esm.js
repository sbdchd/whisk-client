// Code created by generator @whisklabs/grpc
// https://github.com/whisklabs/grpc-ts
// Version: 1.1.1
"use strict";
export function whisk_x_recipe_v1_GetRecipeRequest() {
    return [
        [1, "recipeId", "string", 1],
        [2, "recipeMask", whisk_x_recipe_v1_GetRecipeRequest_GetRecipeMask, 0],
    ];
}
export function whisk_x_recipe_v1_GetRecipeRequest_GetRecipeMask() {
    return [
        [1, "paths", ["repeated", "string"], 1],
    ];
}
export function whisk_x_recipe_v1_GetRecipeResponse() {
    return [
        [1, "recipe", whisk_x_recipe_v1_GetRecipeResponse_Recipe, 0],
    ];
}
export function whisk_x_recipe_v1_GetRecipeResponse_Ingredient() {
    return [
        [1, "text", "string", 1],
        [2, "group", "string", 1],
        [3, "id", "string", 1],
    ];
}
export function whisk_x_recipe_v1_GetRecipeResponse_InstructionStep() {
    return [
        [1, "text", "string", 1],
        [2, "group", "string", 1],
    ];
}
export function whisk_x_recipe_v1_GetRecipeResponse_Instruction() {
    return [
        [1, "steps", ["repeated", whisk_x_recipe_v1_GetRecipeResponse_InstructionStep], 1],
    ];
}
export function whisk_x_recipe_v1_GetRecipeResponse_SourceImage() {
    return [];
}
export function whisk_x_recipe_v1_GetRecipeResponse_Source() {
    return [
        [1, "name", "string", 1],
        [2, "displayName", "string", 1],
        [3, "sourceRecipeUrl", "string", 1],
        [4, "image", whisk_x_recipe_v1_GetRecipeResponse_SourceImage, 0],
    ];
}
export function whisk_x_recipe_v1_GetRecipeResponse_Durations() {
    return [
        [1, "cookTime", "int32", 1],
        [2, "prepTime", "int32", 1],
    ];
}
export function whisk_x_recipe_v1_GetRecipeResponse_NormalizedIngredient() {
    return [
        [1, "id", "string", 1],
        [6, "rawId", "string", 1],
        [3, "sourceText", "string", 1],
        [4, "group", "string", 1],
    ];
}
export function whisk_x_recipe_v1_GetRecipeResponse_Recipe() {
    return [
        [1, "id", "string", 1],
        [2, "name", "string", 1],
        [3, "description", "string", 1],
        [4, "ingredients", ["repeated", whisk_x_recipe_v1_GetRecipeResponse_Ingredient], 1],
        [5, "instructions", whisk_x_recipe_v1_GetRecipeResponse_Instruction, 0],
        [6, "images", ["repeated", whisk_x_recipe_v1_GetRecipeResponse_SourceImage], 1],
        [8, "source", whisk_x_recipe_v1_GetRecipeResponse_Source, 0],
        [9, "servings", "int32", 1],
        [10, "durations", whisk_x_recipe_v1_GetRecipeResponse_Durations, 0],
        [11, "normalizedIngredients", ["repeated", whisk_x_recipe_v1_GetRecipeResponse_NormalizedIngredient], 1],
        [28, "updatedAt", "int64", 1],
    ];
}
export var whisk_x_recipe_v1_RecipeAPI_GetRecipe = {
    name: "whisk.x.recipe.v1.RecipeAPI/GetRecipe",
    encode: whisk_x_recipe_v1_GetRecipeRequest,
    decode: whisk_x_recipe_v1_GetRecipeResponse,
};
export function whisk_x_user_v1_CreateAnonymousUserRequest() {
    return [
        [1, "userParams", whisk_x_user_v1_CreateAnonymousUserRequest_UserParams, 0],
    ];
}
export function whisk_x_user_v1_CreateAnonymousUserRequest_LocationParams() {
    return [
        [1, "country", "string", 1],
    ];
}
export function whisk_x_user_v1_CreateAnonymousUserRequest_UserParams() {
    return [
        [1, "language", "string", 1],
        [2, "locationParams", whisk_x_user_v1_CreateAnonymousUserRequest_LocationParams, 0, "location"],
        [3, "locate", "bool", 1, "location"],
    ];
}
export function whisk_x_user_v1_CreateAnonymousUserResponse() {
    return [
        [1, "authenticated", whisk_x_user_v1_CreateAnonymousUserResponse_Authenticated, 0],
    ];
}
export function whisk_x_user_v1_CreateAnonymousUserResponse_Token() {
    return [
        [1, "accessToken", "string", 1],
        [2, "tokenType", "string", 1],
        [3, "expiresIn", "int64", 1],
        [4, "refreshToken", "string", 1],
        [5, "refreshTokenExpiresIn", "int64", 1],
    ];
}
export function whisk_x_user_v1_CreateAnonymousUserResponse_Timestamp() {
    return [
        [1, "seconds", "int64", 1],
        [2, "nanos", "int32", 1],
    ];
}
export function whisk_x_user_v1_CreateAnonymousUserResponse_User() {
    return [
        [1, "id", "string", 1],
        [3, "hasPassword", "bool", 1],
        [6, "createdTime", whisk_x_user_v1_CreateAnonymousUserResponse_Timestamp, 0],
    ];
}
export function whisk_x_user_v1_CreateAnonymousUserResponse_Authenticated() {
    return [
        [1, "token", whisk_x_user_v1_CreateAnonymousUserResponse_Token, 0],
        [2, "user", whisk_x_user_v1_CreateAnonymousUserResponse_User, 0],
        [3, "isNewUser", "bool", 1],
        [4, "resetPasswordCode", "string", 1],
        [5, "unsubscribeToken", "string", 1],
    ];
}
export var whisk_x_user_v1_AuthAPI_CreateAnonymousUser = {
    name: "whisk.x.user.v1.AuthAPI/CreateAnonymousUser",
    encode: whisk_x_user_v1_CreateAnonymousUserRequest,
    decode: whisk_x_user_v1_CreateAnonymousUserResponse,
};
