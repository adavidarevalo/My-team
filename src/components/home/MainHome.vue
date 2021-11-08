<template>
    <section>
        <div class="Container">
            <h2>Find the best <span>talent</span></h2>
            <p>Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</p>
        </div>
            <div class="MainHome-Svg">
                <homeMain/>
            </div>   
    </section>
</template>

<script>
import homeMain from '@/assets/homeMain.vue'

export default ({
    name: 'MainHome',
    components: {
        homeMain
    }
})
</script>
<style scoped>
section{
    background: #004E56;
    color: white;
    height: 87vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    justify-content: center;
}
div{
    width: 80%;
    margin: 0 auto;
    max-width: 900px;
}
h2{
    font-size: 2.5rem;
    letter-spacing: 2px;
    font-weight: 900;
    margin: 0px;
}
span{
    color: #F57D7D;
}
p{
    font-size: 1.2rem;
    line-height: 25px;
}
.MainHome-Svg{
    position: absolute;
    left: 0px;
    bottom: -6px;
    width: 100%;
}
@media (min-width: 800px){
    h2{
        font-size: 4rem;
    }
}
@media (min-width: 1000px){
    .Container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 50px;
    }
    h2{
        font-size: 5rem;
        line-height: 74px;
        text-align: initial;
    }
    p{
        font-size: 1.4rem;
        line-height: 45px;
    }
}
</style>