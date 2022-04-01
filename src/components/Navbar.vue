<template>
  <b-navbar toggleable="lg" id="navbar_content">
    <b-navbar-brand id="navbar_content__logo" href="/">
        <div>
            <img id="navbar_content__logo_image" :src="logo">
        </div>
        <div id="navbar_content__logo_space"></div>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse">
        <template #default="{ expanded }">
        <b-icon type="light" v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon type="light" v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav id="navbar_menu">
        <b-nav-item> 
            <router-link class="navbar_content__link" to="/types">Виды обработки</router-link>
        </b-nav-item>
        <b-nav-item>
            <router-link class="navbar_content__link" to="/examples">Примеры изделий</router-link>
        </b-nav-item>
        <b-nav-item class="ml-auto" id="navbar_menu__contacts">
            <router-link class="navbar_content__link" to="/contacts">Контакты</router-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>

export default {
  name: 'Nabvar',
  components: {
  },
  data(){
      return{
          logo: null,
      }
  },
  mounted(){
    this.axios
        .get('http://odvservice1.ru/info/')
        .then(response => (this.logo = "http://odvservice1.ru" + response.data.info.logo))
  }
}
</script>

<style>
/* чтобы контакты были справа */
#navbar_menu{
    width: 100%;
}
#navbar_menu__contacts{
    padding-right: 10vw;
}
#navbar_menu__contacts > a > a{
    color: #ffcc00;
}
#navbar_content__logo_image{
    height: 45px;
    width: 65px;
    padding-right: 5%;
}
#navbar_content__logo{
    color: white;
    display: flex;
    padding-left: 10vw;
}
.navbar_content__link{
    color: white;
    font-size: 22px;
}
.navbar_content__link:hover{
    color: #a6aca6;
}
#navbar_menu__contacts > a > a:hover{
    color: #ccaa4e;
}
.navbar_content__link:hover, .navbar_content__link{
    text-decoration: none;
}
#navbar_content{
    background: transparent;
    width: 100vw;
    height: 15vh;
    position: absolute;
    z-index: 1;
    background-color: transparent;
    padding-left: 0;
    padding-right: 0;
}
@media screen and (max-width: 991px){
    #navbar_content{
        background-color: #0f0f0f;
        position: fixed;
        z-index: 15;
    }
    #nav-collapse{
        background-color: #0f0f0f;
        padding-top: 2vh;
        padding-bottom: 1vh;
    }
    #navbar_menu__contacts{
        margin-left: 0 !important;
    }
    button.navbar-toggler.collapsed, button.navbar-toggler.not-collapsed{
        padding-right: 0vw;
        padding-right: 10vw;
    }
    #navbar_menu > li > a{
        padding-left: 10vw;
    }
}
@media screen and (max-width: 425px){
    .navbar_content__link{
        font-size: 18px;
    }
}
</style>