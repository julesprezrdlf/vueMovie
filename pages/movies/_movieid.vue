<!-- eslint-disable  -->
<template>
    <div class="container bg-white dark:bg-gray-900">
        <h1>{{ movie.title }}</h1>
        <div class="movie-img">
            <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="" />
            <p class="review">{{ movie.vote_average }}</p>
            <p class="overview">{{ movie.overview }}</p>
        </div>
        <div class="info bg-white dark:bg-gray-900">
            <p class="title">
                {{ movie.title
                }}
            </p>
            <p class="release">
                Released:
                {{
        new Date(movie.release_date).toLocaleString('en-us', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        })
                }}</p>
        </div>
        <NuxtLink class="button" :to="{name : 'index'}">Back</NuxtLink>
    </div>
</template>

<script>
/*eslint-disable*/
import axios from 'axios'
export default {
    layout: 'darkModeLayout',
    name: 'single-movie',
    data() {
        return {
            movie: '',
        }
    },
    async fetch() {
        await this.getSingleMovie()
    },
    fetchDelay: 1000,
    methods: {
        async getSingleMovie() {
            const data = axios.get(`https://api.themoviedb.org/3/movie/${this.$route.params.movieid}?api_key=9d5bbddde93fb73ec32279ed6f8795c3&language=en-US`)
            const result = await data
            this.movie = result.data
        }
    }
}
</script>

<style>

</style>