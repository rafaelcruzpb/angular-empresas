import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaListComponent } from './empresa-list/empresa-list.component';
import { EmpresaFormComponent } from './empresa-form/empresa-form.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    EmpresaListComponent,
    EmpresaFormComponent
  ],
  exports: [
    
  ]
})
export class EmpresaModule { }
