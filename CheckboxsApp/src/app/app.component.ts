import { Component } from '@angular/core';

interface CheckItem {
  label:string;
  seleccionado:boolean;
  valor:number
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CheckboxsApp';

  public opcionesUno:Array<CheckItem> = new Array<CheckItem>();

  ngOnInit(){
  	this.opcionesUno.push({label:"Uno", seleccionado:true, valor:1});
  	this.opcionesUno.push({label:"Dos", seleccionado:false, valor:2});
  	this.opcionesUno.push({label:"Tres", seleccionado:false, valor:3});
  }

  public opcionesUnoOnClick(event:any, opcion:CheckItem):void {
  	console.log("opcionesUnoOnClick",opcion);
    //Deseleccionar todas las otras
    //this.opcionesUno.forEach(uno=>uno.seleccionado=false);
  	opcion.seleccionado = true;
  }

  public opcionesDosOnClick(event:any, opcion:CheckItem):void {
  	console.log("opcionesDosOnClick",opcion);
  	opcion.seleccionado = true;
  }

  public revisarValores():void {
  	console.log(this.opcionesUno);
  }

  public borrarTodo():void {
    this.opcionesUno.forEach(opcion2=>opcion2.seleccionado=false);
  }

}