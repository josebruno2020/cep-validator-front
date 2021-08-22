import { Component, OnInit } from '@angular/core';
import apiMessage from 'src/core/helpers/errorMessage';
import { CepServiceService } from 'src/core/services/cep-service.service';
import { CityService } from 'src/core/services/city.service';
import { BasePageComponent } from '../base-page/base-page.component';

@Component({
  selector: 'app-cep-list',
  templateUrl: './cep-list.component.html',
  styleUrls: ['./cep-list.component.css']
})
export class CepListComponent extends BasePageComponent implements OnInit  {
  ceps: any;
  cities:any;

  constructor(
      private cepService: CepServiceService,
      private cityService: CityService,
  ) {
      super();
   }

   ngOnInit() {
      this.getCeps();
  }

  getCeps() {
    this.loading = true;
    this.cepService.getCeps().subscribe((res:any) => {
        this.loading = false;
        this.ceps = res.data;
      }, err => {
          this.loading = false;
          console.log(err);
      })
  }

  getCities() {
      this.loading = true;
      this.cityService.getCities().subscribe((res:any) => {
        this.cities = res;
      }, err => {
          console.log(err)
      })
  }

  deleteCep(id:number) {
      this.loading = true;
      this.cepService.deleteCep(id).subscribe((res:any) => {
          this.loading = false;
          console.log(res);
          this.setupAlert(res.message);
          this.ceps = this.ceps.filter((cep:any) => {
              if(cep.id != id) {
                  return true;
              }
          })
          
      }, (err) => {
        console.log(err);
        this.loading = false;
        this.setupAlert(apiMessage.errorDelete, 'danger');
      })
  }

  

}
