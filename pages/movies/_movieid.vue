<!-- eslint-disable  -->
<template>
  <div class="containerMovie bg-white dark:bg-gray-900 w-full">
    <div
      class="heartAnimation"
      v-bind:class="{ animate: isAnimated }"
      @click="toggleAnimate"
    ></div>
    <h1>COUNTER: {{ $store.state.cartCounter }}</h1>
    <h1>{{ $store.state.movies }}</h1>
    <h1>{{ movie.id }}</h1>
    <button @click="startCount">SUMAR</button>
    <button @click="substractCount">RESTAR</button>
    <br></br>
    <button @click="addMovie">ADD MOVIE</button>
    <h1>{{ movie.title }}</h1>
    <div class="movie-img">
      <img
        :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
        alt=""
      />
      <p class="review">{{ movie.vote_average }}</p>
      <p class="overview">{{ movie.overview }}</p>
    </div>
    <div class="info bg-white dark:bg-gray-900">
      <p class="title">
        {{ movie.title }}
      </p>
      <p class="release">
        Released:
        {{
          new Date(movie.release_date).toLocaleString("en-us", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })
        }}
      </p>
    </div>
    <NuxtLink class="button" :to="{ name: 'index' }">Back</NuxtLink>
  </div>
</template>

<script>
/*eslint-disable*/
import axios from "axios";
export default {
  layout: "darkModeLayout",
  name: "single-movie",
  data() {
    return {
      movie: "",
      isAnimated: false,
    };
  },
  async fetch() {
    await this.getSingleMovie();
  },
  fetchDelay: 1000,
  methods: {
    async getSingleMovie() {
      const data = axios.get(
        `https://api.themoviedb.org/3/movie/${this.$route.params.movieid}?api_key=9d5bbddde93fb73ec32279ed6f8795c3&language=en-US`
      );
      const result = await data;
      this.movie = result.data;
    },
    // delete start count
    startCount() {
      this.$store.commit("ADD_ITEM");
      // this.$store.commit('ADD_MOVIE',this.movie.id, this.movie.title)
      this.$store.commit("ADD_MOVIE", {
        id: this.movie.id,
        title: this.movie.title,
      });
    },

    substractCount(){
      this.$store.commit("REMOVE_ITEM")
    },
    addMovie() {
      const foundObject = this.$store.state.movies.find(
        (obj) => obj.id === this.movie.id
      );
      if (!foundObject) {
         this.$store.commit("ADD_ITEM");
        this.$store.commit("ADD_MOVIE", {
          id: this.movie.id,
          title: this.movie.title,
        });
      }
    },
    toggleAnimate() {
      this.isAnimated = !this.isAnimated;
    },
  },
};
</script>

<style>
.heartAnimation {
  padding-top: 2em;
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/66955/web_heart_animation.png");
  background-repeat: no-repeat;
  background-size: 2900%;
  background-position: left;
  height: 50px;
  width: 50px;
  cursor: pointer;
}

.animate {
  animation: heart-burst 0.8s steps(28) forwards;
}

@keyframes heart-burst {
  0% {
    background-position: left;
  }
  100% {
    background-position: right;
  }
}
</style>