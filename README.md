# Ng2Advanced

##模組載入機制
  1.全部載入  
      -將所有模組一次載入(打包成一個js)  

  2.延遲載入  
      -不會是強行別  
      -加快頁面的載入速度,需要的模組才會載入  
      -練習將 ChartsModule 改用延遲載入的方式定義 (包含路由設定)  

  3.預先載入  
      -將部分模組拆成可延遲載入的片段  
      -所有可延遲載入的程式片段會立即預先載入  
      -預先載入的過程透過非同步背景下載，不影響畫面顯示或使用者操作  

##實作路由守門員 (Route Guards)
  1.建立LoginRouteGuard服務元件並實作 CanActivate  
    ng g class LoginRouteGuard  
  2.實作 CanActivate 介面  
  到 app.module.ts 將 LoginRouteGuard 加入 providers  
  providers: [LoginRouteGuard]  
  在 'charts' 路由定義加上 canActivate 屬性  
  { path: 'charts', loadChildren: './charts/charts.module#ChartsModule', canActivate: [LoginRouteGuard] }  
  
