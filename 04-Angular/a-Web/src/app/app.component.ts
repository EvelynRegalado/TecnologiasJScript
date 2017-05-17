import { Component } from '@angular/core';

@Component({
  selector: 'twj-raiz',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuario: UsuarioInt = {
    nombre: "Evelyn",
    apellido: "Regalado"
  };

  url:string="https://angular.io";
  src:string="https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg";

  constructor() {
    console.log("Constructor");
    this.holaMundo();
    this.saludar(this.usuario.nombre,
      this.usuario.apellido
    );
  }

  holaMundo() {
    console.log("Hola mundo");
  }

  saludar(nombre: string,
          apellido?: string): string {
    return `Hola ${nombre} ${apellido}`;
  }
}
    interface UsuarioInt {
  apellido: string,
  nombre: string
}

