import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { ChartsModule } from '../charts/charts.module';

@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    LayoutRoutingModule
  ],
  declarations: []
})
export class LayoutModule { }
