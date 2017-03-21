import { Directive, ElementRef, HostBinding, HostListener, Renderer } from '@angular/core';

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
  changeColor($event: MouseEvent) {
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

  constructor(private el: ElementRef, private renderer: Renderer) { }
  ngOnInit() {
    //this.el.nativeElement.innerHtml (避免這樣使用,因為什麼東西都可以塞進去)
    //透過實作renderer,透過這個去產生標準的html就是安全的
 }
}
