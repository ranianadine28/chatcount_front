import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({

  imports: [
    FormsModule,
  ],
  exports: [

    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers:[
  ]
})
export class SharedModule { }