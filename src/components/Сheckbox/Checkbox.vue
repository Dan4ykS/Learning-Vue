<template>
  <div class="checkbox" :class="{ checkbox_checked: chekedCondition }" @click="changeFunc">
    <span></span>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    props: {
      changeFunc: Function,
      chekedCondition: Boolean,
    },
  });
</script>

<style lang="scss" scoped>
  @import './Checkbox.scss';
</style>
