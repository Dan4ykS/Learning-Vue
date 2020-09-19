<template>
  <div id="nav">
    <router-link to="/">Главная</router-link>
    |
    <router-link to="/tasks">Задачи</router-link>
    |
    <router-link to="/posts">Посты</router-link>
  </div>
  <hr />
  <div class="contentWrapper">
    <router-view />
  </div>
</template>

<style lang="scss">
  @import '@/styles/reboot.scss';
  @import '@/styles/variables.scss';
  @import '@/styles/flexWraps.scss';
  @import './App.scss';
</style>
