<template>
  <div>
    <Navbar />
    <div id="main_content">
      <div id="main_content_left">
          <div id="main_content_carousel">
            <b-carousel
              id="carousel-fade"
              style="text-shadow: 0px 0px 2px #000"
              fade
              :interval="3500"

            >
              <b-carousel-slide
                v-for="pr in process"
                :key=pr.id
                :img-src=pr.image
                :caption=pr.title
              >
              </b-carousel-slide>
            </b-carousel>
          </div>
      </div>
      <div id="main_content_right">
        <div id="main_content__vertical-line"></div>
        <div id="main_content__title">ООО "ОДВ-СЕРВИС"</div>
      </div>
    </div>
    <div id="main_content__description">
      <div id="main_content__title-description">НЕМНОГО О НАС</div>
      <div v-for="i in info.info.description" :key="i">{{i.text}} </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Main',
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      info: null,
      process: null,
  }
  },
  mounted(){
    this.axios
        .get('http://odvservice1.ru/info/')
        .then(response => (this.info = response.data))
    this.axios
        .get('http://odvservice1.ru/all_processing/')
        .then(response => (this.process = response.data))
  }
}
</script>

<style>
  #main_content__title-description{
    text-align: center;
    padding-top: 5vh;
    padding-bottom: 5vh;
  }
  #main_content__vertical-line{
    width: 0.5vw;
    height: 11vh;
    background-color: #ffcc00;
    margin-right: 1vw;
  }
  #main_content{
    color: #242423;
    padding-top: 8vh;
    padding-left: 10vw;
    padding-right: 10vw;
    display: flex;
    background-attachment: fixed;
    -moz-background-size: 100%; /* Firefox 3.6+ */
    -webkit-background-size: 100%; /* Safari 3.1+ и Chrome 4.0+ */
    -o-background-size: 100%; /* Opera 9.6+ */
    background-size: 100%;
    background-size: cover;
    background-image: url('../assets/images/background_service.png');
  }
  #main_content_left{
    width: 35vw;
  }
  #main_content_right{
    width: 45vw;
  }
  #main_content_left, #main_content_right{
    padding-top: 0vh;
    height: 92vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #carousel-fade{
    width: 33vw;
    /* height: auto; */
    height: 50vh;
    overflow: hidden;
    display: flex;
    align-items: center;
  }
  #main_content__title, #main_content__title-description{
    font-size: 60px;
    font-weight: normal;
    color: white;
    font-family: 'Open Sans', sans-serif;
  }
  #main_content__description{
    background-color: #0f0f0f;
    padding-top: 3vh;
    padding-bottom: 24vh;
    width: 100vw;
    height: auto;
    font-size: 22px;
    padding-left: 10vw;
    padding-right: 10vw;
    color: #a6aca6;
    display: flex;
    margin-bottom: 0;
    text-align: justify;
    flex-direction: column;
  }
  #main_content__description > div{
    margin-top: 1vh;
    margin-bottom: 1vh;
  }
</style>
