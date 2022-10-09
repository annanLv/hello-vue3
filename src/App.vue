<script setup lang="ts">

let test = ref('1231');

</script>

<template>
  <div class="content">
    <div class="cc">123aa647821687436728167486216948621784678912678647281648726178</div>
  </div>
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
