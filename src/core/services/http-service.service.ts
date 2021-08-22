import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  protected urlPathern:string = `${environment.BASE_URL}`;
  protected headerOptions: any; 
  constructor(
      protected http:HttpClient
      ) 
      {
        const token = localStorage.getItem('access_token');
        this.headerOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `bearer ${token}`,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS, DELETE',
            // 'credentials': 'same-origin'
            })
        }
      } 

      httpGet(route:string) {
        return this.http.get(this.urlPathern+route, this.headerOptions);
      }

      httpGetPaginate(route:string, page:number) {
        return this.http.get(this.urlPathern+route+`?page=${page}`, this.headerOptions);
      }

      httpPost(route:string, model:any) {
        return this.http.post(this.urlPathern+route, model, this.headerOptions);
      }

      httpDelete(route:string) {
        return this.http.delete(this.urlPathern+route, this.headerOptions);
      }
}
