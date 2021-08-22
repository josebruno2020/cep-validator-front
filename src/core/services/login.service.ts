import { Injectable } from '@angular/core';
import apiRoutes from '../helpers/apiRoutes';
import { HttpServiceService } from './http-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(protected http: HttpServiceService) { }

  login(model:any) {
      return this.http.httpPost(apiRoutes.login, model);
  }
}
