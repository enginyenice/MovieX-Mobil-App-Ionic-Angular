import { Component, Input, OnInit } from "@angular/core";
import { CommentsService } from "../services/comments.service";
import { ToastController } from "@ionic/angular";
import { Storage } from '@ionic/storage';

@Component({
  selector: "app-comments",
  templateUrl: "./comments.component.html",
  styleUrls: ["./comments.component.scss"],
})
export class CommentsComponent implements OnInit {
  constructor(
    public commentsService: CommentsService,
    public toastController: ToastController,
    private storage: Storage
  ) {}
  public commentsList;
  public inputComment: string;
  @Input() commentId: string;

  getComments(id) {
    this.commentsService.getComments(this.commentId).then((comments) => {
      this.commentsList = comments;
    });
  }

  setComments() {

    let userId = -1;
    this.storage.get('userId').then((storageUserId) => {
      userId = storageUserId;
    }).then(() => {
      this.setAPIComment(this.commentId,userId,this.inputComment);
    }).then(() => {
      this.commentsList = [];
    }).finally(() => {
      this.getComments(this.commentId);
    });


    
    
  }

  setAPIComment(commentId,userId,inputComment){
    var status = null;
    var description = null;
    //.setComment(film id, user id, yorum)
    this.commentsService
      .setComment(commentId, userId, inputComment)
      .then((response) => {
        status = response["success"];
        description = response["description"];
        //console.log(response);
        this.ToastGet(description,status);
      });
  }
  async ToastGet(message, status) {
  
    status = (status == true)? "success":"danger";
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: status,
      position: 'top',
    });
    toast.present();
  }

  onCommentKey(event: any) {
    this.inputComment = event.target.value;
    //console.log(this.inputComment);
  }

  ngOnInit() {
    this.getComments(this.commentId);
  }
}
