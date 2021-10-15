import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'; /* paquete ngModel para formularios */
import { productComponent } from './components/product.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    productComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule /* paquete ngModel para formularios y para que tenga una consecuencia se tiene que importar aquí */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
