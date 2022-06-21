<template>
  <section id="top">
    <video src="@/assets/loop.mp4" loop muted autoplay></video>
    <div class="content">
      <h2>
        <p>
          <span class="white">Create</span>
          <span class="black">Something</span>
        </p>
        <p class="gold">Distinct</p>
      </h2>
      <HashButton href="#be-inspired" text="Let's Get Started" />
    </div>
  </section>
</template>

<script>
import HashButton from "@/components/HashButton.vue";
export default {
  name: "Hero",
  components: {
    HashButton,
  },
};
</script>

<style lang="scss" scoped>
section {
  background: #c5c5c5;
  text-transform: uppercase;
  display: grid;
  place-items: center;
  min-height: calc(100vh - 64px);
  position: relative;
  overflow: hidden;
}
video {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  object-fit: cover;
}
.content {
  position: relative;
}
p {
  font-size: 1.5em;
  margin: 0;
}
h2 {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  line-height: 1;
  gap: 0.5em;
  margin: 0 0 0.5em;
  p {
    display: flex;
    gap: 0.5em;
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>