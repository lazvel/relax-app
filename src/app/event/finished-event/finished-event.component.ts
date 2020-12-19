import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { EventService } from '../event.service';
import { MatTableDataSource } from '@angular/material/table';
import { Event } from '../event.model';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-finished-event',
  templateUrl: './finished-event.component.html',
  styleUrls: ['./finished-event.component.css']
})
export class FinishedEventComponent implements OnInit, AfterViewInit {
  displayColumns = ["date", "name", "duration", "peopleNum", "status"];
  eventSource = new MatTableDataSource<Event>();

  @ViewChild(MatSort) sort : MatSort;
  @ViewChild(MatPaginator) paginator : MatPaginator; //gadjamo tag kroz ovo u templejtu

  constructor(private eventService : EventService) { }

  ngOnInit(): void {
    this.eventSource.data = this.eventService.getEvents();
  }

  ngAfterViewInit() {
    this.eventSource.sort = this.sort;
    this.eventSource.paginator = this.paginator;
  }

  doFilter(filterValue : string) {
    this.eventSource.filter = filterValue.trim().toLowerCase();
  }
}
