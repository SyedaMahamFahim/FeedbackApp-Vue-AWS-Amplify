/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateFeedbackForm = /* GraphQL */ `subscription OnCreateFeedbackForm(
  $filter: ModelSubscriptionFeedbackFormFilterInput
) {
  onCreateFeedbackForm(filter: $filter) {
    id
    fullname
    feedback
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateFeedbackFormSubscriptionVariables,
  APITypes.OnCreateFeedbackFormSubscription
>;
export const onUpdateFeedbackForm = /* GraphQL */ `subscription OnUpdateFeedbackForm(
  $filter: ModelSubscriptionFeedbackFormFilterInput
) {
  onUpdateFeedbackForm(filter: $filter) {
    id
    fullname
    feedback
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateFeedbackFormSubscriptionVariables,
  APITypes.OnUpdateFeedbackFormSubscription
>;
export const onDeleteFeedbackForm = /* GraphQL */ `subscription OnDeleteFeedbackForm(
  $filter: ModelSubscriptionFeedbackFormFilterInput
) {
  onDeleteFeedbackForm(filter: $filter) {
    id
    fullname
    feedback
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteFeedbackFormSubscriptionVariables,
  APITypes.OnDeleteFeedbackFormSubscription
>;
