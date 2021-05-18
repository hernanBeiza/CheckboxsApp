import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators, ValidatorFn } from '@angular/forms';

interface CheckItem {
  label:string;
  seleccionado:boolean;
  valor:number,
  desactivar:boolean
}

@Component({
  selector: 'app-simple-checkboxs',
  templateUrl: './simple-checkboxs.component.html',
  styleUrls: ['./simple-checkboxs.component.scss']
})
export class SimpleCheckboxsComponent implements OnInit {

  public opcionesUno:Array<CheckItem> = new Array<CheckItem>();

  constructor(){ }

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
