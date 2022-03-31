import { Component, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales','Others' ];
  public doughnutChartData: ChartData<'bar'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100,200 ], backgroundColor: [ '#66A1E8', '#6BF291', '#E866E0','#F5AD7C' ], hoverBackgroundColor: [ '#26AFE8', '#3BF899', '#E836E9','#F5A167' ] },
    ]
  };

  constructor(private graficaService:GraficasService) { }

  ngOnInit(): void {
    
  }

}
