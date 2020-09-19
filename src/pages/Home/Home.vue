<template>
  <div class="home">
    <img alt="Vue logo" src="./logo.png" />
    <h2>Добро пожаловать в мое первое приложение на Vue3 с TypeScript <span>❣</span></h2>
    <div class="home__info">
      <p>
        Приложение было создано для изучение основ работы с фрэймоврком Vue.js. На примере этого приложения я разобрал такие
        темы как: vue-router, vuex, совместная работа Vue и TypeScript.
      </p>
      <p>
        Также были разобраны темы работы с сервером и обработки асинхронных запросов.
      </p>
      <p>
        Как итог, получилось несложное приложение для создания задач. Задачи можно редактировать, удалять и фильтровать.
        <br />
        Кроме этого есть страица постов, на которой происходить асинхронная загрузка постов с сервиса
        <a href="https://jsonplaceholder.typicode.com/" target="_blank">jsonplaceholder</a>.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import './Home.scss';
</style>
