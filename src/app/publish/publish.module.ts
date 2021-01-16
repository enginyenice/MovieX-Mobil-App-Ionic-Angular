import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublishComponent } from './publish.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [PublishComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    PublishComponent
  ]
})
export class PublishModule { }
