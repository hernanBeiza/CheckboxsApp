import { Component, OnInit } from '@angular/core';

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
export class AppComponent implements OnInit {
  title = 'CheckboxsApp';


  constructor(){ }

  ngOnInit(){ }

}