// stampare in pagina dentro l'h1 un saluto utilizzando il metodo data()
// stampare un immagine usando imgSrc

// salvo il metodo CreateApp() dall'oggetto Vue
const {createApp} = Vue;

createApp({
  data(){
    return{
      saluto: 'Hello World Vue',
      imgSrc: 'img/Logo.png'
    }
  }
}).mount('#app');