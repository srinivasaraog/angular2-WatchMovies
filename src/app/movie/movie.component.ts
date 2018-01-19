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
toggle:boolean;
item:any;
sources:string;
genres:string;
title:string;

 constructor(private _appService: appService,private router:Router){}
 changeView(movie){
   this._appService.setItem(movie);
   this._appService.setToggle(true);
 }

 ngOnInit() {
   this.title=this.router.url.replace('/',"")
   this._appService.getApp(this.title).subscribe(
     data => { this.movieList = data.results},
     err => { this.movieList_error = true }
      );

   this._appService.cast.subscribe(
       movie=> {this.userSearch = movie,this.toggle=false}
     );

 }

 }
