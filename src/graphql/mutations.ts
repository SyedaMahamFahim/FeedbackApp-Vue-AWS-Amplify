/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createFeedbackForm = /* GraphQL */ `mutation CreateFeedbackForm(
  $input: CreateFeedbackFormInput!
  $condition: ModelFeedbackFormConditionInput
) {
  createFeedbackForm(input: $input, condition: $condition) {
    id
    fullname
    feedback
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateFeedbackFormMutationVariables,
  APITypes.CreateFeedbackFormMutation
>;
export const updateFeedbackForm = /* GraphQL */ `mutation UpdateFeedbackForm(
  $input: UpdateFeedbackFormInput!
  $condition: ModelFeedbackFormConditionInput
) {
  updateFeedbackForm(input: $input, condition: $condition) {
    id
    fullname
    feedback
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateFeedbackFormMutationVariables,
  APITypes.UpdateFeedbackFormMutation
>;
export const deleteFeedbackForm = /* GraphQL */ `mutation DeleteFeedbackForm(
  $input: DeleteFeedbackFormInput!
  $condition: ModelFeedbackFormConditionInput
) {
  deleteFeedbackForm(input: $input, condition: $condition) {
    id
    fullname
    feedback
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteFeedbackFormMutationVariables,
  APITypes.DeleteFeedbackFormMutation
>;
