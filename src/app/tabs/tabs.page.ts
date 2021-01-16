import { Component } from "@angular/core";
import { Storage } from "@ionic/storage";
import { NavController } from "@ionic/angular";
@Component({
  selector: "app-tabs",
  templateUrl: "tabs.page.html",
  styleUrls: ["tabs.page.scss"],
})
export class TabsPage {
  constructor(private storage: Storage, public navCtrl: NavController) {
    this.userControl();
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
          this.gotoLoginPage();
        }
      })
      .then(() => {});
  }
  gotoLoginPage() {
    this.navCtrl.navigateForward("");
  }
  ngOnInit() {
    //this.userControl();
  }
}
