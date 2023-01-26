<!-- eslint-disable  -->
<template>
  <div class="indexContainer bg-white dark:bg-gray-900">
    <!-- <div class="sticky top-0 z-50">
      <Navbar />
    </div> -->

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
        <button v-if="searchInput !== ''" @click="clearSearch">
          Clear Search
        </button>
      </div>
    </div>

    <!-- end search -->

    <!-- Loading  -->

    <LoaderComponent v-if="$fetchState.pending" />

    <!-- end loading  -->

    <!-- Now playing -->

    <div
      v-if="searchInput == ''"
      class="
        moviesContainer
        grid grid-cols-1
        sm:grid-cols-2
        md:grid-cols-4
        xl:grid-cols-5
        place-content-center
        gap-10
        px-10
        bg-white
        dark:bg-gray-900
        text-gray-900
        dark:text-white
      "
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

    <!-- begin searched movies -->

    <div
      id="movie-grid"
      class="
        movies-grid
        grid grid-cols-1
        sm:grid-cols-2
        md:grid-cols-4
        xl:grid-cols-5
        place-content-center
        gap-10
        px-10
        bg-white
        dark:bg-gray-900
        text-gray-900
        dark:text-white
      "
    >
      <div class="movie" v-for="(movie, index) in searchedMovies" :key="index">
        <div class="movie-img">
          <img
            :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
            alt=""
          />
          <p class="review">{{ movie.vote_average }}</p>
          <p class="overview">{{ movie.overview }}</p>
        </div>
        <div class="info">
          <p class="title">
            {{ movie.title.slice(0, 25)
            }}<span v-if="movie.title.length > 25">...</span>
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
          <NuxtLink
            class="button button-light"
            :to="{ name: 'movies-id', params: { id: movie.id } }"
          >
            Get More Info
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- end searched movies-->
  </div>
</template>

<script>
/*eslint-disable*/
import axios from "axios";
export default {
  layout: "darkModeLayout",
  name: "home",
  head() {
    return {
      title: "Movie App - Latest Streaming Movie Info",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Get all the latest streaming movies in theaters & online",
        },
        {
          hid: "keywords",
          name: "keywords",
          content: "movies, stream, stremaing",
        },
      ],
    };
  },

  data() {
    return {
      movies: [],
      searchedMovies: [],
      searchInput: "",
      pageCounter : 1,
    };
  },

  async fetch() {
    if (this.searchInput === "") {
      await this.getMovies();
      return;
    }

    if (this.searchInput !== "") {
      await this.searchMovies();
    }
  },
  fetchDelay: 1000,

  // **********************
  // +++++++ METHODS ++++++
  // **********************

  methods: {
    async getMovies() {
      const data = axios.get(
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
      });
    },

    clearSearch() {
      this.searchInput = "";
      this.searchedMovies = [];
    },
    endScroller() {

      window.onscroll = () => {

        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;

          if (bottomOfWindow) {
            console.log("Reached End");
            console.log(this.pageCounter);
            this.pageCounter++;
            console.log(this.pageCounter);
            axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=9d5bbddde93fb73ec32279ed6f8795c3&language=en-US&page=${this.pageCounter}`
      ).then(response => {
        for (let index = 0; index < 20; index++) {
          this.movies.push(response.data.results[index])
        }

 ;
          });

        }
      };



    },
  },

  // **********************
  // +++++++ MOUNTED ++++++
  // **********************

  mounted() {
    this.endScroller();
  },

  // watch: {
  //   searchInput() {
  //     console.log(this.searchInput);
  //   },
  // },
};
</script>

<style scoped>
div {
  border: solid 1px red;
}
</style>
