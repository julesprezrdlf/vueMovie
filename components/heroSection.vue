<!-- eslint-disable  -->
<template>
  <div class="heroSectionContainer">
    <!-- https://flowbite.com/blocks/marketing/hero/ -->
<section class="bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Movie Database Catalog</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">A small FrontEnd project built with Nuxt and Tailwind CSS. The data provided comes from TMDB. Dark mode is avaliable. </p>
         
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Explore
            </a> 
        </div>
        <div class="popcorn hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="../assets/popcorn.png" alt="popcorn">
        </div>                
    </div>
</section>













  </div>
</template>

<script>
export default {

}
</script>

<style>

.popcorn {
    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    margin-left: 30px;
    margin-top: 5px;
}

@keyframes floating {
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 30px); }
    100%   { transform: translate(0, -0px); }
}
</style>
