import { Component, OnInit, Input } from '@angular/core';
import { DayInfo } from './../advcomp1/advmodel';

@Component({
  selector: 'app-advcomp1-part',
  templateUrl: './advcomp1-part.component.html',
  styleUrls: ['./advcomp1-part.component.css']
})
export class Advcomp1PartComponent implements OnInit {

  @Input() dayInfo : DayInfo;

  constructor() { }

  ngOnInit() {
  }
}
