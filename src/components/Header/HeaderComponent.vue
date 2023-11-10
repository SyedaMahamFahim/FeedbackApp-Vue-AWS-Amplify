<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
    name: 'HomeComponent',
    props: {
        signOut: {
            type: Function as PropType<() => void>,
            required: true,
        },
    },
});
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <router-link to="/" class="navbar-brand logo">FeedbackHub</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link active fw-bold" aria-current="page">All Feedbacks</router-link>

                    </li>
                    <li class="nav-item">
                        <router-link to="/send-feedback" class="nav-link active fw-bold" aria-current="page">Send
                            Feedback</router-link>
                    </li>

                </ul>
                <div class="d-flex">

                    <button class="btn btn-success" @click="signOut">Sign Out</button>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    padding: 10px;
}

.logo {
    color: black;
    text-decoration: none;
    font-size: 24px;
    font-weight: bold;
}
</style>
