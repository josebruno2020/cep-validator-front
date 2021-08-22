import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import apiRoutes from '../helpers/apiRoutes';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class CepServiceService {

  constructor(
      private http: HttpServiceService,
  ) {
      
   }

   getCeps(){
        return this.http.httpGet(apiRoutes.ceps);
   }

   insertCep(model:any) {
       return this.http.httpPost(apiRoutes.ceps, model);
   }


   deleteCep(id:number) {
       return this.http.httpDelete(apiRoutes.ceps+`/${id}`)
   }
}
