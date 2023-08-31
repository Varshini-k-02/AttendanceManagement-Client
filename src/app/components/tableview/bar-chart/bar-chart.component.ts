import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnChanges {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};
  @Input() apiData:any;
  // apiDataArray:any[]=[];
  constructor(){
    
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['apiData'] && changes['apiData'].currentValue) {
      this.prepareChartData();
    }
  }
  showChart=false;
  // ngOnInit() {
  //   this.prepareChartData();
  // }

  

  prepareChartData() {
    this.showChart=true;
    const dataArray = Object.values(this.apiData);
    console.log(dataArray)
    const dateCounts = dataArray.reduce((acc, item: any) => {
      acc[item.loggedInDate] = (acc[item.loggedInDate] || 0) + 1;
      return acc;
    }, {});

    const sortedDates = Object.keys(dateCounts).sort();

    this.chartOptions = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Number of Employees Logged In'
      },
      xAxis: {
        categories: sortedDates,
        title: {
          text: 'Date'
        }
      },
      yAxis: {
        title: {
          text: 'Number of Employees'
        }
      },
      series: [{
        type: 'column',
        name: 'Employees',
        color: '#46BEAA',
        data: sortedDates.map(date => dateCounts[date])
      }]
    };
  }
}
