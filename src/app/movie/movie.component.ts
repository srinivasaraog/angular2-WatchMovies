import { Component,OnInit,OnDestroy } from '@angular/core';
import { appService } from '../app.service';
import {SearchPipe}    from '../app.objectfilter';

import { Router, ActivatedRoute, Params, RoutesRecognized,ActivationStart } from '@angular/router';
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
pageNumber:any=1;
id:string="";
params:any;

 constructor(private route: ActivatedRoute, private _appService: appService,private router:Router){}
 movieDetails(movie){
   this._appService.setItem(movie);
   this._appService.setToggle(true);

 }
 sortIncMovieList(){
   this._appService.setpageNumber(this.pageNumber);
   this.pageNumber=this._appService.pageNumber;
   this.movieService();
 }
 movieService=()=>{
  let x =this.router.url;
  this.title =x.replace('/',"");
  this._appService.getApp(this.title,this.pageNumber).subscribe((data:any)=>{

    this.movieList = data.results;
  });

 
}
 sortDecMovieList(){

   this._appService.setDecpageNumber(this.pageNumber);
   this.pageNumber=this._appService.pageNumber;
   this.movieService();
 }


 ngOnInit() {
    this.movieService();
    this._appService.cast.subscribe(
       movie=> {this.userSearch = movie,this.toggle=false}
     );
 }

 }
