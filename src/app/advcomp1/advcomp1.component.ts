import { TabComponent } from '../tab/tab.component';
import { Advcomp1HeaderComponent } from './../advcomp1-header/advcomp1-header.component';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MonthInfo, DayInfo } from './advmodel';

const MILLISECONDS_IN_DAY = 86400000;

@Component({
  selector: 'app-advcomp1',
  templateUrl: './advcomp1.component.html',
  styleUrls: ['./advcomp1.component.css']
})

export class Advcomp1Component implements OnInit {
  @ViewChild('p') p: ElementRef;
  @ViewChild('myheader') myheader1: Advcomp1HeaderComponent;
  @ViewChild(TabComponent) tab: TabComponent;

  days = Array<DayInfo>();
  totaldays: number;
  currentDate: Date = new Date();
  currentYear = this.currentDate.getFullYear();
  currentMonth = this.currentDate.getMonth() + 1;
  monthInfo = Array<MonthInfo>();
  todayInfo = new DayInfo();
  constructor() { }

  ngOnInit() {
    this.readCalendar();
  }
ngAfterViewInit()
{
this.tab.part1.forEach((item)=>{
  if(item.dayInfo.isToday)
  {
    this.todayInfo = item.dayInfo;
  }
});
}
  readCalendar() {

    const YEAR = this.currentDate.getFullYear();
    const MONTH = this.currentDate.getMonth();
    let startDate = new Date(YEAR, MONTH, 1);
    let endDate = new Date(YEAR, MONTH + 1, 0);
    const START_DAY = startDate.getDay();
    const END_DAY = endDate.getDay();
    const END_DATE = endDate.getDate();

    startDate = START_DAY > 0 ? new Date(startDate.setDate(1 - START_DAY)) : startDate;
    endDate = END_DAY < 6 ? new Date(endDate.setDate(END_DATE + (6 - END_DAY))) : endDate;


    let startDateMillsecond = startDate.getTime();
    let endDateMillsecond = endDate.getTime();
    if (startDateMillsecond - endDateMillsecond > 0) {
      this.totaldays = Math.abs((startDateMillsecond - endDateMillsecond) / MILLISECONDS_IN_DAY) + 1;
    }
    else {
      this.totaldays = Math.abs((endDateMillsecond - startDateMillsecond) / MILLISECONDS_IN_DAY) + 1;
    }

    let sdNumber: number = startDate.getDate();
    let startYear: number = startDate.getFullYear();
    let startMonth: number = startDate.getMonth();
    for (var i = 0; i < this.totaldays; i++) {
      let date: Date = new Date(startYear, startMonth, sdNumber + i, 0, 0, 0);
      let item: DayInfo = new DayInfo();
      item.date = date;
      item.isToday = this.checkIsToday(date, new Date());
      item.info=date.getDay()==3?"運動去":"";
      item.isSportDay=date.getDay()==3;
      this.days.push(item);
    }

    const tempRows: number = Math.floor(this.totaldays / 7);
    let rows: number[] = [];
    for (let i = 0; i < tempRows; i++) {
      rows.push(i * 7);
    }

    let item: MonthInfo = new MonthInfo();
    item.title = startDate.getFullYear() + "/" + (startDate.getMonth() + 1);
    item.rows = rows;
    item.days = this.days;

    this.monthInfo.push(item);
  }

  checkIsToday(selectDate: Date, today: Date) {
    selectDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    return selectDate.getTime() === today.getTime();
  }

  debug() {
    console.log(this.p);
    console.log(this.myheader1);
    //console.log(this.myheader2);
  }
}
