import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appTest1]'
})
export class Test1Directive {
  /**
   * [style.color]="'red'"
   */
  @HostBinding('style.color')
  textColor: string = 'red';

  /**
   * (click)="changeColor($event)"
   */
  @HostListener('click', ['$event'])
  changeColor($event:MouseEvent) {
    this.textColor = 'darkgreen';
    console.log($event);

    /**列出裡面的所有dom物件 */
    console.dir($event);
    /**
     *可以印出成table樣式
     * var aaa=[{a:1},{b:2},{c:3}];
     * console.table(aaa)
     */
  }

  constructor() { }

}
