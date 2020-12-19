import { Component, OnInit, Input } from '@angular/core';
import { Content } from '../content';
import { ContentService } from '../content.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-content-details',
  templateUrl: './content-details.component.html',
  styleUrls: ['./content-details.component.css']
})
export class ContentDetailsComponent implements OnInit {

  @Input() content : Content;

  constructor(private ContentService : ContentService) {

  }

  ngOnInit(): void {

  }

  updateActive(isActive: boolean) {
    this.ContentService.updateContent(this.content.key, {active: isActive})
    .catch(err => console.log(err));
  }

  deleteContent() {
    this.ContentService.deleteContent(this.content.key).catch(err => console.log(err));
  }
}
