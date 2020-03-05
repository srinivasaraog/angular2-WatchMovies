import { Component,OnInit } from '@angular/core';
import { appService } from '../app.service';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';






@Component({
  selector: 'MovieDetails',
  templateUrl: './movieDetails.component.html',
  styleUrls: ['./movieDetails.component.css']


})
export class MovieDetailsComponent implements OnInit {

toggle:boolean;
item:any;
torrents:any;
genres:any;
videos:any;
url:string; 
movieList_error:boolean;
name:any;

 constructor(private _appService: appService,private http: Http,private router:Router,private appService:appService){}



 ngOnInit() {
  this.item=this._appService.item;
  this.toggle=this._appService.toggle;


  if(this.item){
   this.url=   `http://api.themoviedb.org/3/movie/${this.item.id}/videos?api_key=0d24ff1a5c9fe0f2899eb56b51e842c8`;
  }
 this.http.get(this.url)
 .map((res: Response) => res.json())
 .subscribe(
   data => { this.videos = data.results },
   err => { this.movieList_error = true }
    );
console.log(this.videos);
 this._appService.cast.subscribe(
      movie=> {!this._appService.toggle?this.router.navigate(['/home']):null}
    );
 }

 }