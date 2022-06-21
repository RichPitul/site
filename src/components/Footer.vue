<template>
  <footer>
      <div>
          <div class="social">
              <a href="https://www.linkedin.com/in/richardpitul/" target="_blank">LinkedIn</a>
              <a href="https://github.com/RichPitul" target="_blank">GitHub</a>
          </div>
          <div class="legal">
              &copy; Copyright 2010 - {{new Date().getFullYear()}} | Richard Pitul
          </div>
      </div>
  </footer>
</template>

<script>
export default {
    name:'Footer'
}
</script>

<style lang="scss" scoped>
    footer {
        padding:1rem;   
        box-shadow: 0 10px 40px 0 rgb(0 0 0 / 15%);     
        > div {
            box-sizing: border-box;        
            max-width:1000px;
            margin:0 auto;
            display:flex;
            justify-content: space-between;
            align-items: center;
        }
    }
    .social {
        display: flex;
        gap:1em;
        a {
            color:inherit;
        }
    }
</style>