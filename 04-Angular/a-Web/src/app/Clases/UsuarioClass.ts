/**
 * Created by usrdel on 7/6/17.
 */
export class UsuarioClass{

  constructor(public nombre?:string,
              public id?:number,
              public createdAt?:Date,
              public updateAt?:Date){
    this.nombre=nombre;
  }
}
