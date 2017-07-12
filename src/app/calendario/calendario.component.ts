import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../calendar.service';
  
@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.sass']
})
export class CalendarioComponent implements OnInit {
  
  public calendar;

  constructor(private calendarService: CalendarService) { 
  }

  ngOnInit() {
    this.calendarService.getCalendar().subscribe(
        data => { 
          this.calendar = [].concat(data[0]).concat(data[1]).concat(data[2]);
      },
        err => console.log(err),
        () =>  console.log('Carga del calendario completa')
    );
  }

}
