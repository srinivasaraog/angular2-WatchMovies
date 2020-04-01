import { Component,OnInit, OnDestroy } from '@angular/core';
import { appService } from '../app.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';






@Component({
  selector: 'MovieDetails',
  templateUrl: './movieDetails.component.html',
  styleUrls: ['./movieDetails.component.css']


})
export class MovieDetailsComponent implements OnInit,OnDestroy {

toggle:boolean;
item:any;
url:string;
videos:any;

name:any;
 constructor(private _appService: appService,private http: HttpClient,private router:Router,private appService:appService){}



 ngOnInit() {
  this.item=this._appService.item;
  this.toggle=this._appService.toggle;


  if(this.item){
   this.url=   `http://api.themoviedb.org/3/movie/${this.item.id}/videos?api_key=0d24ff1a5c9fe0f2899eb56b51e842c8`;
  }
  this.http.get(this.url)
  .pipe().subscribe((data:any)=>{
    this.videos = data.results 
    
  });
  console.log(this.videos);
  this._appService.cast.subscribe(
        movie=> {!this._appService.toggle?this.router.navigate(['/home']):null}
      );
  }

 ngOnDestroy(){

  this._appService.setToggle(false);

 }

 }
