# Ng2Advanced

##模組載入機制
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

##實作路由守門員 (Route Guards)
  1. 用來控管權限
  2. 建立LoginRouteGuard服務元件並實作 CanActivate  
     ng g class LoginRouteGuard  
  3. 實作 CanActivate 介面  
     到 app.module.ts 將 LoginRouteGuard 加入 providers  
     providers: [LoginRouteGuard]  
     在 'charts' 路由定義加上 canActivate 屬性  
      { path: 'charts',
        loadChildren: '../charts/charts.module#ChartsModule',
        canActivate:[NeedLoginGuard] 
      }    
  4. canDeactive表示要離開這個路由元件  

  ##表單開發模型
  1. 模型表單(Model-Driven Form) 
     - 動態表單的話可以使用模型為主的表單開發模式  
     - 使用 formControlName 屬性  
  2. 樣板表單(Template-Driven Form)
     - 使用 ngModel 指令 (Directive)    
     - [(ngModel)]="name"  
     - 建立一個「雙向繫結」綁定元件中的特定屬  
     - 主要用來建立一個 表單控制項 (FormControl) 實體  
  3. 練習範本表單的 ngModel 用法 (套用 forms.classic.html 範本並設定欄位驗證)  
     - 單向綁定( one-way binding ) 使用 [ngModel]  
       `<input name="username" [ngModel]="username">`  
     - 雙向綁定( two-way binding ) 使用 [(ngModel)]  
       <input name="username" [(ngModel)]="username">  
     - 放在 <form> 裡面的輸入欄位則必須要有 name 屬性  
  4. 練習範本表單的NgForm用法與注意事項  
     - FormsModule 預設會將所有的 <form> 標籤宣告為 NgForm 指令  
     - 因此 <form> 標籤不需要額外宣告 ngForm 指令 (Directive)  
     - 要從範本取得 ngForm 物件實體，可以透過範本參考變數完成 <form name="form1" #f="ngForm">  
  5. 練習範本表單的NgModelGroup用法語欄位驗證樣式與驗證器  
     - 主要用途用來追蹤/取得群組內所有表單控制項的欄位值與驗證狀態
          <div class="form-group" [class.has-error]="mType1.errors?.required">
                      <label for="input-id-1" class="col-sm-2 control-label">Label focus</label>
                      <div class="col-sm-10">
                        <input id="input-id-1" type="text" class="form-control" name="type1" #mType1="ngModel"
                        [required]="!mTitle.errors?.required" [(ngModel)]="data.type1">
                      </div>
                    </div>
    


