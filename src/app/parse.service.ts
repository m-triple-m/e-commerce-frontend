import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParseService {

  constructor() { }

  getUnique(arr) {
    var new_arr = [];
    for (var i = 0; i < arr.length; i++) {
      if (!new_arr.includes(arr[i])) {
        new_arr.push(arr[i]);
        console.log(arr[i])
      }
    }
    return new_arr;
  }

  countOccurence(key, value, data){
    return data.filter(obj => obj[key] == value).length;
  }
  

  getRegistrationDates(users){

  }

  filterColumns(labels, cols, data){
    return Observable.create(observer => {
      let new_data = []
      for(let record of data){
        let new_ob = {}
        for(let i=0;i<cols.length;i++){
          new_ob[labels[i]] = record[cols[i]];
        }
        new_data.push(new_ob);
      }
      observer.next(new_data);
    })
  }

  getCounts(labels, col1, data){
    return Observable.create(observer => {
      let new_data = []
      
      let temp = []
      for(let record of data){
        temp.push((record[col1]))
      }
      
      temp = this.getUnique(temp);
      console.log(temp)
      
        for(let t of temp){
          let new_obj = {}
          new_obj[labels[0]] = t;
          new_obj[labels[1]] = this.countOccurence(col1, t, data);
          new_data.push(new_obj)
        }
        // console.log(new_data);
        observer.next(new_data);
    })
  }
}
