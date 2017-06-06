import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Component(
  {
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  nombre: string = "Evelyn";
  planetas: PlanetaSW;

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
    }];

  constructor(private _http: Http) {
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

  cargarPlanetas() {
    this._http
      .get('http://swapi.co/api/planets')
      // .map(response => response.json())
      .subscribe(
        (reponse) => {
          console.log('Response: ', reponse);
          console.log(reponse.json());
          let repuesta = reponse.json();
          console.log(repuesta.next);
          this.planetas = repuesta.results;
        },
        (error) => {
          console.log('Error: ', error);
        },
        () => {
          console.log('Finally');
        }
      );
  }
}
interface PlanetaSW{
  name: string;
  rotation_period: number;
  orbital_period: number;
  diameter: number;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: number;
  population: number;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;

}
