import { Component, OnInit } from '@angular/core';
import { Content } from '../content';
import { ContentService } from '../content.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent implements OnInit {

  content: Content = new Content();
  submitted = false;

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
  }


  newContent(): void {
    this.submitted = false;
    this.content = new Content();
  }

  save() {
    this.contentService.createContent(this.content);
    this.content = new Content();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
