import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators, ValidatorFn } from '@angular/forms';

interface CheckItem {
  label:string;
  seleccionado:boolean;
  valor:number,
  desactivar:boolean
}

@Component({
  selector: 'app-formulario-checkboxs',
  templateUrl: './formulario-checkboxs.component.html',
  styleUrls: ['./formulario-checkboxs.component.scss']
})
export class FormularioCheckboxsComponent implements OnInit {

  public opcionesDos:Array<CheckItem> = new Array<CheckItem>();
  public checkboxsForm: FormGroup;
  public checkboxsControl: FormArray;

  constructor(private formBuilder:FormBuilder){

    this.opcionesDos.push({label:"Uno", seleccionado:false, valor:4, desactivar:false});
    this.opcionesDos.push({label:"Dos", seleccionado:true, valor:5, desactivar:false});
    this.opcionesDos.push({label:"Tres", seleccionado:false, valor:6, desactivar:false});

    let checkboxes = new FormArray([],this.verificarCheckboxObligatorios(1));
    this.checkboxsForm = this.formBuilder.group({
    	"opciones": checkboxes
    });
    this.opcionesDos.forEach(item=>{
      //Setear valor inicial por defecto si es que tiene configuración o valor guardado por el usuario en NomenclaturaCampoConfiguracion
      const control = new FormControl(item.seleccionado);
      checkboxes.push(control);
    });
    this.checkboxsControl = this.checkboxsForm.controls["opciones"] as FormArray;
    //this.checkboxsForm.addControl("opciones",checkboxes);
  }

  ngOnInit() { }

  public obtenerControl(indice:number):FormControl {
  	const itemsControl = this.checkboxsForm.controls["opciones"] as FormArray;
  	return itemsControl.controls[indice] as FormControl;
  }

  private verificarCheckboxObligatorios(minRequired = 1): ValidatorFn {
    return function validate (formGroup: FormGroup) {
      let checked = 0;
      Object.keys(formGroup.controls).forEach(key => {
        const control = formGroup.controls[key];
        if (control.value === true) {
          checked ++;
        }
      });
      if (checked < minRequired) {
        return { requireCheckboxesToBeChecked: true };
      }
      return null;
    };
  }

  public opcionesDosOnClick(event:any, opcion:CheckItem):void {
    console.log("opcionesDosOnClick",opcion);
    opcion.seleccionado = !opcion.seleccionado;
  }

  public onSubmit(values:any):void {
    console.log(values);
    console.log(this.checkboxsForm);
    console.log(this.checkboxsForm.errors);
    console.log(this.checkboxsControl.errors);
  }


}
