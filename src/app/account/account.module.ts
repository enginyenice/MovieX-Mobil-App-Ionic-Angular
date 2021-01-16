import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [AccountComponent]
})
export class AccountModule { }
