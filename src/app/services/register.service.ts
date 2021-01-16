import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }



  register(username:string,password:string){
    var formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    formData.append('register', 'register');
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
