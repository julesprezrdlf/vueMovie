<!-- eslint-disable  -->
<template>
  <div class="indexContainer bg-white dark:bg-gray-900">
    <div class="sticky top-0 z-50">
      <Navbar />
    </div>

    <HeroSection />

    <!-- Search -->

    <div class="searchContainer bg-white dark:bg-gray-900 my-16 px-10 max-w-xl">
     <div class="container search">
      <input
        type="text"
        placeholder="Search"
        @keyup.enter="$fetch"
        v-model.lazy="searchInput"
      />
      <button v-show="searchInput !== ''" @click="clearSearch" class="button">
        Clear Search
      </button>
    </div>
    </div>

    <!-- end search -->

    <!-- Now playing -->

    <div 
      class="moviesContainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 place-content-center gap-10 px-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <div class="movie" v-for="(movie, index) in movies" :key="index">
        <div class="movieImage">
          <img
            :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
            alt=""
          />
          <p class="movieRating">{{ movie.vote_average }}</p>
          <p class="moviePlot">{{ movie.overview }}</p>
        </div>

        <div class="movieDetails">
          <p class="movieTitle">
            {{ movie.title.slice(0, 25) }}
            <span v-if="movie.title.length > 25"> ... </span>
          </p>
          <p class="releaseDate">Release: {{ movie.release_date }}</p>
        </div>

        <NuxtLink
          class="button buttonLight"
          :to="{ name: 'movies-movieid', params: { movieid: movie.id } }"
        >
          Get info
        </NuxtLink>
      </div>
    </div>


<!-- Movie search -->










  </div>
</template>

<script>
/*eslint-disable*/
import axios from "axios";
export default {
  name: "IndexPage",

  data() {
    return {
      movies: [],
      searchInput: '',
      searchedMovies: [],
    };
  },

  async fetch() {
    if (this.searchInput === '') {
      await this.getMovies();
      return
    }

  if (this.searchInput !== '') {
    await this.searchMovies();
  }

  },

  methods: {
    async getMovies() {
      const data = axios.get(
        // GET YOUR OWN API KEY AT https://www.themoviedb.org/settings/api

        // `https://api.themoviedb.org/3/movie/now_playing?api_key=
        // API_KEY
        // &language=en-US&page=1`

        `https://api.themoviedb.org/3/movie/now_playing?api_key=9d5bbddde93fb73ec32279ed6f8795c3&language=en-US&page=1`
      );
      const result = await data;
      result.data.results.forEach((movie) => {
        this.movies.push(movie);
      });
    },

    async searchMovies() {
      const data = axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=9d5bbddde93fb73ec32279ed6f8795c3&language=en-US&page=1&query=${this.searchInput}`
      );
      const result = await data;
      result.data.results.forEach((movie) => {
        this.searchedMovies.push(movie);
      })
      console.log(this.searchedMovies)
    },
  },
};
</script>

<style scoped>
div {
  border: solid 1px red;
}
</style>
