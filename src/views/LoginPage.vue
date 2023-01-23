<template>
  <h1>Login Page </h1>

  <v-responsive
    class="mx-auto"
    max-width="344"
  >
    <v-text-field
      :rules="[
        v => !!v || 'Field is required'
      ]"
      clearable
      label="ID"
    ></v-text-field>
  </v-responsive>

  <v-responsive
    class="mx-auto"
    max-width="344"
  >
    <v-text-field
      :rules="[
        v => !!v || 'Field is required'
      ]"
      clearable
      label="Password"
    ></v-text-field>
  </v-responsive>
  <LoginComponent></LoginComponent>
</template>

<script setup>

import LoginComponent from "@/components/LoginComponent";
</script>

<style scoped>

</style>
