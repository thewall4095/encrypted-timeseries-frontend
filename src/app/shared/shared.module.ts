import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from '../components/chart/chart.component';


@NgModule({
  declarations: [ChartComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports:[
    ChartsModule,
    ChartComponent
  ]
})
export class SharedModule { }
