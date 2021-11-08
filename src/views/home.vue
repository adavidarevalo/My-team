<template>
    <section>
        <MainHome/>
        <Team/>
        <Testimonies/>
        <Banner/>
    </section>
</template>

<script>
import Banner from '../components/shared/Banner.vue'
import MainHome from '../components/home/MainHome.vue'
import Team from '../components/home/Team.vue'
import Testimonies from '../components/home/Testimonies.vue'

export default {
    name: 'home',
    components: {
        Banner,
        MainHome,
        Team,
        Testimonies
    }
}
</script>
