import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {PlanetaSWInterface} from "../Interface/StarWars";
import {UsuarioClass} from "../../Clases/UsuarioClass";

@Component(
  {
    selector: 'app-inicio',
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.css']
  })
export class InicioComponent implements OnInit {
  nombre: string = "Evelyn";
  usuarios: UsuarioClass[] = [];
  nuevoUsuario: UsuarioClass = new UsuarioClass("");

  planetas: any[] = [];

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
    this._http.get('http://localhost:1337/usuario/')
      .subscribe(
        respuesta => {
          let respJson:UsuarioClass[]= respuesta.json();
          console.log("respuesta json:", respJson);
          this.usuarios=respJson;
          console.log("Usuarios: ", this.usuarios);

        },
        error => {
          console.log("Error", error)
        }
      )
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
          let repuesta: any = reponse.json();
          console.log(repuesta.next);
          this.planetas = reponse.json().results;
          this.planetas = this.planetas.map(
            (planeta) => {
              planeta.imagenURL = "/assets/imagenesStarWars" + planeta.name + '.jpg';
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

  crearUsuario() {
    console.log("Creo usuario");
    /*let usuario= {
      nombre: this.nuevoUsuario.nombre
    }*/
    this._http.post('http://localhost:1337/Usuario', this.nuevoUsuario)
      .subscribe(
        respuesta => {
          let respuestaJson = respuesta.json();
          console.log('respuestaJson: ', respuestaJson);
          this.usuarios.push(respuestaJson);

        },
        error => {
          console.log("Error", error)
        }
      )
  }
  eliminarUsuario(id, i){

    this._http.delete("http://localhost:1337/usuario/"+id).subscribe(respuesta=>{
      let rJson = respuesta.json();
      console.log("respuesta json:", rJson);
      this.usuarios.splice(i,1);

    }, error=>{
      console.log("error: ", error);
    });
  }
  actualizarUsuario(){
    this._http.get("http://localhost:1337/usuario").subscribe(respuesta=>{
      let rJson = respuesta.json();
      console.log("respuesta json:", rJson);
      this.usuarios=rJson;

    }, error=>{
      console.log("error: ", error);
    });
  }
}




