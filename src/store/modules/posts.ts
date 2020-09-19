import { Module } from 'vuex';
import { ISPosts, post, postFromServer, RootState } from './types';

export const posts: Module<ISPosts, RootState> = {
  state: {
    posts: [],
    loading: true,
  },
  getters: {
    getAllPosts: (state) => state.posts,
    getPostsLoading: (state) => state.loading,
  },
  actions: {
    async fetchPosts({ commit }, limit: number) {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`),
          data: [] = await res.json(),
          posts: post[] = data.map(
            (elem: postFromServer): post => ({
              id: elem.id,
              body: elem.body,
              title: elem.title,
            })
          );

        commit('updateAllPosts', posts);
      } catch (error) {
        console.log(error);
      }
    },
  },
  mutations: {
    updateAllPosts(state, posts: post[]) {
      state.posts = posts;
      state.loading = false;
    },
  },
};
