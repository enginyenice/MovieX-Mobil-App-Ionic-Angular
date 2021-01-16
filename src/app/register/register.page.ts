import { Component, OnInit } from "@angular/core";
import { Storage } from "@ionic/storage";
import { NavController, ToastController } from "@ionic/angular";
import { RegisterService } from "../services/register.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"],
})
export class RegisterPage implements OnInit {
  constructor(
    private storage: Storage,
    public navCtrl: NavController,
    public registerService: RegisterService,
    public toastController: ToastController
  ) {
    this.userControl();
  }
  public inputUserName: string;
  public inputPassword: string;
  public inputPasswordRepeat: string;

  onKeyUserName(event: any) {
    this.inputUserName = event.target.value;
    //console.log(this.inputUserName);
  }
  onKeyPassword(event: any) {
    this.inputPassword = event.target.value;
    //console.log(this.inputPassword);
  }
  onKeyPasswordRepeat(event: any) {
    this.inputPasswordRepeat = event.target.value;
    //console.log(this.inputPassword);
  }
  Register() {
    if (this.passwordControl()) {
      this.registerService
        .register(this.inputUserName, this.inputPassword)
        .then((response) => {
          //console.log(response);
          if (response["status"] == "success") {
            this.storage.set("userId", Number(response["userId"]));
            this.ToastGet("Kayıt başarılı", "success");
          } else {

            this.ToastGet(response["description"], "danger");
          }
        })
        .then(() => {
          this.userControl();
        });
    } else {
      this.ToastGet("Şifre ile şifre tekrarı eşleşmiyor", "danger");
    }
  }

  passwordControl() {
    return this.inputPassword === this.inputPasswordRepeat ? true : false;
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

  userControl() {
    let userId = -1;
    this.storage
      .get("userId")
      .then((storageUserId) => {
        userId = storageUserId;
      })
      .then(() => {
        if (userId == null || userId == -1) {
        } else {
          this.gotoHomePage();
        }
      })
      .then(() => {});
  }
  gotoHomePage() {
    this.navCtrl.navigateRoot("home");
  }
  ngOnInit() {}
}
