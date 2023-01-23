import {defineStore} from "pinia";
import {ref} from "vue";


const useMemberInfo = defineStore('useMemberInfo',() => {

  const memberInfo = ref({access:null, refresh:null})

  const saveInfo = (accessToken, refreshToken) => {

    console.log("saveInfo access: " + accessToken)
    console.log("saveInfo refresh: " + refreshToken )

    memberInfo.value.access = accessToken
    memberInfo.value.refresh = refreshToken

    //cookie
    localStorage.setItem("access", accessToken)
    localStorage.setItem("refresh", refreshToken)

  }

  const getTokens = () => {

    memberInfo.value.access = localStorage.getItem("access")
    memberInfo.value.access = localStorage.getItem("refresh")

    return memberInfo
  }

  return {memberInfo, saveInfo, getTokens}
})

export default useMemberInfo
