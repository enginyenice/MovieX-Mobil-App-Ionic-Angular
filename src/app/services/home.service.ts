import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }
  showList(){

    return new Promise((resolve, reject) => {
      let request = this.http.get(environment.apiUrl+"?home").subscribe(
        (movies) => {
          if (movies["status"] == 200) {
            //console.log(movies["results"])
            resolve(movies["results"]); // Herşey normalse ve film varsa
          }         
        },
        (e) => {
          reject(e); // Bir sıkıntı varsa
        }, () => {
          //request.unsubscribe();
        }
      );
    });
    
  }
}
