<template>
  <h2>Login Component </h2>


  <v-text-field
    v-model="memberId"
    placeholder="ID"
    type="input"
  />

  <v-text-field
    v-model="memberPswd"
    placeholder="Password"
    type="input"
  />

  <div>
    <v-btn @click="handleClick1">Generate Key</v-btn>

    <v-btn @click="login">Login</v-btn>
  </div>

</template>

<script setup>

import axios from "axios";
import useMemberInfo from "@/store/useMemberInfo";
import {ref} from "vue";

const memberId = ref("")
const memberPswd = ref("")

/** 서버로 데이터 전송 **/
const login = async () => {
  const userData = {
    mid: memberId.value, password: memberPswd.value
  };

  await axios.post(`http://localhost:8080/api/login`, userData)
    .then((response) => {
      if (response.status === 200) {
        console.log(userData)
        return userData
      }
    })
    .catch((error) => console.log(error.response));

}

const handleClick1 = async () => {

  const res = await axios.post(`http://localhost:8080/api/generate`)

  //{access:xxxx, refresh:xxxx}
  const data = res.data

  console.log("------------token info------------")
  console.log(data)

  const {saveInfo} = useMemberInfo()

  saveInfo(data.access, data.refresh)

}

</script>

<style scoped>

</style>
