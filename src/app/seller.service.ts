import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  url="http://localhost:3000/seller"
  constructor(private http: HttpClient) { }

  addSeller(data){
    return this.http.post(this.url+'/add', data);
  }


}
