import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  edadUno:number = 0;
  edadDos:number = 0;
  suma:number = 0;
  promedio:number = 0;

  
  Calcular(){
    this.suma = this.edadUno + this.edadDos;
    this.promedio = this.suma / 2;
  }
  Reset(){
    this.edadUno = 0;
    this.edadDos = 0;
    this.suma = 0;
    this.promedio = 0;

  }
}
