<template>
  <div v-if="loading" class="loadingio-spinner-ellipsis-58d1uacm30o">
    <div class="ldio-4hs57pso3p6">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
  <slot v-else></slot>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    props: {
      loading: Boolean,
      funcForRender: Function,
      conditionForFunc: Boolean,
    },
    created() {
      if (this.funcForRender && this.conditionForFunc) {
        this.funcForRender();
      }
    },
  });
</script>

<style lang="scss">
  @import './DataLoader.scss';
</style>
