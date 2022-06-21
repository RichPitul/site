<template>
  <div class="arrow" :class="[invert ? 'invert' : '', rotate ? 'rotate' : '']"><ArrowIcon /></div>
</template>

<script>
import ArrowIcon from '@/components/svg/icon_arrow';
export default {
    name:'ArrowButton',
    props: {
        invert:Boolean,
        rotate:Boolean
    },
    components:{ArrowIcon}
}
</script>

<style lang="scss" scoped>
    .arrow {
        background:#fff;
        height: 40px;
        width: 40px;
        border-radius: 3px;
        text-align: center;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;        
        svg {
            width:14px;
            height:14px;
            fill:#648dc2;
            vertical-align: middle;
            transition: transform 0.25s cubic-bezier(1, 0.5, 0.8, 1);
        }
        &.invert {
            background:#648dc2;
            svg {
                fill:#fff;
            }
        }
        &.rotate {
            svg {
                transform: rotateZ(90deg);
            }
        }
    }
</style>