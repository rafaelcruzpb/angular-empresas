import { Empresa } from "./empresa";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class EmpresaService {

    empresas: Empresa[] = [];

    constructor() { this.empresas.push({ id: 1, cnpj: '1322', razaoSocial: 'Nome'}) }

    listAll(): Empresa[] {
       return this.empresas; 
    }

    find(id: number): Empresa {
        return this.empresas.find(empresa => empresa.id == id);
    }
}