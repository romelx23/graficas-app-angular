import { Component, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: string[] = [];
  public doughnutChartData: ChartData<'bar'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100,200 ], backgroundColor: [ '#66A1E8', '#6BF291', '#E866E0','#F5AD7C' ], hoverBackgroundColor: [ '#26AFE8', '#3BF899', '#E836E9','#F5A167' ] },
    ]
  };

  constructor(private graficaService:GraficasService) { }

  ngOnInit(): void {
    // this.graficaService.getUsuariosRedesSociales().subscribe(data=>{
    //   console.log(data);
    //   const labels=Object.keys(data);
    //   const values=Object.values(data);
    //   console.log(labels)
    //   console.log(values)
    //   this.doughnutChartLabels.push(...labels);
    //   this.doughnutChartData.datasets[0].data=values;
    // })
    this.graficaService.getUsuariosRedesSocialesDonas()
    .subscribe(({labels,values})=>{
      this.doughnutChartLabels.push(...labels);
      this.doughnutChartData.datasets[0].data=values;
    })
  }

}
