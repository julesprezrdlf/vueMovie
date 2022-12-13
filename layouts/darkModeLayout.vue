<template>
    <div
      id="app"
      class="bg-white dark:bg-black"
      :class="dark ? 'dark' : 'light'"
    >
      <Nuxt />
    </div>
  </template>

  <script>
 /*eslint-disable*/
    import { mapGetters } from 'vuex';

    export default {

    name: 'darkModeLayout', // id of the layout

      computed: {
        ...mapGetters(['dark'])
      }
    };
  </script>