<template>
    <section>
        <div class="Container">
        <div class="Team-Header">
            <h3>Build & manage distributed teams like no one else.</h3>
            <TeamBackground/>
        </div>
        <div>
            <div 
            v-for="item in element" 
            :key="item.title"
            class="Team-Element"
            >
                <img :src='item.image' alt='element'/>
                <div class="Team-details">
                <h4>{{item.title}}</h4>
                <p>{{item.paragraph}}</p>
                </div>
            </div>
        </div>
        </div>
    </section>
</template>

<script>
import { TeamHome } from '@/data/TeamHome'
import TeamBackground from '@/assets/TeamBackground.vue'

export default ({
    name: 'Team',
    components: {
        TeamBackground
    },
    data(){
        return{
            element: []
        }
    },
    created(){
        this.element = TeamHome
    }
})
</script>

<style scoped>
section{
    background: #012F34;
    padding: 30px 0px;
    color: white;
}
.Team-Header{
    display: flex;
}
.Container{
    max-width: 1200px;
    margin: 0 auto;
}
h3{
    font-size: 2rem;
    text-align: initial;
    line-height: 40px;
}
h4{
    color: #F57D80;
        font-size: 1.1rem;
    margin-block: 17px;
}
.Team-Element{
    width: 80%;
    margin: 0 auto 30px;
}
p{
    color: #dddddd;
    font-weight: 600;
}
@media (min-width: 500px){
    h3{
        padding-inline: 60px;
    }
    .Team-Element{
        display: grid;
        grid-template-columns: 110px 1fr;
    }
    .Team-details{
        text-align: justify;
    }
}
@media (min-width: 1000px){
    .Container{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
}
</style>
