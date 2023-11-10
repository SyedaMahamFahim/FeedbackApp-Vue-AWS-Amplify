<script lang="ts" setup >
import HeaderComponent from "./components/Header/HeaderComponent.vue";
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";
</script>

<template>
  <authenticator class="aws-auth-div">
    <template v-slot="{ signOut }">
      <HeaderComponent :signOut="signOut" />
      <router-view />
    </template>
  </authenticator>
</template>

<style>
.aws-auth-div {
  position: fixed;
  top: 25%;
  left: 25%;
  right: 25%;
}

@media (max-width: 768px) {
  .aws-auth-div {
    position: none;
    top: 25%;
    left: 0%;
    width: 100%;
  }
}
</style>