<template>
    <section>
        <mainAbout/>
        <directors/>
        <client/>
        <Banner/>
    </section>
</template>

<script>
import mainAbout from '@/components/about/mainAbout.vue'
import directors from '@/components/about/directors.vue'
import client from '@/components/about/client.vue'
import Banner from '../components/shared/Banner.vue'

export default {
    name: 'aboutUs',
    components: {
        mainAbout,
        directors,
        client,
        Banner
    }
}
</script>
