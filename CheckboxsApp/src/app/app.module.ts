import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioCheckboxsComponent } from './formulario-checkboxs/formulario-checkboxs.component';
import { SimpleCheckboxsComponent } from './simple-checkboxs/simple-checkboxs.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioCheckboxsComponent,
    SimpleCheckboxsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
