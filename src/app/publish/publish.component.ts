import { Component, OnInit } from '@angular/core';
import { PublishService } from '../services/publish.service';
import { Storage } from '@ionic/storage';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss'],
})
export class PublishComponent implements OnInit {

  constructor(public publishService:PublishService, private storage: Storage,    public toastController: ToastController,public navCtrl: NavController,) { }
 public title = null;
 public year = null;
 public released = null;
 public runtime = null;
 public genre = null;
 public director = null;
 public writer = null;
 public actors = null;
 public poster = null;
 public imdbRating = null;
 public plot = null;
 public type = null;
 public imdbID = null;
 public publishStatus = null;
public inputMovieTitle:string = "Recep İvedik";
  getMovie(){
    this.clearLastData();
    this.publishService.GetMovie(this.inputMovieTitle).then(movie => {
      this.title = movie["title"]
      this.year = movie["year"]
      this.released = movie["released"]
      this.runtime = movie["runtime"]
      this.genre = movie["genre"]
      this.director = movie["director"]
      this.writer = movie["writer"]
      this.actors = movie["actors"]
      this.poster = movie["poster"]
      this.imdbRating = movie["imdbRating"]
      this.type = movie["type"]
      this.plot = movie["plot"]
      this.imdbID = movie["imdbID"]
      
    });
  }
  clearLastData(){
    this.title = null
    this.year = null
    this.released =null
    this.runtime = null
    this.genre = null
    this.director =null
    this.writer = null
    this.actors = null
    this.poster = null
    this.imdbRating = null
    this.type = null
    this.plot = null
    this.publishStatus = null;
  }
  onTitleKey(event: any){
    this.inputMovieTitle = event.target.value;
  }
  publishMovie(){
    let userId = -1;
    this.storage.get('userId').then((storageUserId) => {
      userId = storageUserId;
    }).then(() => {
      this.setPublishMovie(userId,this.imdbID);
    });
  }
  setPublishMovie(userId,movieId){
    let message = "";
    let status = "";
    this.publishService.SetPublish(userId,movieId).then(insert => {
      if(insert["status"] == 200){
        status = "success";
        message="Paylaşım yapıldı.";
      } else {
        status = "danger"
        message="Paylaşım yapılırken bir hata oluştu";
      }
    }).then(() => {
      this.ToastGet(message,status);
      this.clearLastData();
    })
    .finally(() => {
      this.navCtrl.navigateRoot("home");
    })
  }
  async ToastGet(message, status) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: status,
      position: 'top',
    });
    toast.present();
  }
  ngOnInit() {
    this.clearLastData()
  }

}
