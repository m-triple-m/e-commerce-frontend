import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = "http://localhost:3000/product";
  constructor(private http: HttpClient) { }

  addProduct(formdata) : Observable<any>{
    return this.http.post(this.url+'/add', formdata);
  }

  addReview(data){
    return this.http.post('http://localhost:3000/review/add', data);
  }

  updateReview(id, review){
    return this.http.post(`http://localhost:3000/review/update/${id}`, review);
  }

  getAllReviews(product_id){
    return this.http.get(`http://localhost:3000/review/getbyproduct/${product_id}`);
  }

  getUserReview(user_id){
    return this.http.get(`http://localhost:3000/review/getbyuser/${user_id}`);
  }

  updateProduct(formadata, id) : Observable<any>{
    return this.http.put(this.url+`/update/${id}`, formadata);
  }

  deleteProduct(id) : Observable<any>{
    return this.http.delete(this.url+`/deleteById/${id}`);
  }

  getProductById(id) : Observable<any>{
    return this.http.get(this.url+`/getbyid/${id}`);
  }

  getProductByName(name) : Observable<any>{
    return this.http.get(this.url+`/getbyname/${name}`);
  }

  getAllProduct(): Observable<any>{
    return this.http.get(this.url+'/getall');
  }

  uploadImage(file): Observable<any>{
    return this.http.post(this.url+'/addimg', file);
  }

  downloadImage(name): Observable<any>{
    return this.http.get(this.url+'/getImg/'+name, {responseType : 'blob'});
  }

}
