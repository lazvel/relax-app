import { Injectable } from '@angular/core';
import { Content } from './content';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private dbPath = '/contents';

  contentsRef: AngularFireList<Content> = null;

  constructor(private db: AngularFireDatabase) { 
    this.contentsRef = db.list(this.dbPath);
  }

  createContent(content : Content): void {
    this.contentsRef.push(content);
  }
  

  updateContent(key: string, value: any) : Promise<void> {
    return this.contentsRef.update(key, value);
  }

  deleteContent(key: string): Promise<void> {
    return this.contentsRef.remove(key);
  }

  getContentList(): AngularFireList<Content> {
    return this.contentsRef;
  }

  deleteAll() : Promise<void>{
    return this.contentsRef.remove();
  }
}
