# FeedbackApp-Vue-AWS-Amplify

Welcome to the Feedback App – a dynamic platform built with Vue.js and AWS Amplify. Users can effortlessly create accounts, share valuable feedback, and engage in a collaborative environment. The app, integrated with secure user authentication, allows users to submit and manage their feedback while providing a personalized experience. Explore insights from your network and enhance your feedback experience.

##  Final Product
Check out the final application in action on [Youtube](https://github.com/SyedaMahamFahim/FeedbackApp-Vue-AWS-Amplify) or here.

https://github.com/SyedaMahamFahim/FeedbackApp-Vue-AWS-Amplify/assets/79671325/61c765c7-a4d1-41fd-b05d-24bac29e0cd4


## Tutorial
For a step-by-step guide on how to build this application, refer to the detailed tutorial [here](#).

## Prerequisite

Before we start our journey, make sure you have the following:

1. **Vue3**: If you're not familiar with Vue.js, check out the [official guide](https://vuejs.org/guide/quick-start.html).
2. **AWS Account**: If you don't have one, no worries! Follow this [guide](https://k21academy.com/amazon-web-services/aws-solutions-architect/create-aws-free-tier-account/) to create a free-tier AWS account.
3. **Bootstrap**: We'll use Bootstrap for styling.
4. **Routing in Vue**: Familiarity with Vue Router.
5. **GraphQL**: Basic understanding of GraphQL.
6. **AWS Services**: S3, DynamoDB, IAM, Cognito, and Amplify.
7. **Git**: Version control is key.

## Features

1. **User Account Creation:**
   - Users can create accounts securely using AWS Cognito for authentication.
   - Follow the tutorial to integrate AWS Cognito and set up a user pool.

2. **Send Feedback:**
   - Authenticated users can use the provided feedback form to submit feedback.
   - The app stores feedback data securely in AWS DynamoDB and user images in an S3 bucket.
     
3. **Delete Feedback:**
   - Authenticated users have the ability to delete their submitted feedback.
   - The tutorial includes details on implementing the feedback deletion feature.

4. **View Other Feedback (Login Required):**
   - Users need to be logged in to view feedback submitted by others.
   - A secured environment ensures that only authenticated users can access and interact with feedback data.

# Environment Setup
This template should help get you started developing with Vue 3 in Vite.


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Tags
#VueJS #AWSAmplify #WebDevelopment #CodingCommunity

