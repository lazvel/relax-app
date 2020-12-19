import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-event',
  templateUrl: './current-event.component.html',
  styleUrls: ['./current-event.component.css']
})
export class CurrentEventComponent implements OnInit {
  
  timer : any;

  constructor() { }

  ngOnInit(): void {
    
  }

  onStop() {
    this.timer = clearInterval(this.timer);
  }
}
