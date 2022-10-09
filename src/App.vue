<script setup lang="ts">
import { reactive, ref } from 'vue'

</script>

<template>
  <div class="content">
    <div class="cc">123aa</div>
  </div>
</template>

<style scoped lang="scss">

.content {
  @apply flex justify-center  items-center;
  width:            100px;
  height:           100px;
  background-color: orange;

  .cc {
    width:            40px;
    height:           40px;
    background-color: aqua;
  }
}

</style>
