<template>
  <form @submit.prevent="submit" class="tasks__addTodo flexWrap">
    <input class="formControl" v-model="task" placeholder="Создать задачу!" />
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      class="bi bi-caret-right-square-fill"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      @click="submit"
    >
      <path
        fill-rule="evenodd"
        d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.5 10a.5.5 0 0 0 .832.374l4.5-4a.5.5 0 0 0 0-.748l-4.5-4A.5.5 0 0 0 5.5 4v8z"
      />
    </svg>
  </form>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { mapActions } from 'vuex';

  export default defineComponent({
    data: () => ({
      task: '',
    }),
    methods: {
      ...mapActions(['addNewTask']),
      submit() {
        if (this.task.trim()) {
          this.addNewTask(this.task.trim());
          this.task = '';
        }
      },
    },
  });
</script>

<style lang="scss" scoped>
  @import './AddTask.scss';
</style>
