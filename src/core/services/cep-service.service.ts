import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import apiRoutes from '../helpers/apiRoutes';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class CepServiceService extends HttpServiceService {

  constructor(
      http: HttpClient,
  ) {
      super(http);
   }

   getCeps(){
        this.http.get(this.urlPathern+apiRoutes.ceps, this.headerOptions).subscribe((res) => {
            console.log(res)
            return res;
        }, (err) => {
            console.log(err)
        })
   }
}
