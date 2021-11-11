<template>
    <section>
        <div>
            <h1>About</h1>
            <p>We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. We’ll bring those teams to you.</p>
        </div>
    </section>

</template>

<script>

export default ({
    name: 'mainAbout',
})
</script>

<style scoped>
section{
    background: #004E56;
    background-image: url('../../assets/bg-pattern-about-1-mobile-nav-1.svg');
    height: 87vh;
    background-repeat: no-repeat;
    background-position: bottom;
    background-position-x: right;
    color: white;
    position: relative;
    z-index: 100;
}
div{
    width: 90%;
    margin: 0px auto;
    max-width: 1000px;
}
h1{
    font-size: 2rem;
    margin: 0px;
    animation: fadeInLeft 1s both;
}
p{
    font-size: 1.1rem;
    font-weight: 600;
    animation: fadeInRight 1.5s both;
}
@media (min-width: 750px){
    div{
        display: grid;
        grid-template-columns: 1fr 3fr;
        grid-gap: 40px;
    }
    h1{
        font-size: 5rem;
        margin-right: 25px;
    }
    p{
        font-size: 1.3rem;
        font-weight: 500;
    }
    section{
        display: flex;
        align-items: center;
    }
}

  @keyframes fadeInLeft {
  0% {
  opacity: 0;
  -webkit-transform: translate3d(-100%, 0, 0);
  transform: translate3d(-100%, 0, 0);
  }
  100% {
  opacity: 1;
  -webkit-transform: none;
  transform: none;
  }
  } 
  @keyframes fadeInRight {
  0% {
  opacity: 0;
  -webkit-transform: translate3d(100%, 0, 0);
  transform: translate3d(100%, 0, 0);
  }
  100% {
  opacity: 1;
  -webkit-transform: none;
  transform: none;
  }
  } 
</style>