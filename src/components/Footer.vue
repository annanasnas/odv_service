<template>
<div id="footer_content">
  <div id="footer_content__section">
    <div class="footer_content__container">
      <div class="footer_content__picture">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
          <path d="M5.8 3.7c1-1 2.7-1 3.7 0L10.7 5c1 1 1 2.7 0 3.7l-.5.5c0 .1 0 .3.2.5.4.7 1 1.5 2.2 2.7 1.1 1 2 1.8 2.6 2.1l.6.2.5-.5c1-1 2.7-1 3.7 0l1.2 1.2c1 1 1 2.7 0 3.7a30.3 30.3 0 0 1-1.9 2 4.2 4.2 0 0 1-3.7.2 8.7 8.7 0 0 1-.7-.3l.4-.9-.4 1c-1.8-1-4-2.5-6.3-4.8a26 26 0 0 1-4.6-6c-.4-.8-.8-1.6-.9-2.2V7c0-.2 0-.6.3-1l2.4-2.3zm10 15.4a4.7 4.7 0 0 0 1.2.4c.6 0 1-.1 1.3-.3l.3-.3a13.8 13.8 0 0 0 1.1-1.2h.1c.3-.3.3-.7 0-1l-1.2-1.1a.7.7 0 0 0-.9 0l-.6.5c-.4.5-1 .6-1.4.5-.5 0-1-.2-1.4-.4-.9-.5-2-1.3-3.1-2.5-1.2-1.2-2-2.2-2.5-3.1-.3-.4-.5-1-.5-1.4 0-.5 0-1 .5-1.4l.6-.6c.2-.3.2-.7 0-.9L8 5.1a.7.7 0 0 0-1 0L5 7.3v.3l.8 1.7a24 24 0 0 0 4.2 5.5c2.2 2.1 4.2 3.6 5.7 4.3z"></path>
        </svg>
      </div>
      <div class="footer_content__info">{{contacts}}</div>
    </div>
    <div id="dissapear" class="footer_content__container">
      <div class="footer_content__picture">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30">
          <path d="M12 23c-2.29 0-8-8.99-8-13.26A7.87 7.87 0 0 1 12 2c4.42 0 8 3.46 8 7.74C20 14 14.29 23 12 23zm0-19C8.62 4 6 6.63 6 9.74c0 .7.25 1.78.79 3.14a26.7 26.7 0 0 0 4.45 7.28c.3.32.56.55.76.7.2-.15.45-.38.76-.7.74-.79 1.59-1.92 2.4-3.24a26.7 26.7 0 0 0 2.05-4.04c.54-1.36.79-2.45.79-3.14C18 6.64 15.38 4 12 4zm0 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
        </svg>
       </div>
       <div class="footer_content__info">г. Москва, Каширское шоссе, д. 17 </div>
    </div>
    <div class="footer_content__container">
      <div class="footer_content__picture">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
          <path d="M2 7c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7zm16.4 0H5.8l6.7 5.2 6-5.2zM4 8.2V17h16V8.3l-6.8 6a1 1 0 0 1-1.3 0L4 8.2z"></path>
        </svg>
      </div>
      <div class="footer_content__info">pritula@bk.ru</div>
    </div>
  </div>
</div>  
</template>

<script>

export default {
  name: 'Footer',
  data(){
      return{
          contacts: null,
      }
  },
  mounted(){
    this.axios
        .get('http://odvservice1.ru/info/')
        .then(response => (this.contacts = response.data.info.contacts))
  }
}
</script>

<style>
#footer_content{
  height: 19vh;
  width: 100vw;
  background-color: #ffcc00;
  display: flex;
  justify-content: center;
  align-items: center;
}
#footer_content__section{
  display: flex;
  justify-content: space-between;
  width: 65vw;
}
._primary-fill {
    background: var(--primary-color-base);
    color: #fff;
}
.footer_content__picture{
  background-color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
}
.footer_content__container, .footer_content__picture{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.footer_content__container{
  width: 33.33%;
}
.footer_content__info{
  margin-top: 1vh;
  color: #0f0f0f;
  font-size: 17px;
  text-align: center;
}
</style>