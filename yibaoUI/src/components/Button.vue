<template>
  <button class="button">
    11121121qqq
    <mytext />
  </button>
</template>

<script>
export default {
  components:{
    mytext: () => import('./text.vue')
  }
}
</script>

<style scoped>
</style>