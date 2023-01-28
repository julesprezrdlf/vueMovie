/*eslint-disable*/

export const state = () => ({
  /*dark mode*/
  dark: false,

  /*cart*/
  movies: []
});

export const getters = {
  /*dark mode*/
  dark: (state) => state.dark

  /*cart*/
};

export const mutations = {
  /*dark mode*/
  SET_DARK: (state, bool) => {
    state.dark = bool;


  },

  /*cart*/
  ADD_MOVIE(state, movie) {
    state.movies.push({ content: movie, done: false });
  },
  REMOVE_MOVIE(state, movie) {
    state.movies.splice(state.movies.indexOf(movie), 1);
  },
};

/*from https://thenextbit.de/en/blog/tailwind-dark-mode-toggle-nuxt-vuex */
