<template>
  <section v-scroll-spy>
    <Hero />    
    <div id="be-inspired">
      <Cards />
      <Highlights />
    </div>
    <Credentials />
  </section>
</template>

<script>
import Hero from "@/components/Hero.vue";

import Cards from "@/components/Cards.vue";
import Highlights from "@/components/Highlights.vue";
import Credentials from "@/components/Credentials.vue";
export default {
  name: "Home",
  components: {
    Hero,
    Cards,
    Highlights,
    Credentials,
  },
};
</script>

<style>
</style>