import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlotComponent } from '../charts/flot/flot.component';
import { CardsComponent } from '../cards/cards.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { fallbackRoute } from '../page1/fallbackRoute';
import { LayoutComponent } from '../layout/layout.component';
//import { ChartsRoute } from '../charts/charts-routing.module';

const routes: Routes = [
  //{ path: '', redirectTo:'/dashboard',pathMatch:'full' },
  {
  path: 'layout', component: LayoutComponent,
    children:
    [
      { path: '', component: DashboardComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'cards', component: CardsComponent },
      { path: 'cards/:num', component: CardsComponent },
      //ChartsRoute
      { path: 'charts', loadChildren: '../charts/charts.module#ChartsModule' }
    ]
  }
  //,
  //fallbackRoute
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class LayoutRoutingModule { }
