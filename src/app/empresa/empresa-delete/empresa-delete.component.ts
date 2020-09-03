import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresaService } from '../empresa.service';
import { FormBuilder } from '@angular/forms';
import { Empresa } from '../empresa';

@Component({
  selector: 'app-empresa-delete',
  templateUrl: './empresa-delete.component.html',
  styleUrls: ['./empresa-delete.component.css']
})
export class EmpresaDeleteComponent implements OnInit {

  empresa: Empresa;
  empresaDelete;

  constructor(
    private activatedRoute: ActivatedRoute,
    private empresaService: EmpresaService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.empresa = {
      id: null,
      cnpj: '',
      razaoSocial: ''
    }
    this.empresaDelete = this.formBuilder.group(this.empresa)
  }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.empresa = this.empresaService.find(+id);
    }
  }

  onSubmit(empresaData) {
    this.empresaService.remove(empresaData.id);
    this.empresaDelete.reset();

    console.warn('Removido com sucesso!', empresaData);
    this.router.navigate(['/empresa/list']);
  }

}
