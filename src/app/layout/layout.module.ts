import { NgModule } from "@angular/core";

import { MenuComponent } from "./menu/menu.component";
import { BodyComponent } from './body/body.component';
import { AppRoutingModule } from "../app.routing.module";
import { EmpresaModule } from "../empresa/empresa.module";

@NgModule ({
    declarations: [
        MenuComponent,
        BodyComponent
    ],
    imports: [
        AppRoutingModule,
        EmpresaModule
    ],
    exports: [
        BodyComponent
    ]
})
export class LayoutModule {}