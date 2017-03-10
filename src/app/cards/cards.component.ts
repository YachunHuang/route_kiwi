import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {

  }
  GoHome() {
    this.router.navigateByUrl('/');
  }
  GoFlot() {
    this.router.navigate(['/charts', 'flot']);
  }

  num:number = 0;
  p1:number = 0;
  p2:number = 0;


  IncrementNum() {
    //this.router.navigate(['/cards', this.num + 1]);
    //[routerLink]="['..','55']" 連到自己的時候要用..
    //否則 => http://localhost:4200/cards/54/55
    this.router.navigate(['..',this.num + 1,{p1:this.p1, p2:this.p2}],{ 
      relativeTo:this.route,
      queryParams:{ name:'kiwi'}
  });
  }

  ngOnInit() {
    //參數不會變時可以用snapshot
    //this.route.snapshot.params['num'];

    //參數會變時就要使用訂閱的方式
    this.route.params.subscribe((params) => {
       if(!isNaN(parseInt(params['num']))) {
        this.num = parseInt(params['num']);
      }
    });

    this.p1 = this.route.snapshot.params['p1'];
    this.p2 = this.route.snapshot.params['p2'];
  }
}
