import { Component, OnInit } from '@angular/core';

interface MenuItem{
  ruta:string;
  texto:string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: []
})
export class MenuComponent implements OnInit {

  menu:MenuItem[]=[
    {ruta:'graficas/barra',texto:'Barra'},
    {ruta:'graficas/barra-doble',texto:'Barra doble'},
    {ruta:'graficas/dona',texto:'Dona'},
    {ruta:'graficas/dona-http',texto:'Dona Http'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
