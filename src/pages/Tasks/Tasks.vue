<template>
  <div class="tasks">
    <h2>Страница для менеджмента задач</h2>
    <div class="tasks__header flexWrap flexWrap_center">
      <add-task />
      <select v-model="filter">
        <option value="all">Все</option>
        <option value="completed">Выполненные</option>
        <option value="active">Активные</option>
      </select>
    </div>
    <list-view :data="dataForListView()">
      <template v-slot:component="{ elem }">
        <div class="tasks__item flexWrap flexWrap_center" :class="{ tasks__item_completed: elem.completed }">
          <checkbox :changeFunc="() => changeCompleted(elem.id)" :chekedCondition="elem.completed" />
          <textarea
            class="formControl"
            @input="(e) => changeTask({ id: elem.id, updatedTask: e.target.value })"
            :class="{ editable: elem.editable }"
            :value="elem.task"
            :readonly="!elem.editable"
          />
          <div class="icons flexWrap">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-pencil-square"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              @click="changeEditable(elem.id)"
              :class="{ active: elem.editable }"
            >
              <path
                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
              />
              <path
                fill-rule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
              />
            </svg>
            <span @click="removeTask(elem.id)" class="close"></span>
          </div>
        </div>
      </template>
      <template v-slot:noData>
        <h2>{{ noDataText() }}</h2>
      </template>
    </list-view>
  </div>
</template>

<script lang="ts">
  import ListView from '@/components/ListView';
  import Checkbox from '@/components/Сheckbox';
  import AddTask from './__addTask';
  import { filter } from './types';
  import { defineComponent } from 'vue';
  import { mapActions, mapGetters } from 'vuex';

  export default defineComponent({
    data: () => ({
      taskText: '',
      filter: 'all' as filter,
    }),
    methods: {
      ...mapActions(['loadTask', 'saveTasks', 'removeTask', 'changeTask', 'changeEditable', 'changeCompleted']),
      noDataText() {
        if (this.filter === 'all') {
          return 'Вы пока не добавили задач';
        } else if (this.filter === 'completed') {
          return 'У вас нет завершенных задач';
        }
        return 'Вы еще не выполняли задач';
      },
      dataForListView() {
        if (this.filter === 'all') {
          return this.getAllTasks;
        } else if (this.filter === 'completed') {
          return this.getCompleted;
        } else {
          return this.getActive;
        }
      },
    },
    computed: mapGetters(['getAllTasks', 'getCompleted', 'getActive']),
    components: {
      ListView,
      AddTask,
      Checkbox,
    },
    created() {
      if (!this.getAllTasks.length) {
        this.loadTask();
      }
    },
  });
</script>

<style lang="scss">
  @import './Tasks.scss';
</style>
