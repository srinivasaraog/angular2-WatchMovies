import { Component,OnInit } from '@angular/core';
import { appService } from '../app.service';
import {SearchPipe}    from '../app.objectfilter';
import { Router } from '@angular/router';
import {MovieDetailsComponent} from '../movieDetails/movieDetails.component';






@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']


})
export class MovieComponent implements OnInit {

userSearch:string;
movieList_error:boolean=false;
movieList:any;

item:any;
sources:string;
genres:string;

 constructor(private _appService: appService){}
 changeView(movie){
   this._appService.setItem(movie);
   this._appService.setToggle(true);
 }

 ngOnInit() {
   this._appService.getApp().subscribe(
     data => { this.movieList = data.data.movies},
     err => { this.movieList_error = true }
      );

  this._appService.cast.subscribe(
       movie=> {this.userSearch = movie,this.toggle=false}
     );



 }

 }
