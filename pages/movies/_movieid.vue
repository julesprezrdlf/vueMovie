<!-- eslint-disable  -->
<template>
  <div class="container">
    <h1>{{movie.title}}</h1>
  </div>
</template>

<script>
/*eslint-disable*/
import axios from 'axios'

export default {
    name: 'single-movie',
    data() {
        return{
            movie: null,

        }
    },
    async fetch(){
        await this.getSingleMovie()
    },
    fetchDelay: 1000,
    methods: {
        async getSingleMovie(){
            const data = axios.get(`https://api.themoviedb.org/3/movie/${this.$route.params.movieid}?api_key=9d5bbddde93fb73ec32279ed6f8795c3&language=en-US`)
            const result = await data
            this.movie = result.data
            console.log(this.movie)
        }
    }
}
</script>

<style>

</style>
