import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './component/grid/grid.component';


@NgModule({
  declarations: [GridComponent],
  imports: [
    CommonModule
  ],
  exports:[
    CommonModule,
    GridComponent
  ]
})
export class SharedModule { }
