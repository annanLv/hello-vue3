<script setup lang="ts">

let test = ref('1231');

</script>

<template>
  <router-view></router-view>
</template>

<style scoped lang="scss">

.content {
  @apply flex justify-center  items-center;
  width:            100px;
  height:           100px;
  background-color: orange;
  // 只有英文和数字时增加这个完成换行
  //word-break: break-word;

  .cc {
    width:            40px;
    height:           40px;
    background-color: aqua;
  }
}

</style>
