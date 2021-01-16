import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Storage } from "@ionic/storage";
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {

  constructor( public toastController: ToastController,private storage: Storage,public navCtrl: NavController,public accountService: AccountService) { }
  public username = "Kullanıcı adı getiriliyor....";
  logout(){
    this.storage.clear();
    this.navCtrl.navigateRoot("");
  }
  getUsername() {
    let userId;
    this.storage.get('userId').then((storageUserId) => {
      userId = storageUserId;
    }).then(() => {
        this.getServiceUsername(userId);
    });
  }
  getServiceUsername(userId){
      this.accountService.getUserName(userId).then((userdata) => {
        if(userdata["status"] == 200) {
          this.username = userdata["username"];
        } else {
          this.logout();
        }
        });
  }

  public inputPassword: string;
  public inputPasswordRepeat: string;
  onKeyPassword(event: any) {
    this.inputPassword = event.target.value;
    //console.log(this.inputPassword);
  }
  onKeyPasswordRepeat(event: any) {
    this.inputPasswordRepeat = event.target.value;
    //console.log(this.inputPassword);
  }

  passwordControl() {
    return this.inputPassword === this.inputPasswordRepeat ? true : false;
  }


  EditPassword() {
    let userId;
    this.storage.get('userId').then((storageUserId) => {
      userId = storageUserId;
    }).then(() => {
      if (this.passwordControl()) {
       this.EditPasswordService(userId,this.inputPassword)
      }
      else {
        this.ToastGet("Şifre ile şifre tekrarı eşleşmiyor", "danger");
      }

    });
  }



  EditPasswordService(userId,password) {
      console.log(userId,password);
      this.accountService
        .editUser(userId,password)
        .then((response) => {
          //console.log(response);
          if (response["status"] == "success") {
            this.ToastGet("Kayıt başarılı", "success");
          } else {

            this.ToastGet(response["description"], "danger");
            if(response["code"] = 1){
              this.logout();
            }
          }
        });
 
  }

  async ToastGet(message, status) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: status,
      position: "top",
    });
    toast.present();
  }
  
  ngOnInit() {
    this.getUsername();

  }

}
