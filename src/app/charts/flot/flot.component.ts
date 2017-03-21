import { FlotCharts } from '../../dashboard/init';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-flot',
  templateUrl: './flot.component.html',
  styleUrls: ['./flot.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlotComponent implements OnInit {

temp=1;
  constructor(private _ngZone:NgZone,private cd:ChangeDetectorRef) {

    Observable.interval(1000).subscribe((id)=>
    {
      this.temp++;
      //console.log(this.temp);
      this.cd.markForCheck();
    });
  }

  ngOnInit() {
    this._ngZone.runOutsideAngular(()=>{
      $(FlotCharts)

    });

  }
  showText() {
     var date = new Date();
     console.log(date);
    return date;
  }
}
