import { Component } from '@angular/core';

interface CheckItem {
  label:string;
  seleccionado:boolean;
  valor:number,
  desactivar:boolean
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
  	this.opcionesUno.push({label:"Uno", seleccionado:true, valor:1, desactivar:false});
  	this.opcionesUno.push({label:"Dos", seleccionado:false, valor:2, desactivar:true});
  	this.opcionesUno.push({label:"Tres", seleccionado:false, valor:3, desactivar:false});
  }

  public opcionesUnoOnClick(event:any, opcion:CheckItem):void {
  	console.log("opcionesUnoOnClick",opcion);
    //Toggle
    if(opcion.seleccionado == true){
      opcion.seleccionado = false;
    } else {
      opcion.seleccionado = true;
    }
  }

  public opcionesDosOnClick(event:any, opcion:CheckItem):void {
  	console.log("opcionesDosOnClick",opcion);
  	opcion.seleccionado = true;
  }

  public revisarValores():void {
  	console.log(this.opcionesUno);
  }

  public verSeleccionados():void {
    let seleccionados = this.opcionesUno.filter(item=>item.seleccionado==true);
    console.log(seleccionados);
  }

  public borrarTodo():void {
    this.opcionesUno.forEach(opcion2=>opcion2.seleccionado=false);
  }

  public desactivarTodos():void {
    this.opcionesUno.forEach(opcion2=>opcion2.desactivar=true);
  }

}