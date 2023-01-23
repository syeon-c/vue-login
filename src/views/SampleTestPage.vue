<template>

<h1> Sample Test </h1>

  <v-btn @click="handleClickEx1">EX1</v-btn>
  <v-btn >EX2</v-btn>


</template>

<script setup>

import authAxios from "@/util/authAxios";

const handleClickEx1 = async () => {

  const res = authAxios.get(`http://localhost:8080/api/sample/ex1`)
  const data = res.data

  console.log(data)

}


</script>

<style scoped>

</style>
