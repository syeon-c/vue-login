<template>

  <div :key="componentKey">
  <h1>Todo List Page</h1>

  <Suspense>
    <template #fallback>
      loading...
    </template>
    <template #default>
      <TodoListComponent :query="queryRef" @movePage="movePage" :key="componentKey"></TodoListComponent>
    </template>
  </Suspense>

  </div>

</template>

<script setup>

import {useRoute, useRouter} from "vue-router";
import {ref, watch} from "vue";
import TodoListComponent from "@/components/todo/TodoListComponent";

const route = useRoute()
const router = useRouter()
const componentKey = ref(0)

const queryRef = ref(route.query)

console.log(queryRef)

const movePage = (pageNum) => {

  router.push('/todo/list?page='+pageNum)

  queryRef.value.page=pageNum
  componentKey.value++

}

watch(() => route.fullPath, () => {
  queryRef.value.page=route.query.page
  componentKey.value++
})


</script>

<style scoped>

</style>
