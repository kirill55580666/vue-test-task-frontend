<template>
  <main-view />
</template>

<style lang="scss">
* {
  box-sizing: border-box;
}
body {
  width: 100vw;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
import MainView from "@/views/main/main-view.vue";
export default {
  components: { MainView },
};
</script>
