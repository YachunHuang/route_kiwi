import { Advcomp1Component } from './advcomp1/advcomp1.component';
/*import { FlotComponent } from './charts/flot/flot.component';
import { CardsComponent } from './cards/cards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { fallbackRoute } from './page1/fallbackRoute';
import { Page2Component } from './page2/page2.component';
import { Page1Component } from './page1/page1.component';*/
import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo:'/login',pathMatch:'full' },
  { path: 'login', component: LoginComponent },
  { path: 'adv1', component: Advcomp1Component }

 /* { path: '', redirectTo:'/dashboard',pathMatch:'full' },
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'cards/:num', component: CardsComponent },
  fallbackRoute*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes
  //, {
   // useHash:true,
    //enableTracing:false
  //}
  )],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
