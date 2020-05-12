<template>
<div id="app">
    <div class="body">
      <Nav class="nav"></Nav>
      <div class="block" />
      <router-view />
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav";

export default {
  name: 'App',
  data() {
    return {
      documents: []
    };
  },
  components:{
    Nav,
  }
}
</script>

<style lang="scss">
* {
  font-family: Montserrat, Helvetica Neue, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: Montserrat, Helvetica Neue, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.6;
  letter-spacing: 1px;
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  /* color: #2c3e50; */
  color: black;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .body {
    max-width: 1680px;
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
    .nav {
      position: fixed;
      z-index: 20;
      width: 100%;
    }
    .block {
      height: 80px;
    }
  }
}
</style>
