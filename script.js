// stampare in pagina dentro l'h1 un saluto utilizzando il metodo data()

// salvo il metodo CreateApp() dall'oggetto Vue
const {createApp} = Vue;

createApp({
  data(){
    return{
      saluto: 'Hello World Vue'
    }
  }
}).mount('#app');