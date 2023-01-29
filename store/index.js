/*eslint-disable*/

export const state = () => ({
  /*dark mode*/
  dark: false,

  /*cart*/
  cartCounter : 0,
  movies: []
});

export const getters = {
  /*dark mode*/
  dark: (state) => state.dark,

  /*cart*/
  storeCounter () {
    state.cartCounter
  }
};

export const mutations = {
  /*dark mode*/
  SET_DARK: (state, bool) => {
    state.dark = bool;


  },

  /*cart*/

ADD_ITEM(state){
state.cartCounter++;
},

ADD_MOVIE (state, movies) {
  state.movies.push({...movies})
},



  REMOVE_MOVIE(state, movie) {
    state.movies.splice(state.movies.indexOf(movie), 1);
  },
};

/*from https://thenextbit.de/en/blog/tailwind-dark-mode-toggle-nuxt-vuex */

