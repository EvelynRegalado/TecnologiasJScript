import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  nombre: string = "Evelyn";
  planetas: PlanetaSW[]=[];

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

  CargarPlanetas() {
    this._http.get("http://swapi.co/api/planets")
     //.map(response=>response.json())
      .subscribe(
    (response) => {
      console.log("Response:", response);
      console.log(response.json());
      let respuesta=response.json();
      console.log(respuesta.next());
      this.planetas = respuesta.results;
      },
      (error) => {
      console.log("Error:", error)
      },
      () => {
      console.log("Finally")
      }
    )
  }

}
interface PlanetaSW{
name:string;

  rotation_period: string,
  orbital_period: string,
  diameter: string,
  climate: string,
  gravity: string,
  terrain: string,
  surface_water: string,
  population: string,
  residents: [
    string,
    string,
    string
    ],
    films: [
    string,
    string
    ],
  created: string,
  edited: string,
  url: string

}
