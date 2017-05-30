import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  nombre:string="Evelyn";
  constructor() { }

  ngOnInit() {
  }
cambiarNombre():void{
    this.nombre="Brenda";
}
CambiarOtroNombre(){
    this.nombre="Eve";
}
}
