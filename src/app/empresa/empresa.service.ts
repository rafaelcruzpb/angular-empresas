import { Empresa } from "./empresa";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class EmpresaService {

    empresas: Empresa[] = [];

    constructor() { this.empresas.push({ id: 1, cnpj: '00001', razaoSocial: 'Primeira Empresa'}) }

    listAll(): Empresa[] {
       return this.empresas; 
    }

    find(id: number): Empresa {
        return this.empresas.find(empresa => empresa.id == id);
    }

    findIndex(id: number): number {
        return this.empresas.findIndex(
            function (element, index, array) {
                console.log(array);
                return element.id == id
            }
        )
    }

    save(empresaData: Empresa) {
        let index = empresaData.id ? this.findIndex(empresaData.id) : -1;

        if (index != -1) {
            this.empresas[index] = empresaData;
        } else {
            empresaData.id = this.empresas.length+1;
            this.empresas.push(empresaData);
        }
    }

    remove(id: number) {
        let index = this.findIndex(id);

        if (index != -1) {
            this.empresas.splice(index, 1);
        }
    }
}