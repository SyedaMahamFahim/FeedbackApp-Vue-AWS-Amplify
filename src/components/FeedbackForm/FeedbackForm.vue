<template>
  <div class="container mt-5">
    <h1 class="text-center mb-5">Feedback Forms</h1>
    <h3 v-if="isAlreadySubmitted" class="text-center mb-5">You have already submitted feedback. </h3>
    <h6 v-if="!isAlreadySubmitted" class="text-center mb-5">Once you have submitted your feedback, please note that it cannot be updated. <br/>However, you do have the option to delete the previous feedback and create a new one if needed.<br/> Thank you.</h6>
    <div v-if="!isAlreadySubmitted" class="row justify-content-center">
      <div class="col-md-6">
        <div v-if="!loadingEmail">
          <form class="needs-validation" novalidate @submit.prevent="submitForm">

            <div class="mb-3">
              <label for="fullname" class="form-label">Full Name</label>
              <input type="text" class="form-control" id="fullname" v-model="fullname" required
                placeholder="Syeda Maham" />
            </div>

            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input type="email" class="form-control" id="email" required :value="userEmail" readonly />
            </div>
            <div class="mb-3">
              <label for="image" class="form-label">Image Upload</label>
              <input type="file" class="form-control" id="image" required accept="image/*" @change="handleImageUpload" />
            </div>
            <div class="mb-3">
              <label for="feedback" class="form-label">Feedback</label>
              <textarea class="form-control" id="feedback" v-model="feedback" required rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-success" :disabled="loading">
              <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              <span v-else>Submit</span>
            </button>
          </form>
        </div>
        <div v-else>
          <div class="text-center">
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { createFeedbackForm } from '@/graphql/mutations'
import { API, Auth, Storage } from 'aws-amplify'
import { listFeedbackForms } from '@/graphql/queries';

export default {
  name: 'FeedbackForm',
  data() {
    return {
      fullname: '',
      email: '',
      feedback: '',
      image: null,
      loading: false,
      loadingEmail: true,
      feedbacks: [],
      userEmail: '',
      isAlreadySubmitted: false
    }
  },
  methods: {
    async submitForm() {
      try {
        this.loading = true;


        const imageKey = `images/${Date.now()}_${this.image.name}`;
        await Storage.put(imageKey, this.image, {
          contentType: this.image.type,
        });

        // Include the image key in the feedback data
        const feedback = {
          fullname: this.fullname,
          email: this.userEmail,
          feedback: this.feedback,
          feedbackSubmitted: true,
          avatarImage: imageKey,
        };

        // Call the GraphQL mutation to create feedback
        await API.graphql({
          query: createFeedbackForm,
          variables: { input: feedback },
        });


        this.loading = false;
        alert('Thank you for your feedback!');
        this.resetForm();


      } catch (error) {
        console.error(error);
        alert('There was an error submitting your feedback. Please try again later.');
      } finally {
        this.loading = false;
      }

    },
    handleImageUpload(event) {
      // Handle the image file selection
      this.image = event.target.files[0];
    },
    resetForm() {
      // Reset form fields after successful submission
      this.fullname = '';
      this.email = '';
      this.feedback = '';
      this.image = null;
    },
  },
  async mounted() {
    try {
      const currentUser = await Auth.currentAuthenticatedUser()
      this.userEmail = currentUser?.attributes?.email


      console.log('This is user info', currentUser?.attributes?.email)
    } catch (error) {
      console.error('Error fetching user email:', error)
    } finally {
      this.loadingEmail = false;
    }

    const existingFeedback = await API.graphql({
      query: listFeedbackForms,
      variables: {
        filter: {
          email: { eq: this.userEmail },
        },
      },
    });

    if (existingFeedback.data.listFeedbackForms.items.length > 0) {
      this.isAlreadySubmitted = true
      console.log('You have already submitted feedback. You can update the form, but a new one will not be created.');
    }


  }
}
</script>
