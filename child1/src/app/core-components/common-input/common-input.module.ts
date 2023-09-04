import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonInputComponent } from './common-input.component';

@NgModule({
  declarations: [
    CommonInputComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [CommonInputComponent]
})
export class CommonInputModule { }

