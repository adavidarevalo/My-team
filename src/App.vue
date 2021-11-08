<template>
  <div>
    <PxHeader/>
    <router-view/>
    <PxFooter/>
  </div>
</template>

<script>
import PxHeader from './components/layout/PxHeader.vue'
import PxFooter from './components/layout/PxFooter.vue'

export default {
  name: 'App',
  components: {
    PxHeader,
    PxFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
}
body{
  margin: 0px;
}
a, button{
  cursor: pointer;
  text-decoration: none;
}
</style>
