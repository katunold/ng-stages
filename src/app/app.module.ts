import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AssemblylineModule} from "./assemblyline/assemblyline.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AssemblylineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
