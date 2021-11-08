<template>
    <header>
        <section>
            <div class="NavAndLogo">
                <router-link
                :to="{name: 'home'}"
                ><Logo/></router-link>
                <nav>
                    <router-link
                    :to="{name: 'home'}">home</router-link>
                    <router-link
                    :to="{name: 'aboutUs'}">about</router-link>
                </nav>
            </div>
            <div>
                <button @click="changeMenu()">
                    <div v-if='!menu'>
                        <menuIcon/>
                    </div>
                    <div v-else>
                        <closeMenu/>
                    </div>
                </button>
                <router-link
                :to="{name: 'contactUs'}"
                class="Contact-Button">
                contact us
                </router-link>
            </div>
        </section>
        <div :class="menu ? 'Menu Open' : 'Menu'">
            <router-link
                :to="{name: 'home'}">home</router-link>
            <router-link
                :to="{name: 'aboutUs'}">about</router-link>
            <router-link
            class="ContactButton"
                :to="{name: 'contactUs'}">contact us</router-link>
        </div>
    </header>
</template>

<script>
import Logo from '@/assets/Logo.vue'
import menuIcon from '@/assets/menuIcon.vue'
import closeMenu from '@/assets/closeMenu.vue'

export default {
    name: 'PxHeader',
    components: {
        Logo,
        menuIcon,
        closeMenu
    },
    data(){
        return{
            menu: false
        }
    },
    methods: {
        changeMenu(){
            this.menu = !this.menu
        }
    }
}
</script>

<style scoped>
header{
    background: #004E56;
    padding: 20px 0px;
    display: flex;
    flex-direction: column;
    position: relative;
}
section{
    width: 80%;
    margin: 0px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.NavAndLogo{
    display: flex;
    align-items: center;
}
nav{
    width: 180px;
    display: flex;
    justify-content: space-around;
    font-size: 1.1rem;
    font-weight: 600;
    display: none;
    margin-left: 15px;
}
nav > a{
    color: white;
    font-size: 1.2rem;
}
a:hover,
a:active{
    transition: all .5s ease;
    color: #f67e7e;
}

button{
    border: none;
    background: none;
}
.Menu{
    position: absolute;
    width: 100%;
    padding: 20px 0px;
    transform: translateY(-200px);
    transition: all .5s ease;
    background: #004E56;
    z-index: 200;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.Menu > a{
    font-size: 1.3rem;
    margin-bottom: 10px;
    color: white;
    font-weight: 600;
    letter-spacing: 2px;
}
.Open{
    transform: translateY(50px);
}
.ContactButton{
    border: 0.5px solid white;
    border-radius: 20px;
    padding: 5px;
    margin-top: 15px;
    width: 200px;
}
.Contact-Button{
    color: white;
    border: 1px solid white;
    padding: 10px 15px;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 600;
    display: none;
    transition: all .5s ease;
}
.Contact-Button:hover,
.Contact-Button:active{
    background: white;
}
@media (min-width: 800px){
    nav{
        display: flex;
    }
    button{
        display: none;
    }
    .Contact-Button{
        display: block;
    }
}
</style>