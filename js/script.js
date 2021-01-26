var app = new Vue({
  el: '#app',
  data: {
    counter : 0,
    immagine : [
      'img/img1.webp',
      'img/img2.webp',
      'img/img3.jpg',
      'img/img4.webp'
  ]
},
methods: {
  nextPhoto (){

    this.counter++;
    console.log(this.counter);
    if (this.counter == (this.immagine.length)){
      this.counter = 0;
    }
  },
  prevPhoto(){
  this.counter--;
    if (this.counter < 0 ){
      this.counter = this.immagine.length -1
    }
  }
}

//
//
// i need to work on the buttons later, once licked it should display actual picture base on its index
//
//
// achievements would be updated later...
//








})
