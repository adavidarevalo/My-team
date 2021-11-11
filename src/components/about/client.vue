<template>
    <section>
        <div class="background-container">
            <clientsBackground/>
        </div>
        <h2>Some of our clients</h2>
        <div class="Client-Icons">
            <img src='@/assets/logo-the-verge.png' alt='the verge'/>
            <img src='@/assets/logo-jakarta-post.png' alt='logo-jakarta-post'/>
            <img src='@/assets/logo-the-guardian.png' alt='logo-the-guardian'/>
            <img src='@/assets/logo-tech-radar.png' alt='logo-tech-radar'/>
            <img src='@/assets/logoGadgetsNow.png' alt='Gadgets Now'/>
        </div>
    </section>
</template>

<script>
import clientsBackground from '@/assets/clientsBackground.vue'
export default ({
    name: 'client',
    components: {
        clientsBackground
    }
})
</script>

<style scoped>
section{
    background: #012F34;
    position: relative;
    padding-block: 35px 10px;
}
.background-container{
    position: absolute;
    top: -100px;
    left: -100px;
}
h2{
    color: white;
    font-weight: 600;
    width: 80%;
    margin: 0 auto;
    padding-block: 30px 20px;
    font-size: 2rem;
    font-weight: 900;
}
img{
    width: 60%;
    margin-block: 20px;
    max-width: 200px;
}
.Client-Icons{
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 1500px;
    margin: 0 auto;
}
</style>