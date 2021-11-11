<template>
    <footer>
        <section>
            <div class="Container">
                <div class="ContainerElement">
                <Logo/>
                <div class="FooterNav">
                    <router-link
                    :to='{name: "home"}'
                    >home</router-link>
                    <router-link
                    :to='{name: "aboutUs"}'
                    >about</router-link>
                </div>
                    <div class="FooterSocialFirst">
                        <a href="www.facebook.com" target="_blank">
                            <facebookIcon/>
                        </a>
                        <a href="www.facebook.com" target="_blank">
                            <twitterIcon/>
                        </a>
                        <a href="www.facebook.com" target="_blank">
                            <pinterestIcon/>
                        </a>
                    </div>
                </div>
                <div>
                    <p>987 Hillcrest Lane</p>
                    <p>Irvine, CA</p>
                    <p>California 92714</p>
                    <p>Call Us: 949-833-7432</p>
                    <div class="FooterSocial">
                        <a href="/" target="_blank">
                            <facebookIcon/>
                        </a>
                        <a href="/" target="_blank">
                            <twitterIcon/>
                        </a>
                        <a href="/" target="_blank">
                            <pinterestIcon/>
                        </a>
                    </div>
                    <p class="CopyRight">Copyright 2020. All Rights Reserved</p>
                </div>
            </div>
        </section>
    </footer>
</template>

<script>
import Logo from '@/assets/Logo.vue'
import pinterestIcon from '@/assets/pinterestIcon.vue'
import twitterIcon from '@/assets/twitterIcon.vue'
import facebookIcon from '@/assets/facebookIcon.vue'

export default ({
    name: 'PxFooter',
    components: {
        Logo,
        facebookIcon,
        twitterIcon,
        pinterestIcon
    }
})
</script>

<style scoped>
footer{
    background: #002529;
    padding: 30px 0px;
}
section{
    width: 80%;
    margin: 0 auto;
}
.Container{
    max-width: 1200px;
}
p{
    color: hsla(0,0%,100%,.6);
    margin: 0px;
    font-weight: 700;
    letter-spacing: 1px;
    margin-block: 5px;
}
a{
    color: white;
    font-weight: 900;
}
.FooterSocial{
    display: flex;
    justify-content: space-between;
    width: 160px;
    margin: 20px auto 30px;
}
.FooterNav{
    display: flex;
    justify-content: space-between;
    width: 130px;
    margin: 30px auto 20px;
}
.CopyRight{
    font-size: .9rem;
    margin-block: 35px 10px;
}
.FooterSocialFirst{
    display: none;
    justify-content: space-between;
    width: 160px;
    margin: 20px auto 30px;
}
@media (min-width: 800px){
    .Container{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .FooterSocial{
        display: none;
    }
    .FooterSocialFirst{
        display: flex;
    }
}
</style>