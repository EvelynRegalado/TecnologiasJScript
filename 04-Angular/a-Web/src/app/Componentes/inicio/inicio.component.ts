import {Component, OnInit} from '@angular/core';

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
      apellido: "Ximena"
    },
    {
      nombre: "Michel",
      apellido: "Blabla"
    }]

  constructor() {
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
}
