import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaListComponent } from './empresa-list/empresa-list.component';
import { EmpresaFormComponent } from './empresa-form/empresa-form.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpresaDeleteComponent } from './empresa-delete/empresa-delete.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    EmpresaListComponent,
    EmpresaFormComponent,
    EmpresaDeleteComponent
  ],
  exports: [
    
  ]
})
export class EmpresaModule { }
