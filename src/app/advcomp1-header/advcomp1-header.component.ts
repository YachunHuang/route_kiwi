import { TabComponent } from './../tab/tab.component';
import { Advcomp1PartComponent } from './../advcomp1-part/advcomp1-part.component';
import { Component, ContentChild, ContentChildren, Input, OnInit, QueryList, ViewChild } from '@angular/core';

@Component({
  selector: 'app-advcomp1-header',
  templateUrl: './advcomp1-header.component.html',
  styleUrls: ['./advcomp1-header.component.css']
})
export class Advcomp1HeaderComponent implements OnInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
  @ContentChildren(Advcomp1PartComponent) part1: QueryList<Advcomp1PartComponent>;
  @Input() data;
  selectedTab: TabComponent;
  constructor() { }
  ngOnInit() {
  }

  ngAfterContentInit() {
    this.select(this.tabs.first);
  }

  onSelect(tab) {
    this.select(tab);
  }

  select(tab) {
    this.tabs.forEach((item) => {
      item.show = false;
    });

    this.selectedTab = tab;
    this.selectedTab.show = true;
  }
}
