<!-- eslint-disable  -->
<template>
  <div class="loading">
    <span></span>
  </div>
</template>

<script>
export default {

}
</script>

<style>
/* eslint-disable */
.loading {
	 height: 100vh;
	 width: 100%;
	 display: flex;
	 justify-content: center;
	 align-items: center;
}
 @keyframes circle-loading {
	 to {
		 transform: rotateZ(360deg);
	}
}
 .loading span {
	 display: block;
	 width: 70px;
	 height: 70px;
	 border-radius: 50%;
	 border: 2px solid transparent;
	 border-top-color: rgb(184, 24, 24);
	 animation: circle-loading 1200ms ease infinite;
}

</style>
