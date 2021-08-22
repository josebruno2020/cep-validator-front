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

   getCeps(page=1){
        return this.http.httpGetPaginate(apiRoutes.ceps, page);
   }

   insertCep(model:any) {
       return this.http.httpPost(apiRoutes.ceps, model);
   }


   deleteCep(id:number) {
       return this.http.httpDelete(apiRoutes.ceps+`/${id}`)
   }
}
