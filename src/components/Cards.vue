<template>
  <section class="nav-items">
    <a
      v-for="(nav, id) in $store.state.navItems"
      target="_blank"
      :href="nav.path"
      :key="id"
      :style="{
        'background-image':
          'url(' + require('@/assets/cards/' + nav.image) + ')',
      }"
    >
      <div class="details">
        <div class="text white">
          <p class="title">{{ nav.title }}</p>
          <p class="subtitle uppercase">{{ nav.subtitle }}</p>
        </div>
        <ArrowButton />
      </div>
    </a>
  </section>
</template>

<script>
import ArrowButton from "@/components/ArrowButton";
export default {
  name: "Cards",
  components: { ArrowButton },
};
</script>
<style lang="scss" scoped>
.nav-items {
  scroll-margin-top: 70px;
  scroll-behavior: smooth;
  scroll-snap-type: both mandatory;
  display: flex;
  margin: 0 auto;
  overflow: auto;
  flex-direction: column;
  > a {
    scroll-snap-align: start;
    flex-grow: 0;
    flex-shrink: 0;
    width: 100%;
    background-color: #c1c1c1;
    background-size: cover;
    background-position: center;
    padding: 50px 40px;
    height: 315px;
    max-height: calc(100vh - 200px);
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    user-select: none;
    box-sizing: border-box;
    &:after {
      content: " ";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.3);
      transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
      backdrop-filter: blur(5px) brightness(70%);
    }
    &:hover {
      &:after {
        background-color: rgba(0, 0, 0, 0.65);
        backdrop-filter: blur(0px) brightness(100%);
      }
      .details {
        color: #648dc2;
        transform: translateY(-23%);
        &:after {
          width: 100%;
        }
      }
    }
  }
}
.details {
  border-bottom: 1px solid #fff;
  text-align: left;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
  transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:after {
    content: " ";
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 0;
    height: 2px;
    background: #648dc2;
    transition: width 0.4s 0.1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .text {
    flex-grow: 1;
    font-weight: bold;
    margin-right: 1em;
  }
  .title {
    font-size: 1.65em;
    margin: 0;
    letter-spacing: 0;
    line-height: 1;
  }
  .subtitle {
    font-size: 0.75em;
    letter-spacing: 2px;
    line-height: 1;
  }
}
@media (min-width: 900px) {
  .nav-items {
    flex-direction: row;
    > a {
      flex-grow: 1;
      flex-shrink: unset;
      height: 495px;
      margin-bottom: 0;
    }
  }
}
</style>