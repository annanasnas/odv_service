<template>
  <div>
      <Navbar />
      <div id="types_content">
          <div id="types_content__title">
            Наши услуги
          </div>
          <div id="types_content__list">
              <div class="types_content__list-card" v-for="item in processes" :key="item">
                <div v-if="data[item.id]" class="types_content__list-card-image">
                  <img :src="item.image">
                </div>
                <div v-if="data[item.id]" class="types_content__list-card-number">{{returnItemId(item.id)}}</div>
                <div v-if="data[item.id]" class="types_content__list-card-name">{{item.title}}</div>
                <b-button v-on:click="changeShow(item.id)" class="types_content__list-button" shadow-none v-b-toggle="`collapse-${item.id}`" variant="primary">Подробнее</b-button>
                <b-collapse :id="`collapse-${item.id}`" class="mt-2">
                    <b-card v-if="!data[item.id]" class="types_content__list-text">
                        <div><p class="card-text">{{item.text}}</p></div>
                    </b-card>
                </b-collapse>
              </div>
          </div>
      </div>
      <div id="types__footer">
        <Footer />
      </div>
  </div>
</template>

<script>

import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Types',
  components: {
      Navbar,
      Footer
  },
  data() {
    return {
      processes: null,
      data: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]
  }
  },
  methods:{
    returnItemId(id){
      if (0 <= Number(id) && Number(id) < 10){
        return "0" + id + "."
      }
      else{
        return id + "."
      }
    },
    changeShow(i){
          if (this.data[i] == false) {
              this.data = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]
          }
          else {
              this.data = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]
              this.data[i] = !this.data[i]
          }
    },
  },
  mounted(){
    this.axios
        .get('http://odvservice1.ru/all_processing/')
        .then(response => (this.processes = response.data))
  }
}
</script>

<style scoped>
.types_content__list-card-name{
  margin-top: 1.5vh;
  margin-bottom: 3vh;
  color: #a6aca6;
  font-size: 17px;
}
.types_content__list-card-number{
  margin-top: 2vh;
  font-size: 24px;
  font-weight: bold;
}
.types_content__list-card{
    overflow: auto;
    padding-bottom: 5vh;
    padding-top: 5vh;
    width: 25vw;
    height: 60vh;
    background-color: #0f0f0f;
    flex-direction: column;
    display: flex;
    align-items: center;
    margin-bottom: 3vh;
}
.types_content__list-card-image{
    height: 25vh;
    width: 80%;
    overflow: hidden;
    background-size: cover;
}
.types_content__list-card-image > img{
      width: 100%;
    height: 100%;     
}
#types_content{
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
    background-image: url('../assets/images/background_service_2.png');
  }
#types_content__title{
    margin-top: 7vh;
    margin-bottom: 5vh;
    font-size: 60px;
    font-weight: 600;
}
#types_content__list{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-bottom: 24vh;
}
.types_content__list-button{
    width: 80%;
    font-size: 20px;
    margin-top: 0 !important;
    background-color: #ffcc00;
}
.types_content__list-text{
  background-color: transparent;
  padding-left: 5%;
  padding-right: 5%;
  font-size: 17px;
}
 @media screen and (max-width: 1024px) {
   .types_content__list-card{
      width: 38vw;
      height: 68vh;
    }
    .types_content__list-card-image{
      height: 38vh;
    }
 }
 @media screen and (max-width: 768px) {
   .types_content__list-card-image{
      height: 35vh;
    }
    .types_content__list-card{
      width: 38vw;
      height: 65vh;
    }
 }
 @media screen and (max-width: 425px) {
   .types_content__list-card-image{
      height: 35vh;
    }
    .types_content__list-card{
      width: 100%;
      height: 65vh;
    }
    #types_content{
      padding-left: 5vw;
      padding-right: 5vw;
    }
 }

</style>