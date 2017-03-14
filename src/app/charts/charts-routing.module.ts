import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';
import { FlotComponent } from './flot/flot.component';

const routes: Routes=[
       //{ path: '', redirectTo: 'flot', pathMatch: 'full' },
       { path: 'flot', component: FlotComponent }
];

//export const ChartsRoute: Route=
  //{ path: 'charts',
    //children:
    //[
      //{ path: '', redirectTo: 'flot', pathMatch: 'full' },
      //{ path: 'flot', component: FlotComponent }
    //]
  //};


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ChartsRoutingModule { }
