import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

type Axis= 'x' | 'y';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit,AfterViewInit {
  // @Input(tipo)
  @Input() tipo: ChartType = 'bar';
  @Input() horizontal:boolean=false;
  @Input() axis:Axis='x';
  @Input() barChartData: ChartData<'bar'>={
    labels: ['2021', '2022', '2023', '2024', '2025'],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A'},
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B'},
      { data: [ 8, 38, 70, 59, 66, 80, 100 ], label: 'Series C'}
    ]
  }
  private indexAxis:Axis='x';
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    indexAxis: this.indexAxis,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        // min: 10
      }
    }
  };
  public barChartType: ChartType = this.tipo;

  // public barChartData: ChartData<'bar'> = {
  //   labels: [ '2020', '2021', '2022', '2023', '2024', '2025', '2026' ],
  //   datasets: [
  //     { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A'},
  //     { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B'},
  //     { data: [ 8, 38, 70, 59, 66, 80, 100 ], label: 'Series C'}
  //   ]
  // };

  constructor() {

   }
  ngAfterViewInit(): void {
    // console.log(this.horizontal);
    // if(this.horizontal){
    //   this.indexAxis='y';
    // }
  }

  ngOnInit(): void {
    if(this.horizontal){
      this.indexAxis='y';
    }
    console.log(this.horizontal);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100)
    ];
    this.barChartData.datasets[1].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100)
    ];
    this.barChartData.datasets[2].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100)
    ];

    this.chart?.update();
  }

  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    // console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    // console.log(event, active);
  }


}
