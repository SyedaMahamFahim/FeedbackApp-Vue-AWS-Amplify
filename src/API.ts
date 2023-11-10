/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateFeedbackFormInput = {
  id?: string | null,
  fullname?: string | null,
  feedback?: string | null,
  email?: string | null,
};

export type ModelFeedbackFormConditionInput = {
  fullname?: ModelStringInput | null,
  feedback?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelFeedbackFormConditionInput | null > | null,
  or?: Array< ModelFeedbackFormConditionInput | null > | null,
  not?: ModelFeedbackFormConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type FeedbackForm = {
  __typename: "FeedbackForm",
  id: string,
  fullname?: string | null,
  feedback?: string | null,
  email?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateFeedbackFormInput = {
  id: string,
  fullname?: string | null,
  feedback?: string | null,
  email?: string | null,
};

export type DeleteFeedbackFormInput = {
  id: string,
};

export type ModelFeedbackFormFilterInput = {
  id?: ModelIDInput | null,
  fullname?: ModelStringInput | null,
  feedback?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelFeedbackFormFilterInput | null > | null,
  or?: Array< ModelFeedbackFormFilterInput | null > | null,
  not?: ModelFeedbackFormFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelFeedbackFormConnection = {
  __typename: "ModelFeedbackFormConnection",
  items:  Array<FeedbackForm | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionFeedbackFormFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  fullname?: ModelSubscriptionStringInput | null,
  feedback?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFeedbackFormFilterInput | null > | null,
  or?: Array< ModelSubscriptionFeedbackFormFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateFeedbackFormMutationVariables = {
  input: CreateFeedbackFormInput,
  condition?: ModelFeedbackFormConditionInput | null,
};

export type CreateFeedbackFormMutation = {
  createFeedbackForm?:  {
    __typename: "FeedbackForm",
    id: string,
    fullname?: string | null,
    feedback?: string | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFeedbackFormMutationVariables = {
  input: UpdateFeedbackFormInput,
  condition?: ModelFeedbackFormConditionInput | null,
};

export type UpdateFeedbackFormMutation = {
  updateFeedbackForm?:  {
    __typename: "FeedbackForm",
    id: string,
    fullname?: string | null,
    feedback?: string | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFeedbackFormMutationVariables = {
  input: DeleteFeedbackFormInput,
  condition?: ModelFeedbackFormConditionInput | null,
};

export type DeleteFeedbackFormMutation = {
  deleteFeedbackForm?:  {
    __typename: "FeedbackForm",
    id: string,
    fullname?: string | null,
    feedback?: string | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetFeedbackFormQueryVariables = {
  id: string,
};

export type GetFeedbackFormQuery = {
  getFeedbackForm?:  {
    __typename: "FeedbackForm",
    id: string,
    fullname?: string | null,
    feedback?: string | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFeedbackFormsQueryVariables = {
  filter?: ModelFeedbackFormFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFeedbackFormsQuery = {
  listFeedbackForms?:  {
    __typename: "ModelFeedbackFormConnection",
    items:  Array< {
      __typename: "FeedbackForm",
      id: string,
      fullname?: string | null,
      feedback?: string | null,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateFeedbackFormSubscriptionVariables = {
  filter?: ModelSubscriptionFeedbackFormFilterInput | null,
};

export type OnCreateFeedbackFormSubscription = {
  onCreateFeedbackForm?:  {
    __typename: "FeedbackForm",
    id: string,
    fullname?: string | null,
    feedback?: string | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFeedbackFormSubscriptionVariables = {
  filter?: ModelSubscriptionFeedbackFormFilterInput | null,
};

export type OnUpdateFeedbackFormSubscription = {
  onUpdateFeedbackForm?:  {
    __typename: "FeedbackForm",
    id: string,
    fullname?: string | null,
    feedback?: string | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFeedbackFormSubscriptionVariables = {
  filter?: ModelSubscriptionFeedbackFormFilterInput | null,
};

export type OnDeleteFeedbackFormSubscription = {
  onDeleteFeedbackForm?:  {
    __typename: "FeedbackForm",
    id: string,
    fullname?: string | null,
    feedback?: string | null,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
