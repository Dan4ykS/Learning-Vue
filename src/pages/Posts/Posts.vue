<template>
  <div class="posts">
    <div class="posts__header">
      <h2>Страница для вывода постов</h2>
      <p>Работа с асинхронными запросами в Vue</p>
    </div>
    <data-loader :funcForRender="() => fetchPosts(5)" :loading="getPostsLoading" :conditionForFunc="!getAllPosts.length">
      <list-view :data="getAllPosts">
        <template v-slot:component="{ elem }">
          <div class="posts__item">
            <h3>{{ elem.title }}</h3>
            <hr>
            <div>{{ elem.body }}</div>
          </div>
        </template>
      </list-view>
    </data-loader>
  </div>
</template>

<script lang="ts">
  import DataLoader from '@/components/DataLoader';
  import ListView from '@/components/ListView';
  import { defineComponent } from 'vue';
  import { mapActions, mapGetters } from 'vuex';

  export default defineComponent({
    methods: mapActions(['fetchPosts']),
    computed: mapGetters(['getAllPosts', 'getPostsLoading']),
    components: {
      DataLoader,
      ListView,
    },
  });
</script>

<style lang="scss" scoped>
  @import './Posts.scss';
</style>
