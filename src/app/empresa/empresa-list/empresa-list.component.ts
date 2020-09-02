import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../empresa.service';
import { isListLikeIterable } from '@angular/core/src/change_detection/change_detection_util';
import { Empresa } from '../empresa';

@Component({
  selector: 'cp-empresa-list',
  templateUrl: './empresa-list.component.html',
  styleUrls: ['./empresa-list.component.css']
})
export class EmpresaListComponent implements OnInit {

  empresas: Empresa[] = [];

  constructor(private empresaService: EmpresaService) { }

  ngOnInit() {
    this.empresas = this.empresaService.listAll()
  }

}
