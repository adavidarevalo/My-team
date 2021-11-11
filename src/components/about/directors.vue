<template>
    <section>
        <div class="background-top">
            <directorsBackground/>
        </div>
        <h2>Meet the directors</h2>
        <div class="flip-container">
            <div
            v-for="item in elements"
            :key="item.name"
            class="flip-Element"
            >
            <directorContainer :item='item'/>
        </div>
        </div>
        <div class="background-botton">
            <directorsTwoBackground/>
        </div>
    </section>
</template>

<script>
import { DirectorsAbout } from '@/data/DirectorsAbout'
import directorContainer from '@/components/about/directorContainer.vue'
import directorsBackground from '@/assets/directorsBackground.vue'
import directorsTwoBackground from '@/assets/directorsTwoBackground.vue'

export default ({
    name: 'directors',
    data(){
        return{
            elements: DirectorsAbout,
        }
    },
    components: {
        directorContainer,
        directorsBackground,
        directorsTwoBackground
    }
})
</script>

<style scoped>
section{
    background: #004047;
    position: relative;
    z-index: 50;
}
h2{
    margin: 0px;
    color: white;
    font-size: 2rem;
    padding: 20px 0px;
    padding-top: 100px;
}
.flip-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-block: 20px 100px;
    max-width: 1000px;
    margin: 0 auto;
}
.flip-Element{
    position: relative;
    height: 253px;
    width: 281px;
    margin-block: 0px 40px;
    margin-inline: 25px;
}
.background-top{
    position: absolute;
    top: -100px;
    left: -98px;
}
.background-botton{
    position: absolute;
    bottom: -6px;
    right: 0px;
}
</style>