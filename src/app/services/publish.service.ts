import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: "root",
})
export class PublishService {
  constructor(private http: HttpClient) {}
  GetMovie(title) {
    return new Promise((resolve, reject) => {
      let request = this.http.get(environment.apiUrl+"?t=" + title).subscribe(
        (movie) => {
          if (movie["status"] == 200) {
            //console.log(movie["result"])
            resolve(movie["result"]); // Herşey normalse ve film varsa
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
  SetPublish(userId,imdbID){
    return new Promise((resolve, reject) => {
      let request = this.http.get(environment.apiUrl+"?userId="+userId+"&publishMovie=" + imdbID).subscribe(
        (publishStatus) => {
          console.log(publishStatus);
          resolve(publishStatus)
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
