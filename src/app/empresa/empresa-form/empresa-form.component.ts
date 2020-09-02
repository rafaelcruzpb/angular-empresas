import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmpresaService } from '../empresa.service';
import { ActivatedRoute } from '@angular/router';
import { Empresa } from '../empresa';

@Component({
  selector: 'app-empresa-form',
  templateUrl: './empresa-form.component.html',
  styleUrls: ['./empresa-form.component.css']
})
export class EmpresaFormComponent implements OnInit {

  empresa: Empresa;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private empresaService: EmpresaService
  ) { 

  }

  ngOnInit() {
      let id = this.activatedRoute.snapshot.paramMap.get('id');

      if (id) {
        this.empresa = this.empresaService.find(+id);
      }
  }

}
