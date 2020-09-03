import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmpresaService } from '../empresa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from '../empresa';

@Component({
  selector: 'app-empresa-form',
  templateUrl: './empresa-form.component.html',
  styleUrls: ['./empresa-form.component.css']
})
export class EmpresaFormComponent implements OnInit {

  empresa: Empresa;
  empresaForm;

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
    this.empresaForm = this.formBuilder.group(this.empresa)
  }

  ngOnInit() {
      let id = this.activatedRoute.snapshot.paramMap.get('id');

      if (id) {
        this.empresa = this.empresaService.find(+id);
      }
  }

  onSubmit(empresaData) {
    this.empresaService.save(empresaData);
    this.empresaForm.reset();

    console.warn('Salvo com sucesso!', empresaData);
    this.router.navigate(['/empresa/list']);
  }
}
