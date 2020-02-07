import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser;
  logged_in = false;
  url = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  getCurrentUser(){
    return this.currentUser;
  }

  setCurrentUser(user){
    this.currentUser = user;
  }

  addUser(formdata) : Observable<any>{
    return this.http.post(this.url+'/user/add', formdata);
  }

  updateUser(formadata, id) : Observable<any>{
    return this.http.put(this.url+`/user/update/${id}`, formadata);
  }

  deleteUser(id) : Observable<any>{
    return this.http.delete(this.url+`/user/deleteById/${id}`);
  }

  getUserById(id) : Observable<any>{
    return this.http.get(this.url+`/user/getbyid/${id}`);
  }

  getUserByUsername(username) : Observable<any>{
    return this.http.get(this.url+`/user/getbyname/${username}`);
  }

  getAllUsers(): Observable<any>{
    return this.http.get(this.url+'/user/getall');
  }

  uploadImage(file): Observable<any>{
    return this.http.post(this.url+'/user/addimg', file);
  }

  downloadImage(name): Observable<any>{
    return this.http.get(this.url+'/user/getImg/'+name, {responseType : 'blob'});
  }

  getImage(name){
    return Observable.create((observer) => {
      this.downloadImage(name).subscribe((res) => {
        // console.log(res);
        var reader = new FileReader();
        reader.readAsDataURL(res);
        reader.onload = (_event) => {
          console.log(reader.result);
          observer.next(reader.result);
      }
      })
    })
  }
}
