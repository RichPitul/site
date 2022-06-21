<template>
  <Header />
  <router-view />
  <Footer />
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  setup() {},
  components: {
    Header,
    Footer,
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #161616;
}
h1 {
  margin: 0;
}
body {
  margin: 0;
  padding: 0;
  background-color: #fafafa;
}
html {
  scroll-behavior: smooth;
}
a {
  text-decoration: none;
}
.gold {
  color: #648dc2;
}
.white {
  color: #fafafa;
}
.black {
  color: #161616;
}
</style>
