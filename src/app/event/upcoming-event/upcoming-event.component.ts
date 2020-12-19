import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upcoming-event',
  templateUrl: './upcoming-event.component.html',
  styleUrls: ['./upcoming-event.component.css']
})
export class UpcomingEventComponent implements OnInit {
  imageObject = [{
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVI86ypXckfGlD8byB2FzVShjrAneHIMCIpA&usqp=CAU',
    thumbImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVI86ypXckfGlD8byB2FzVShjrAneHIMCIpA&usqp=CAU',
    title: 'Tenis'
}, {
    image: 'https://www.teo4.rs/wp-content/uploads/2018/09/10-9.jpg',
    thumbImage: 'https://www.teo4.rs/wp-content/uploads/2018/09/10-9.jpg',
    title: 'Kosarkaski kamp Teo4'
}, {
    image: 'https://i2.wp.com/www.sportskacentrala.com/wp-content/uploads/2018/06/BB_7.jpg?fit=1200%2C600&ssl=1',
    thumbImage: 'https://i2.wp.com/www.sportskacentrala.com/wp-content/uploads/2018/06/BB_7.jpg?fit=1200%2C600&ssl=1',
    title: 'Kosarkaski kamp Bogdan Bogdanovic.'
},{
    image: 'https://rs.n1info.com/Picture/264882/jpeg/25.-maj-bazen.jpg',
    thumbImage: 'https://rs.n1info.com/Picture/264882/jpeg/25.-maj-bazen.jpg',
    title: 'Sportski centar 25.maj'
}, {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVI86ypXckfGlD8byB2FzVShjrAneHIMCIpA&usqp=CAU',
    thumbImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVI86ypXckfGlD8byB2FzVShjrAneHIMCIpA&usqp=CAU',
}, {
    image: 'https://www.teo4.rs/wp-content/uploads/2018/09/10-9.jpg',
    thumbImage: 'https://www.teo4.rs/wp-content/uploads/2018/09/10-9.jpg',
    title: 'Opis.'
}];

imageObject2 = [{
  image: 'https://kajakrekreacijabeograd.com/wp-content/uploads/2018/04/kajakrekreacija_bg.jpg',
  thumbImage: 'https://kajakrekreacijabeograd.com/wp-content/uploads/2018/04/kajakrekreacija_bg.jpg',
  title: 'Uživanje kajakom '
}, {
  image: 'https://www.paintballs.rs/wp-content/uploads/2015/09/odrasli-1.jpg',
  thumbImage: 'https://www.paintballs.rs/wp-content/uploads/2015/09/odrasli-1.jpg',
  title: 'Paintball Klub Beograd Singidunum'
}, {
  image: 'https://lh3.googleusercontent.com/proxy/wTTpOcLlYNvYqw-sOsrHRGdTSKP4infLyfkwGYPItevmpdv7slBx5p16PbEVJY6dsxyHSWKyqGQ1LgOVadktBbWjJDWJIP2W',
  thumbImage: 'https://lh3.googleusercontent.com/proxy/wTTpOcLlYNvYqw-sOsrHRGdTSKP4infLyfkwGYPItevmpdv7slBx5p16PbEVJY6dsxyHSWKyqGQ1LgOVadktBbWjJDWJIP2W',
  title: 'Paintball Warzone'
},{
  image: 'https://sajam.rs/wp-content/uploads/bnf_2150.jpg',
  thumbImage: 'https://sajam.rs/wp-content/uploads/bnf_2150.jpg',
  title: 'Novogošnji Sajam Beograd'
}, {
  image: 'https://www.urbanbug.net/uploads/news/1468586859_sesti-dan-BBF.jpg',
  thumbImage: 'https://www.urbanbug.net/uploads/news/1468586859_sesti-dan-BBF.jpg',
  title: 'BeerFest Beograd'
}, {
  image: 'https://www.bukovickabanja.rs/wp-content/uploads/2019/02/Aqua-park-Izvor-72_opt.jpg',
  thumbImage: 'https://www.bukovickabanja.rs/wp-content/uploads/2019/02/Aqua-park-Izvor-72_opt.jpg',
  title: 'AkvaPark Izvor - Arandjelovac'
}];

imageObject3 = [{
  image: 'https://www.novosti.rs/upload/images/2015//05/30/guca.jpg',
  thumbImage: 'https://www.novosti.rs/upload/images/2015//05/30/guca.jpg',
  title: 'Sabor trubaca guca'
}, {
  image: 'https://www.novosti.rs/upload/images/2015//08/02/13-guca%20.jpg',
  thumbImage: 'https://www.novosti.rs/upload/images/2015//08/02/13-guca%20.jpg',
  title: 'Sabor trubaca guca'
}, {
  image: 'https://www.exitfest.org/wp-content/uploads/2019/07/EXIT_Dance-Arena-2.jpg',
  thumbImage: 'https://www.exitfest.org/wp-content/uploads/2019/07/EXIT_Dance-Arena-2.jpg',
  title: 'EXIT Festival'
},{
  image: 'https://lh3.googleusercontent.com/proxy/AC86aZhWOWsLXW99oA4Y0zyPvCe1-7_jJQKc0ZU2vKxP_AFgMkI2GUoRcjcY49Dci8FNLo16-wPIOWVmQROw1MXap6L3oJmjHowQ4vC4qvUm',
  thumbImage: 'https://lh3.googleusercontent.com/proxy/AC86aZhWOWsLXW99oA4Y0zyPvCe1-7_jJQKc0ZU2vKxP_AFgMkI2GUoRcjcY49Dci8FNLo16-wPIOWVmQROw1MXap6L3oJmjHowQ4vC4qvUm',
  title: 'EXIT Festival'
}, {
  image: 'https://www.exitfest.org/wp-content/uploads/2019/03/strand1.jpg',
  thumbImage: 'https://www.exitfest.org/wp-content/uploads/2019/03/strand1.jpg',
  title: 'SeaDance Festival'
}, {
  image: 'https://rs.n1info.com/Picture/232318/jpeg/Paul-Main-stage.jpg',
  thumbImage: 'https://rs.n1info.com/Picture/232318/jpeg/Paul-Main-stage.jpg',
  title: 'SeaDance Festival'
}];
  @Output() eventStart = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onStartEvent() {
    this.eventStart.emit();
  }
}
