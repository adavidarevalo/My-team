<template>
    <div 
            :class="flip ? 'flip-card Active' : 'flip-card'">
                <div 
                :class="flip ? 'flip-card-inner Active' : 'flip-card-inner'"
                >
                    <div class="flip-card-front">
                        <img :src='item.image' :alt='item.name'/>
                        <h2>{{item.name}}</h2>
                        <p>{{item.title}}</p>
                    </div>
                <div class="flip-card-back">
                    <h2>{{item.name}}</h2>
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fuga quas doloribus perferendis!"</p>
                    <div class="flip-card_backSocial">
                        <twitterIcon/>
                        <linkedliIcon/>
                    </div>
                </div>
            </div>
            <button
            @click="flipCard()"
            :class="flip && 'ButtonActive'"
            >
            <closeAbout
            v-if="flip"
            />
            <plusAbout
            v-else
            />
            </button>
            </div>
</template>

<script>
import twitterIcon from '@/assets/twitterIcon.vue'
import linkedliIcon from '@/assets/linkedliIcon.vue'
import closeAbout from '@/assets/closeAbout.vue'
import plusAbout from '@/assets/plusAbout.vue'

export default ({
    name: 'directorContainer',
    props:{
        item: Object
    },
    data(){
        return{
            flip: false
        }
    },
    components:{
        twitterIcon,
        linkedliIcon,
        closeAbout,
        plusAbout
    },
        methods: {
        flipCard(){
            this.flip = !this.flip
        }
    }
})
</script>

<style scoped>

.flip-card {
  perspective: 1000px; 
  height: 100%;
}
img{
    width: 96px;
    height: 96px;
    border: 2px solid #cafffe;
    border-radius: 50%;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}
.flip-card_backSocial{
    width: 70px;
    display: flex;
    justify-content: space-between;
    margin: 15px auto;
}

.Active{
    transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; 
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #012F34;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.flip-card-back {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #012F34;
    transform: rotateY(180deg);
}
button{
    position: relative;
    top: -28px;
    width: 56px;
    height: 56px;
    background: #f67e7e;
    border-radius: 50%;
    border: none;
}
.ButtonActive{
    background: #78C8C7;
}
h2, p{
    margin: 0px;
    transform: inherit;
}
h2{
    color: #79c8c7;
    margin-block: 10px;
}
p{
    color: white;
    width: 90%;
    margin: 0 auto;
    font-weight: 600;
}
</style>