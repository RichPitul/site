<template>
  <a :class="[light ? 'is-light' : 'is-dark']" :href="href"><span>{{text}}</span></a>
</template>

<script>
export default {
    name:'HashButton',
    props: {
        text:String,
        href:String,
        light:Boolean
    }
}
</script>

<style lang="scss" scoped>
    a {
        display: inline-block;
        border-radius: 3px;        
        text-transform: uppercase;
        font-size: 0.75em;
        font-weight: bold;
        letter-spacing: 2px;
        padding:1.1rem 1.8rem;
        transition:all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);         
        color:#fff;
        span {
            display: inline-block;
            transition:all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);  
        }
        &.is-light {            
            background-color: #648dc2;
            border:1px solid #648dc2;
        }
        &.is-dark {
            background-color: #161616;
        }
        &:hover {
            color:#161616;
            background:#fff;
            span {
                transform:scale(1.1);
            }
        }
    }
</style>