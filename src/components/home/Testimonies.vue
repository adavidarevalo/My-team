<template>
    <section>
        <div class="Testimony-Background">
            <TestimonyBackground/>
        </div>
        <h2>Delivering real results for top companies. Some of our <span>success stories.</span></h2>
        <div class="Testimony-Container">
            <div
            v-for="item in element"
            :key="item.name"
            class="Testimony-Element"
            >
                <div class="Testimony-paragraph">
                    <p>{{item.Testimony}}</p>
                </div>
                <h4>{{item.name}}</h4>
                <p>{{item.title}}</p>
                <img :src='item.image' :alt='item.name'/>
            </div>
        </div>
        <div class="Testimony-Background_footer">
            <TestimonyFooterBackground/>
        </div>
    </section>
</template>

<script>
import { TestimonyHome } from '@/data/TestimonyHome.js'
import TestimonyBackground from '@/assets/TestimonyBackground.vue'
import TestimonyFooterBackground from '@/assets/TestimonyFooterBackground.vue'
export default ({
    name: 'Testimonies',
    components: {
        TestimonyBackground,
        TestimonyFooterBackground
    },
    data(){
        return{
            element: TestimonyHome
        }
    },

    setup() {
        
    },
})
</script>

<style scoped>
section{
    background: #004147;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
}
span{
    color: #78C8C7;
}
.Testimony-Background{
    align-self: baseline;
    max-width: 1100px;
}
h2{
    font-size: 2.1rem;
    width: 80%;
    line-height: 40px;
    max-width: 574px;
}
img{
    width: 62px;
    height: 62px;
    border-radius: 50%;
    border: 2px solid #c4fffe;
}
.Testimony-Element{
    width: 80%;
    margin: 0 auto 30px;
    font-weight: 600;
    max-width: 650px;
}
h4{
    margin-block: 40px 14px;
    font-size: 1.2rem;
    color: #79c8c7;
}
.Testimony-paragraph{
    background-image: url('../../assets/icon-quotes.svg');
    background-repeat: no-repeat;
    background-position: center;
    min-height: 66px;
}
.Testimony-Container{
    max-width: 1200px;
}
.Testimony-Background_footer{
    align-self: end;
}
@media (min-width: 600px){
    h2{
        font-size: 2.4rem;
    }
}
@media (min-width: 800px){
    .Testimony-Container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 20px;
    }
}
</style>