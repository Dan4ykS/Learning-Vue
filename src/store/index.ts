import { posts } from './modules/posts';
import { tasks } from './modules/tasks';
import { photos } from './modules/photos';
import { createStore } from 'vuex';

export default createStore({
  modules: {
    tasks,
    posts,
    photos,
  },
});
