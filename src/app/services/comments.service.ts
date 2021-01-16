import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }
  getComments(id){
         //http://localhost/movieX/movieX-API/?comments=2
  
         return new Promise((resolve, reject) => {
          let request = this.http.get(environment.apiUrl+"?comments="+id).subscribe(
            (comments) => {
              if (comments["status"] == 200) {
                //console.log(comments["results"])
                resolve(comments["results"]); // Herşey normalse ve film varsa
              }         
            },
            (e) => {
              reject(e); // Bir sıkıntı varsa
            }, () => {
              request.unsubscribe();
            }
          );
        });
  
  
  
  
  
  
  
  }
  setComment(id:string,userid:number,comment:string){


    var formData = new FormData();
    formData.append('movieID', id);
    formData.append('userId', String(userid));
    formData.append('comment', String(comment));

    return new Promise((resolve, reject) => {
      let request = this.http.post(environment.apiUrl,formData).subscribe(
        (comments) => {
          resolve(comments);
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
