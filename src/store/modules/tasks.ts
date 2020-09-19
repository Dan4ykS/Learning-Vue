import { Module } from 'vuex';
import { ISTasks, IUpdateTask, RootState, task } from './types';

const updateDataInLocalStorage = (updatedTasks: task[]): void => {
  localStorage.setItem('tasks', JSON.stringify(updatedTasks));
};

export const tasks: Module<ISTasks, RootState> = {
  state: {
    tasks: [],
  },
  getters: {
    getAllTasks: (state): task[] => state.tasks,
    getCompleted: (state): task[] => state.tasks.filter((task) => task.completed),
    getActive: (state): task[] => state.tasks.filter((task) => !task.completed),
  },
  actions: {
    loadTask({ commit }) {
      const tasks = localStorage.getItem('tasks');
      if (tasks) {
        const tasksData = JSON.parse(tasks) as task[];
        commit('updateTasks', tasksData);
      }
    },
    saveTasks({ state }) {
      if (state.tasks.length) {
        updateDataInLocalStorage(state.tasks);
      }
    },
    addNewTask({ commit, state }, newTask: string) {
      commit('addNewTask', newTask);
      updateDataInLocalStorage(state.tasks);
    },
    removeTask({ commit, state }, taskId: number) {
      commit('removeTask', taskId);
      updateDataInLocalStorage(state.tasks);
    },
    changeEditable({ commit, state }, taskId: number) {
      commit('changeEditable', taskId);
      updateDataInLocalStorage(state.tasks);
    },
    changeTask({ commit, state }, dataForChange: IUpdateTask) {
      commit('changeTask', dataForChange);
      updateDataInLocalStorage(state.tasks);
    },
    changeCompleted({ commit, state }, taskId: number) {
      commit('changeCompleted', taskId);
      updateDataInLocalStorage(state.tasks);
    },
  },
  mutations: {
    updateTasks(state, tasks: task[]) {
      state.tasks = tasks;
    },
    addNewTask(state, newTask: string) {
      state.tasks.unshift({
        id: Date.now(),
        completed: false,
        editable: false,
        task: newTask,
      });
    },
    removeTask(state, taskId: number) {
      const taskIndex = state.tasks.findIndex((task) => task.id === taskId);
      state.tasks.splice(taskIndex, 1);
    },
    changeEditable(state, taskId: number) {
      const taskIndex = state.tasks.findIndex((task) => task.id === taskId),
        updatedTask: task = {
          ...state.tasks[taskIndex],
          editable: !state.tasks[taskIndex].editable,
        };

      state.tasks.splice(taskIndex, 1, updatedTask);
    },
    changeTask(state, dataForUpdate: IUpdateTask) {
      const taskIndex = state.tasks.findIndex((task) => task.id === dataForUpdate.id),
        updatedTask: task = {
          ...state.tasks[taskIndex],
          task: dataForUpdate.updatedTask,
        };

      state.tasks.splice(taskIndex, 1, updatedTask);
    },
    changeCompleted(state, taskId: number) {
      const taskIndex = state.tasks.findIndex((task) => task.id === taskId),
        updatedTask: task = {
          ...state.tasks[taskIndex],
          completed: !state.tasks[taskIndex].completed,
        };

      state.tasks.splice(taskIndex, 1, updatedTask);
    },
  },
};
