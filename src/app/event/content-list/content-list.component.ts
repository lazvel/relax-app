import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {

  contents: any;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.getContentList();
  }

  getContentList() {
    this.contentService.getContentList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({key: c.payload.key, ...c.payload.val() })
          )
      )
    ).subscribe(contents => {
      this.contents = contents;
    });
  }

  deleteContent() {
    this.contentService.deleteAll().catch(err => console.log(err));
  }
}
