import { FlotCharts } from '../../dashboard/init';
import { Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-flot',
  templateUrl: './flot.component.html',
  styleUrls: ['./flot.component.css']
})
export class FlotComponent implements OnInit {

  constructor(private _ngZone:NgZone) { }

  ngOnInit() {
    this._ngZone.runOutsideAngular(()=>{
      $(FlotCharts)

    });

  }
  showText() {
     //var date = new Date();
     //console.log(date);
    //return date;
  }
}
