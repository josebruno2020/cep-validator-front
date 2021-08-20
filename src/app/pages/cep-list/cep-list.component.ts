import { Component, OnInit } from '@angular/core';
import { CepServiceService } from 'src/core/services/cep-service.service';

@Component({
  selector: 'app-cep-list',
  templateUrl: './cep-list.component.html',
  styleUrls: ['./cep-list.component.css']
})
export class CepListComponent implements OnInit {
  ceps: any[];
  constructor(
      private cepService: CepServiceService
  ) { }

  ngOnInit(): void {
      this.cepService.getCeps();
  }

}
