import { Component, OnInit } from "@angular/core";
import { NavController, ToastController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { LoginService } from "../services/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  constructor(
    private storage: Storage,
    public navCtrl: NavController,
    public loginService: LoginService,
    public toastController: ToastController
  ) {}
  public inputUserName: string;
  public inputPassword: string;

  onKeyUserName(event: any) {
    this.inputUserName = event.target.value;
    //console.log(this.inputUserName);
  }
  onKeyPassword(event: any) {
    this.inputPassword = event.target.value;
    //console.log(this.inputPassword);
  }

  setUserId() {
    //this.storage.set('userId', 2);
  }

  Login() {
    this.loginService
      .login(this.inputUserName, this.inputPassword)
      .then((response) => {
        if (response["login"] == true) {
          this.storage.set("userId", Number(response["userId"]));
          this.ToastGet("Başarıyla giriş yapıldı","success");
        } else {
          this.ToastGet("Kullanıcı adı veya şifre hatalı","danger");
        }
        //this.ToastGet(description,status);
      }).then(() => {
        this.userControl();
      });
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


  userControl() {
    let userId = -1;
    this.storage
      .get("userId")
      .then((storageUserId) => {
        userId = storageUserId;
      })
      .then(() => {
        if (userId == null || userId == -1) {
          //console.log("Giriş Yapılmadı");
        } else {
          this.gotoHomePage();
        }
      })
      .then(() => {});
  }
  gotoHomePage() {
    this.navCtrl.navigateRoot("home");
  }
  ngOnInit() {
    this.userControl();
  }
}
