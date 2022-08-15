<!-- eslint-disable  -->
<template>
  <div class="indexContainer bg-white dark:bg-black">
    <div class="sticky top-0 z-50"><Navbar/></div>
    
    <HeroSection />

  <!-- Search -->


    <!-- Now playing -->

    <div class="moviesContainer bg-white dark:bg-gray-900">
      <div class="movie" v-for=" (movie,index) in movies " :key="index">
        <div class="movieImage">
          <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="">
        </div>

        <div class="movieDetails text-gray-900 dark:text-white ">

          <p class="movieTitle"> {{ movie.title.slice(0, 25) }} <span v-if="movie.title.length > 25"> ... </span> </p>

        </div>
  

        <NuxtLink class="button buttonLight" :to="{ name: 'movies-movieid' , params:{ movieid : movie.id } } "> Get info </NuxtLink>
      </div>
    </div>



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
    };
  },

  async fetch() {
    await this.getMovies();
  },

  methods: {
    async getMovies() {
      const data = axios.get(
        // GET YOUR OWN API KEY AT https://www.themoviedb.org/settings/api

        // `https://api.themoviedb.org/3/movie/now_playing?api_key=
        // API_KEY
        // &language=en-US&page=1`

        `https://api.themoviedb.org/3/movie/now_playing?api_key=9d5bbddde93fb73ec32279ed6f8795c3&language=en-US&page=1`);
      const result = await data;
      result.data.results.forEach((movie) => {
        this.movies.push(movie);
      });
      console.log(this.movies);
    },
  },
};
</script>

<style scoped>


</style>