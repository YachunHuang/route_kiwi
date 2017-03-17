import { Advcomp1PartComponent } from './../advcomp1-part/advcomp1-part.component';
import { Component, OnInit, Input, ContentChild, ContentChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @ContentChildren(Advcomp1PartComponent) part1: QueryList<Advcomp1PartComponent>;

  @Input() tabTitle: string;
  show: boolean = false;
  constructor() { }

  ngOnInit() {
  }
}
