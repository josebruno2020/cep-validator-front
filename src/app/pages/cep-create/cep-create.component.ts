import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/core/services/city.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CepServiceService } from 'src/core/services/cep-service.service';
import apiMessage from 'src/core/helpers/errorMessage';
import { BasePageComponent } from '../base-page/base-page.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cep-create',
  templateUrl: './cep-create.component.html',
  styleUrls: ['./cep-create.component.css']
})
export class CepCreateComponent extends BasePageComponent implements OnInit {
  create:any;
  cities:any;
  isNewCity:boolean =  true;
  cepErrorMessage:string;
 
  constructor(
      private cityService: CityService,
      private cepService: CepServiceService,
      private formBuilder: FormBuilder,
      private router: Router
  ) { 
    
    super();
    this.create = this.formBuilder.group({
        cep: this.formBuilder.control(null, Validators.required),
        city_id: this.formBuilder.control(null),
        city: this.formBuilder.control(null)
    })
  }

  ngOnInit(): void {
    this.getCities();
  }

  getCities() {
      this.cityService.getCities().subscribe((res:any) => {
          this.cities = res;
          console.log(this.cities);
      }, err => {

          console.log(err);
      })
  }

  createCep(e) {
    e.preventDefault();
    console.log(this.create.value)
    if(!this.validateCep()) {
        this.setupAlert('Primeiro preencha um CEP válido!', 'danger');
        return;
    }
    this.loading = true;
    this.cepService.insertCep(this.create.value).subscribe((res) => {
        this.setupAlert(apiMessage.successNewCep);
        this.loading = false;
        return this.router.navigate(['']);
        
        //TODO zerar formulario;
    }, () => {
        this.loading = false;
        this.setupAlert(apiMessage.errorDelete, 'danger');
    })

  }

  setNewCity() {
      return this.isNewCity = !this.isNewCity;
  }

  //TODO FAZER A VALIDACAO!!!
  validateCep() :boolean {
    let cep = this.create.value.cep;
    
    let expSize = new RegExp(/^([1-9])([0-9]{5})$/);
    let expPair = new RegExp(/([0-9])([02468])(\1)/);

    if(expPair.test(cep)) {
        this.setupAlert('CEP inválido! Contém dígitos repetitivos alternado em pares', 'danger');
        return false;
    }

    if(!expSize.test(cep)) {
        this.setupAlert('CEP Inválido! Deve ser um número entre 100.000 e 999.999', 'danger');
        return false;
    }
    this.closeAlert();
    return true;
      
  }

}
