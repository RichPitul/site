<template>
    <vueper-slides  class="no-shadow">
        <vueper-slide v-for="(slide, i) in slides" :key="i" :title="slide.title" :content="slide.content" />
    </vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
    name:'Gallery',
    components: { VueperSlides, VueperSlide },
    props: {
        slides: {
            type:Array,
            default:[]
        }
    }
}
</script>

<style lang="scss" scoped>

</style>