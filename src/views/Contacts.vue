<template>
  <div id="contacts_background">
      <Navbar />
      <div id="contacts_content">
            <div id="contacts_content__title">Контактная информация</div>
            <yandex-map
                :coords="coords"
                :zoom="10" 
                @click="onClick"
                id="contacts_content__map"
            >
                <ymap-marker 
                    :coords="coords" 
                    hint-content='ООО "ОДВ-Сервис"' 
                />
            </yandex-map>
            <div id="contacts_content__button-info">
                <div id="contacts_content__more-info">
                    <div><b>Адрес:</b> г. Москва, Каширское шоссе, д. 17 (территория завода ТЕМП), 2 въезд</div>
                    <div><b>Почта:</b> pritula@bk.ru </div>
                    <div><b>Телефон:</b> {{tel}}</div>
                </div>
                <!-- <div id="contacts_content__documents">
                    <div id="contacts_content__documents_title"><b>Документы:</b></div>
                    <div><a class="contacts_content__documents_a" href="images/xxx.jpg" download>Документ с коммерческим предложением</a></div>
                    <div><a class="contacts_content__documents_a" href="images/xxx.jpg" download>Документ с реквизитами</a></div>
                </div> -->
            </div>
      </div>
      <Footer />
  </div>
</template>

<script>

import Navbar from '../components/Navbar.vue'
import yandexMap from 'vue-yandex-maps'
import Footer from '../components/Footer.vue'

export default {
  name: 'Contacts',
  components: {
      Navbar,
      yandexMap,
      Footer
  },
  data: () => ({
      coords: [
          55.667538, 
          37.640911
      ],
      tel: null
  }),
  methods: {
    onClick(e) {
      this.coords = e.get('coords');
    },
  },
  mounted(){
    this.axios
        .get('http://odvservice1.ru/info/')
        .then(response => (this.tel = response.data.info.contacts))
  }
}
</script>

<style>
*{
    color: white;
}
#contacts_background{
    background-color: #0f0f0f;
}
#contacts_content__map{
    margin-top: 3vh;
    height: 50vh;
}
#contacts_content{
    color: #242423;
    padding-top: 17vh;
    padding-left: 10vw;
    padding-right: 10vw;
}
#contacts_content__title{
    margin-top: 7vh;
    font-size: 60px;
}
#contacts_content__button-info{
    display: flex;
    margin-top: 3vh;
    margin-bottom: 10vh;
    font-size: 22px;
}
#contacts_content__more-info{
    width: 50%;
}
#contacts_content__more-info > div {
    margin-bottom: 0.75vh;
}
#сontacts_content__documents{
    width: 50%;
    display: flex;
    flex-direction: column;
}
.contacts_content__documents_a{
    color: #ccaa4e;
}
.contacts_content__documents_a:hover{
    color: #f5cb5c;
}
</style>