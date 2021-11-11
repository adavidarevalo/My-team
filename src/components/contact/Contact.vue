<template>
    <section>
        <div class="Container">
        <div class="Contact-Details">
            <h2>Contact</h2>
            <h3>Ask us about</h3>
            <table>
                <tr 
                v-for="item in element"
                :key="item.title"
                class="Item-Element"
                >
                <th>
                    <img :src='item.image' alt='Icon'/>
                </th>
                <th>
                    <h5>{{item.title}}</h5>
                </th>
                </tr>
            </table>
        </div>
        <div>
            <form>
                <input name='name' type='text' placeholder="Name"/>
                <input name='email' type='email' placeholder="Email Address"/>
                <input name='companyName' type='text' placeholder="Company Name"/>
                <input name='title' type='text' placeholder="Title"/>
                <textarea name="textarea" placeholder="Message"></textarea>
                <input 
                type="submit" 
                value="submit"
                class="Submit-Button"
                >
            </form>
        </div>
        </div>
    </section>
</template>

<script>
import { TeamContact } from '@/data/TeamHome'

export default ({
    name: 'Contact',
    data(){
        return{
            element: TeamContact
        }
    }
})
</script>

<style scoped>
section{
    background: #004E56;
    min-height: 70vh;
}
.Container{
    max-width: 1146px;
    margin: 0 auto;
}
.Contact-Details{
    animation: fadeInLeft 1s both;
}
h2{
    color: white;
    font-size: 3rem;
    margin: 0px;
}
h3{
    color: #f67e7e;
    font-size: 2rem;
    margin: 0px;
}
.Item-Element{
    display: flex;
    align-items: center;
}
table{
    width: 90%;
    margin: 20px auto 30px;
    color: white;
    max-width: 475px;
    max-width: 1200px;
}
h5{
    font-size: 1.2rem;
    margin: 0px;
}
tr{
    margin-bottom: 20px;
}
img{
    margin-right: 15px;
}
form{
    height: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    animation: fadeInRight 1.5s both;
}
input,
textarea{
    width: 90%;
    margin: 0 auto 15px;
    padding: 10px 5px;
    border: none;
    border-bottom: 1px solid white;
    font-size: 1.2rem;
    background: none;
    outline: none;
}
::placeholder{
    color: white;
    font-size: 1.2rem;
}
.Submit-Button{
    background: white;
    border: none;
    color: #004047;
    border-radius: 50px;
    width: 150px;
    font-size: 1.4rem;
    margin-block: 10px 20px;
}
@media (min-width: 850px){
    .Container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        max-height: 460px;
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