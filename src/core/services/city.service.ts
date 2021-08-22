import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import apiRoutes from '../helpers/apiRoutes';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class CityService{

  constructor(protected http: HttpServiceService) {
      
   }

   getCities() {
       return this.http.httpGet(apiRoutes.cities);
   }
}
