import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssemblylineComponent } from './components/assemblyline/assemblyline.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AssemblylineComponent
  ],
  exports: [
    AssemblylineComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AssemblylineModule { }
