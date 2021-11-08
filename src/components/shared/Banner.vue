<template>
    <section>
        <h3>Ready to get started?</h3>
        <router-link
        :to="{name: 'contactUs'}"
        >contact us</router-link>
        <div class="BakgroundImage">
            <BannerBackground/>
        </div>
    </section>
</template>

<script>
import BannerBackground from '@/assets/BannerBackground.vue'

export default ({
    name: 'Banner',
    components: {
        BannerBackground
    }
})
</script>

<style scoped>
section{
    background: #F57D7D;
    position: relative;
    padding: 40px 0px 0px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 225px;
}
h3{
    color: black;
    font-size: 2rem;
}
a{
    color: #012f34;
    border: 1px solid #012f34;
    font-size: 1.4rem;
    padding: 10px 15px;
    border-radius: 50px;
    font-weight: 500;
    transition: all .5s ease;
}
a:hover,
a:active{
    background: #012f34;
    color: white;
}
.BakgroundImage{
    align-self: baseline;
    position: relative;
    bottom: -6px;
}
@media (min-width: 650px){
    .BakgroundImage{
        position: absolute;
    }
    section{
        justify-content: center;
        padding: 0px;
    }
}
</style>
