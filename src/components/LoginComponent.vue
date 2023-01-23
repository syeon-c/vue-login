<template>
  <h2>Login Component </h2>

  <v-btn @click="handleClick1">Generate Key</v-btn>

  <v-btn>Login</v-btn>

</template>

<script setup>

import axios from "axios";
import useMemberInfo from "@/store/useMemberInfo";

const handleClick1 = async () => {

  const res = await axios.post(`http://localhost:8080/api/generate`)

  //{access:xxxx, refresh:xxxx}
  const data = res.data

  console.log(data)

  const {saveInfo} = useMemberInfo()

  saveInfo(data.access, data.refresh)

}

</script>

<style scoped>

</style>
