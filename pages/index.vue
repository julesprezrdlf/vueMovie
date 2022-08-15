<!-- eslint-disable  -->
<template>
  <div class="indexContainer m-10">
    <HeroSection />
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

  async fetch(){
    await this.getMovies()
  },

  methods: {
    async getMovies() {
      const data = axios.get(
        // GET YOUR OWN API KEY AT https://www.themoviedb.org/settings/api
        `https://api.themoviedb.org/3/movie/now_playing?api_key=9d5bbddde93fb73ec32279ed6f8795c3&language=en-US&page=1`
      )
      const result=await data
      result.data.results.forEach(movie => {
        this.movies.push(movie)
      })
      console.log(this.movies)
    },
  },
};
</script>
