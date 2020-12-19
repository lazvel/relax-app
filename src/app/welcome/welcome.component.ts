import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  heading = 'Relax-App-Connected-To-Firebase';

  valueItem = '';
  item: Observable<any[]>;

  constructor(public db: AngularFireDatabase) {
    this.item = db.list('item').valueChanges();
   }

  ngOnInit(): void {
  }


  onSubmit() {
    this.db.list('item').push({content: this.valueItem});
    this.valueItem = '';
  }

}
