import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {PlanetaSWInterface} from "../Interface/StarWars";

@Component(
  {
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  nombre: string = "Evelyn";
  planetas:any[]=[];

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
          let repuesta:any = reponse.json();
          console.log(repuesta.next);
          this.planetas = reponse.json().results;
          this.planetas = this.planetas.map(
            (planeta)=>{
          planeta.imagenURL = "/assets/imagenesStarWars" + planeta.name+'.jpg';
          return planeta;
            }
          )
          //Arreglo


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
