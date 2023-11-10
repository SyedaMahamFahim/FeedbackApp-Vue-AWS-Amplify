<template>
  <div class="container mt-5">
    <h1 class="text-center mb-5">Feedbacks</h1>
    <div v-if="loadingFeedbacks" class="text-center">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else>
      <div class="row">
        <div class="col-md-4" v-for="feedbackForm in feedbackForms" :key="feedbackForm.id">
          <div class="card m-2 ">
            <div class="feedback-card-image"> <img v-if="feedbackForm.avatarImage"
                :src="getImageUrl(feedbackForm.avatarImage)" class="card-img-top" alt="User Avatar" width="200"
                height="200"></div>

            <div class="card-body text-center">
              <h5 class="card-title">{{ feedbackForm.fullname }}</h5>
              <p class="card-text">{{ feedbackForm.feedback }}</p>
              <button v-if="isUserEmail(feedbackForm)" @click="confirmDelete(feedbackForm.id)"
                class="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { API, Auth } from 'aws-amplify';
import { listFeedbackForms } from '@/graphql/queries';
import { deleteFeedbackForm } from '@/graphql/mutations';

export default {
  name: 'FeedbackList',
  data() {
    return {
      feedbackForms: [],
      userEmail: null,
      loadingFeedbacks: true,
    };
  },

  methods: {
    async fetchData() {
      try {
        const { data } = await API.graphql({ query: listFeedbackForms });
        this.feedbackForms = data.listFeedbackForms.items;
        console.log('data.listFeedbackForms.items;', data.listFeedbackForms.items)
      } catch (error) {
        console.error('Error fetching feedback forms:', error);
      } finally {
        this.loadingFeedbacks = false;
      }
    },
    async deleteFeedback(id) {
      try {
        await API.graphql({
          query: deleteFeedbackForm,
          variables: { input: { id } },
        });
        this.feedbackForms = this.feedbackForms.filter(form => form.id !== id);
      } catch (error) {
        console.error('Error deleting feedback:', error);
      }
    },

    isUserEmail(feedbackForm) {
      if (this.userEmail) {
        return feedbackForm.email === this.userEmail;
      }
      return false;
    },

    confirmDelete(id) {
      const confirmed = window.confirm('Are you sure you want to delete this feedback?');

      if (confirmed) {
        this.deleteFeedback(id);
      }
    },

    getImageUrl(imageKey) {
      console.log('imageKey', imageKey)
      if (imageKey) {
        return `https://feedbackapp-vue-amplify-storage-d6313566142001-staging.s3.eu-north-1.amazonaws.com/public/${imageKey}`;
      }

      return 'https://placekitten.com/200/300';
    },

  },

  async mounted() {
    try {
      const currentUser = await Auth.currentAuthenticatedUser()
      this.userEmail = currentUser?.attributes?.email
      console.log('This is user info', currentUser?.attributes?.email)
    } catch (error) {
      console.error('Error fetching user email:', error);
    } finally {
      this.loadingEmail = false;
    }

    await this.fetchData();
    console.log(await Auth.currentAuthenticatedUser())
  },
};
</script>

<style scoped>
.feedback-card-image {
  display: flex;
  justify-content: center;
}

.feedback-card-image img {
  border-radius: 100%;
  height: 200px;
  width: 200px;
  margin: 20px;
}
</style>