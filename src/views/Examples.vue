<template>
  <div>
      <Navbar />
      <div id="examples_content">
        <div id="examples_content__title">
            Фото наших работ
        </div>
        <div id="examples_content__list">
              <div class="examples_content__list-card" v-for="pro in products" :key="pro">
                  <img :src="pro.image">
              </div>
          </div>
      </div>
      <Footer />
  </div>
</template>

<script>

import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Examples',
  components: {
      Navbar,
      Footer
  },
  data() {
    return {
        products: null,
    }
  },
  mounted(){
    this.axios
        .get('http://odvservice1.ru/products/')
        .then(response => (this.products = response.data))
  }
}
</script>

<style>
#examples_content__title{
    margin-top: 7vh;
    margin-bottom: 5vh;
    font-size: 60px;
    font-weight: 600;
}
#examples_content{
    color: white;
    padding-top: 17.5vh;
    padding-left: 10vw;
    padding-right: 10vw;
    background-attachment: fixed;
    -moz-background-size: 100%; /* Firefox 3.6+ */
    -webkit-background-size: 100%; /* Safari 3.1+ и Chrome 4.0+ */
    -o-background-size: 100%; /* Opera 9.6+ */
    background-size: 100%;
    background-size: cover;
    background-image: url('../assets/images/background-service_3.png');
}
.examples_content__list-card{
    overflow: auto;
    width: 26vw;
    height: 50vh;
    background-color: #0f0f0f;
    flex-direction: column;
    display: flex;
    align-items: center;
    margin-bottom: 3vh;
}
/* .examples_content__list-card:nth-child(3n){
  margin-right: 0;
}
.examples_content__list-card:nth-child(3n-1){
  margin-left: auto;
  margin-right: auto;
} */
.examples_content__list-card > img{
    width: 100%;
    height: 100%;    
}
#examples_content__list{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    padding-bottom: 24vh;
    justify-content: space-between;
}
@media screen and (max-width: 1024px) {
   .examples_content__list-card{
      width: 39vw;
      height: 39vw;
    }
 }
 @media screen and (max-width: 425px) {
    .examples_content__list-card{
      width: 100%;
      height: 60vh;
    }
 }
</style>