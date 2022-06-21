<template>
  <header>
    <div>
      <h1 class="logo">
        <span class="black">Richard</span>
        <span class="divider" />
        <span class="gold">Pitul</span>
      </h1>
      <button
        v-if="mobileNavIsVisible"
        @click="mobileNavIsOpen = !mobileNavIsOpen"
      >
        <svg
          width="20"
          height="11"
          viewBox="0 0 20 11"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 10v1H0v-1h20Zm0-5v1H0V5h20Zm0-5v1H0V0h20Z" />
        </svg>
      </button>
      <div
        :class="[
          mobileNavIsVisible ? 'has-mobile' : '',
          mobileNavIsOpen ? 'show-mobile' : '',
        ]"
        @click="mobileNavIsOpen = false"
      >
        <nav v-scroll-spy-active>
          <a @click="mobileNavIsOpen = false" href="#top">Welcome</a>          
          <a @click="mobileNavIsOpen = false" href="#be-inspired"
            >Be Inspired</a
          >
          <a @click="mobileNavIsOpen = false" href="#some-credentials"
            >Some Credentials</a
          >
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import { watch } from "@vue/runtime-core";
export default {
  name: "Header",
  data() {
    return {
      hash: window.location.hash,
      mobileNavIsVisible: false,
      mobileNavIsOpen: false,
      widthToRevertAt: 670,
    };
  },
  created() {},
  mounted() {
    setTimeout(() => {
      this.checkForMobileNav();
    }, 1000);
    window.addEventListener("resize", this.checkForMobileNav);
  },
  updated() {
    window.addEventListener("resize", this.checkForMobileNav);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkForMobileNav);
  },
  methods: {
    onActivate(target) {
      console.log(
        'Received event: "bv::scrollspy::activate" for target ',
        target
      );
    },
    checkForMobileNav() {
      this.mobileNavIsVisible = true;
      if (window?.innerWidth > this.widthToRevertAt) {
        this.mobileNavIsVisible = false;
      }
    },
  },
  watch: {
    "$route.hash"(hash) {
      this.hash = hash;
    },
  },
};
</script>
<style lang="scss" scoped>
header {
  position: sticky;
  top: 0;
  box-shadow: 0 10px 40px 0 rgb(0 0 0 / 15%);
  padding: 1rem;
  background-color: #fafafa;
  z-index: 2;
  > div {
    box-sizing: border-box;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
nav {
  display: flex;
  gap: 1em;
}
.has-mobile {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  &.show-mobile {
    pointer-events: all;
    nav {
      transform: translateX(0);
    }
    &:before {
      content: "";
      position: fixed;
      background: rgba(#2c3e50, 0.95);
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  nav {
    transition: transform 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
    transform: translateX(-100%);
    position: relative;
    background: #fafafa;
    box-shadow: 0 10px 40px 0 rgb(0 0 0 / 15%);
    flex-direction: column;
    padding: 1rem;
    height: 100%;
    width: 200px;
  }
}
a,
button {
  color: inherit;
  text-decoration: none;
  text-transform: uppercase;
  user-select: none;
  padding: 0.5em;
  border-radius: 5px;
  transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
  &.active {
    background: #2c3e50;
    color: #fafafa;
  }
  @media (hover: hover) {
    &:hover {
      background: #2c3e50;
      color: #fafafa;
    }
  }
}
button {
  background: none;
  border: 1px solid #2c3e50;
  cursor: pointer;
  svg {
    fill: #2c3e50;
    transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  &:hover {
    svg {
      fill: #fafafa;
    }
  }
}
.logo {
  text-transform: uppercase;
  display: flex;
  align-content: center;
  line-height: 1;
  .divider {
    display: inline-block;
    width: 3px;
    height: inherit;
    background: #2c3e50;
    margin: 0 5px;
  }
}
</style>

