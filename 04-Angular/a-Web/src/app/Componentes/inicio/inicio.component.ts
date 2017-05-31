import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  nombre: string = "Evelyn";
  arregloUsuarios = [{
    nombre: "Eveeee",
    apellido: "Regalado",
    conectado: true
  },
    {
      nombre: "Brenda",
      apellido: "Ximena",
      conectado: true
    },
    {
      nombre: "Michel",
      apellido: "Blabla",
      conectado: false
    },
    {
      nombre: "Stefania",
      apellido: "flores",
      conectado: true
    }]

  constructor(private _http:Http) {
  }

  ngOnInit() {
  }

  cambiarNombre(): void {
    this.nombre = "Brenda";
  }

  CambiarOtroNombre() {
    this.nombre = "Eve";
  }

  CambiarNombreInput(nombreEtiqueta) {
    console.log(nombreEtiqueta.value);
    console.log(nombreEtiqueta.type);
    console.log(nombreEtiqueta.placeholder);
    this.nombre = nombreEtiqueta.value;
  }
  CargarPlanetas(){
    this._http.get("swapi.co/api/planets")
      //.subscribe()
  }
}
