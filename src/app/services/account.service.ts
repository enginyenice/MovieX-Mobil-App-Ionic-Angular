import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getUserName(id){
    //http://localhost/movieX/movieX-API/?getUsername=2

    return new Promise((resolve, reject) => {
     let request = this.http.get(environment.apiUrl+"?getUsername="+id).subscribe(
       (comments) => {
           resolve(comments); // Herşey normalse ve film varsa        
       },
       (e) => {
         reject(e); // Bir sıkıntı varsa
       }, () => {
         request.unsubscribe();
       }
     );
   });
}

  editUser(userId,password){
    var formData = new FormData();
    formData.append('userId', userId);
    formData.append('password', password);
    formData.append('edit', 'edit');
    return new Promise((resolve, reject) => {
      let request = this.http.post(environment.apiUrl,formData).subscribe(
        (result) => {
         // console.log(result);
         // console.log(username);
         // console.log(result);
         resolve(result);
        },
        (e) => {
          reject(e); // Bir sıkıntı varsa
        }, () => {
          request.unsubscribe();
        }
      );
    });

  }
}

