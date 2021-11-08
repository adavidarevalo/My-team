import { createWebHistory, createRouter } from "vue-router";
import home from './views/home'
import aboutUs from './views/aboutUs'
import contactUs from './views/contactUs'


const routes = [
        {
            path: '/',
            redirect: 'home'
        },
        {
            path: '/home',
            name: 'home',
            component: home
        },
        {
            path: '/aboutUs',
            name: 'aboutUs',
            component: aboutUs
        },
        {
            path: '/contactUs',
            name: 'contactUs',
            component: contactUs
        }
    ]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;