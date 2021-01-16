import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { IonicModule } from '@ionic/angular';
import { CommentsModule } from '../comments/comments.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    IonicModule,
    CommentsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
