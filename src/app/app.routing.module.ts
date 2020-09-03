import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"; 
import { EmpresaListComponent } from "./empresa/empresa-list/empresa-list.component";
import { EmpresaFormComponent } from "./empresa/empresa-form/empresa-form.component";
import { EmpresaDeleteComponent } from "./empresa/empresa-delete/empresa-delete.component";

const routes = [
    { path: 'empresa/list', component: EmpresaListComponent },
    { path: 'empresa/add', component: EmpresaFormComponent },
    { path: 'empresa/edit/:id', component: EmpresaFormComponent },
    { path: 'empresa/delete/:id', component: EmpresaDeleteComponent },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }