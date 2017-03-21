# Ng2Advanced

## 模組載入機制
  1. 全部載入  
     - 將所有模組一次載入(打包成一個js)  

  2. 延遲載入  
     - 不會是強行別  
     - 加快頁面的載入速度,需要的模組才會載入  
     - 練習將 ChartsModule 改用延遲載入的方式定義 (包含路由設定)  

  3. 預先載入  
     - 將部分模組拆成可延遲載入的片段  
     - 所有可延遲載入的程式片段會立即預先載入  
     - 預先載入的過程透過非同步背景下載，不影響畫面顯示或使用者操作  

## 實作路由守門員 (Route Guards)

1. 用來控管權限
2. 建立LoginRouteGuard服務元件並實作 CanActivate  
    `ng g class LoginRouteGuard`
3. 實作 CanActivate 介面  
    - 到 app.module.ts 將 LoginRouteGuard 加入 providers  
    - providers: [LoginRouteGuard]  
    - 在 'charts' 路由定義加上 canActivate 屬性  
      `
        { 
            path: 'charts',
            loadChildren: '../charts/charts.module#ChartsModule',
            canActivate:[NeedLoginGuard] 
        }`  
4. canDeactive表示要離開這個路由元件  

## 表單開發模型  
1. 模型表單(Model-Driven Form) 
    - 動態表單的話可以使用模型為主的表單開發模式  
    - 使用 formControlName 屬性  
2. 樣板表單(Template-Driven Form)  
    - 使用 ngModel 指令 (Directive)    
    `[(ngModel)]="name"`  
3. 練習範本表單的 ngModel 用法 (套用 forms.classic.html 範本並設定欄位驗證)  
    - 單向綁定( one-way binding )  
    `<input name="username" [ngModel]="username">`  
    - 雙向綁定( two-way binding )  
    `<input name="username" [(ngModel)]="username">`  
    - 放在 <form> 裡面的輸入欄位則必須要有 name 屬性    
4. 練習範本表單的NgForm用法與注意事項  
    - 要從範本取得 ngForm 物件實體，可以透過範本參考變數完成  
    `<form name="form1" #f="ngForm">`  
5. 練習範本表單的NgModelGroup用法語欄位驗證樣式與驗證器  
    - 主要用途用來追蹤/取得群組內所有表單控制項的欄位值與驗證狀態  
```sh
<div class="form-group" [class.has-error]="mType1.errors?.required">
    <label for="input-id-1" class="col-sm-2 control-label">Label focus</label>
    <div class="col-sm-10">
        <input id="input-id-1" type="text" class="form-control" name="type1" #mType1="ngModel" [required]="!mTitle.errors?.required" [(ngModel)]="data.type1">
    </div>
</div>
```
6. 建立 form2 頁面並實作 title 與 subtitle 的表單模型與頁面  
7. 在 Reactive Forms 的欄位套用欄位驗證 (必填) 並顯示驗證結果在畫面上  
   - 使用Validators.required、Validators.maxLength(10)等等...  
```sh
this.form = this.fb.group(
{
    'title':['p1 default value', [Validators.required, Validators.maxLength(10)]],
            'subtitle':['p2 default value', Validators.required]
    }
);
```

8. 用 Reactive Forms 實作動態欄位表單與驗證  
   - 使用map動態產生物件  
    ```sh
        this.form = this.fb.group(
        {
            'title': ['p1value', [Validators.required, Validators.maxLength(10)]],
            'subtitle': ['p2value', Validators.required],
            'types':this.fb.array(
            this.types.map((v,idx)=>{
            return this.fb.control('default value '+v, Validators.required);
              })
            )
          }
        );
    ```

9. 透過強行別將class轉為formgroup  

10. 練習 Reactive Forms 的自訂驗證器  
    ```sh
    import { AbstractControl, ValidatorFn } from '@angular/forms';
    //不帶參數的驗證器
    export function MyNameValidator(control: AbstractControl)
    {
      if(control.value.indexOf('Kiwi') === 0)
      {
        if(control.value.endsWith('0'))
        {
          return {myname:true};
        }
      }
      return null;
    }

    //帶參數驗證器
    export function MyNameValidatorWithParms(nameRe: RegExp): ValidatorFn
    {
      return (control: AbstractControl): { [key: string]: any } =>
        {
          const name = control.value; const no = nameRe.test(name);
          return no ? { 'mynamewithparms': true } : null;
        };
    }    
    ``` 

11. 練習 ViewChild, ViewChildren, ContentChild, ContentChildren 的用法
12. Directive
    - 是透過Angular使用內建或自訂directive用來自己定義html元素，並簡化dom操作。
    - 好處:
      - 節省整個網站的製作時間
      - 精簡HTML內容

      ```sh
        /**
        * [style.color]="'red'"
        */
        @HostBinding('style.color')
        textColor: string = 'red';

        /**
        * (click)="changeColor($event)"
        */
        @HostListener('click', ['$event'])
        changeColor($event) {
          this.textColor = 'darkgreen';
          console.log($event);
        }
      ```
13. console小技巧
      ```sh
      列出裡面的所有dom物件
      console.dir($event);
      可以印出成table樣式
      var aaa=[{a:1},{b:2},{c:3}];
      console.table(aaa)
      ``` 
14. 從元件中找出目前屬性型指令套用的那個元素物件(DOM)
    ```sh
    constructor(private el: ElementRef, private renderer: Renderer) { }
    ngOnInit() {
      //this.el.nativeElement.innerHtml (避免這樣使用,因為什麼東西都可以塞進去)
      //透過實作renderer,透過這個去產生標準的html就是安全的
    }
    ```  
15. 何時該用哪些寫法
    ```sh 
    [AoT](https://github.com/rangle/angular-2-aot-sandbox)
    JiT:Just in Time (即時編譯)
    AoT: Ahead of Time (預先編譯)
    SSR:Server side randering```

16. 封裝
    ```sh
    @Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    encapsulation: ViewEncapsulation.Emulated
    })
    ```

17. ngZone
    - 不要這樣寫,否則每次偵測變更時都會被觸發
    ```sh
    <div class="card-title">Area {{showText()}}
    </div>
      showText() {
     var date = new Date();
     console.log(date);
    return date;
    }
    ```
    - 應該要加上
    ```sh
    constructor(private _ngZone:NgZone) { }

    ngOnInit() {
      this._ngZone.runOutsideAngular(()=>{
        $(FlotCharts) }); 
      }
      ```

18. 變更偵測策略
    - 每個元件都可以定義自己的變更偵測策略
    -   ChangeDetectionStrategy.Default
        -   從任意一個元件觸發了一個非同步事件 (ex. click)，Angular 會從根元件開始往下執行所有的變更偵測
        - 變更偵測會在每一次非同步事件發生時執行
    -   ChangeDetectionStrategy.OnPush
        - 變更偵測會在當元件中有 @Input() 屬性資料變更時執行
    - 每次變更偵測作業都會從根元件開始執行
