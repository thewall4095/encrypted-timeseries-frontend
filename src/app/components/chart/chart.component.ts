import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  providers: [ApiService]
})
export class ChartComponent implements OnInit {
  chartData:any;

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = []; //= ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  ];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getTimeseriesData({}).subscribe((res:any) => {
      console.log(res);
      if(res.data){
        res.data.forEach((element:any) => {
          if(element?.messagesCount)
            this.barChartLabels.push(element.ts);
        });
        let dataq: number[] = [];
        res.data.forEach((element:any) => {
          if(element?.messagesCount)
           dataq.push(element?.messagesCount)
        });
        this.barChartData = [
          { data: dataq, label: 'Messages Count' },
        ];
      }
    });


  }

}
