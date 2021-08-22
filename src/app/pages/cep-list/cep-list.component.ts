import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  total$: Observable<number>;
  page: number = 1;
  pageSize:number = 5;

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
    this.cepService.getCeps(this.page).subscribe((res:any) => {
        console.log(res);
        this.loading = false;
        this.total$ = res.total;
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

  setPage = (page) => {

    this.page = page;
    this.getCeps();
  }

  

}
