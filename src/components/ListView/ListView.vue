<template>
  <template v-if="data.length">
    <slot v-for="el of data" name="component" :elem="el"></slot>
  </template>
  <slot v-else name="noData">
    <div class="noData">Нет данных</div>
  </slot>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    props: {
      data: Array,
    },
  });
</script>

<style lang="scss">
  @import './ListView.scss';
</style>
