import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public homeService:HomeService) { 
    this.getMovieList();
  }
  public movieList;
  public screen = "homeList";
  public commentsSelectedId;
  getMovieList(){
    this.homeService.showList().then(movies => {
      this.movieList = movies;
    });
  }
  showComments(id){
    this.screen = "comments";
    this.commentsSelectedId = id;
  }
  hiddenComments(){
    this.screen = "homeList"
    this.getMovieList();
  }
  ngOnInit() {
   
  }

}
