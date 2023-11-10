/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getFeedbackForm = /* GraphQL */ `query GetFeedbackForm($id: ID!) {
  getFeedbackForm(id: $id) {
    id
    fullname
    feedback
    email
    feedbackSubmitted
      avatarImage
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetFeedbackFormQueryVariables,
  APITypes.GetFeedbackFormQuery
>;
export const listFeedbackForms = /* GraphQL */ `query ListFeedbackForms(
  $filter: ModelFeedbackFormFilterInput
  $limit: Int
  $nextToken: String
) {
  listFeedbackForms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      fullname
      feedback
      email
      feedbackSubmitted
      avatarImage
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFeedbackFormsQueryVariables,
  APITypes.ListFeedbackFormsQuery
>;
