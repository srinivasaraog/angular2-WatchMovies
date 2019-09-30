import { Component,OnInit } from '@angular/core';
import { appService } from '../app.service';
import {Safe}    from '../app.objectfilter';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';






@Component({
  selector: 'MovieDetails',
  templateUrl: './movieDetails.component.html',
  styleUrls: ['./movieDetails.component.css']


})
export class MovieDetailsComponent implements OnInit {

userSearch:string;
movieList_error:boolean=false;
movieList:any;
toggle:boolean;
item:any;
torrents:any;
genres:any;
videos:any;
url:string;
data:any;

public posterNotAvailable = require("../../posterNotAvailable.jpg");
 constructor(private _appService: appService,private http: Http,private router:Router){}



 ngOnInit() {
     this.item=this._appService.item;
     this.toggle=this._appService.toggle;
  

     if(this.item){
    this.videos = this.item.movieLinks.split(';').map(link => 
        link
      );
      console.log("links",this.videos);
      this.url=   `http://movierulz.us-east-2.elasticbeanstalk.com/api/partner/v1/movies/telugu`;
     }
    this.http.get(this.url)
    .map((res: Response) => res.json())
    .subscribe(
      data => { this.data = data.payload ? data.payload.filter((movie)=>{
                                  return  (movie.movieName === this.item.movieName)
                                  }):'';
    },
      err => { this.movieList_error = true }
       );
    
    this._appService.cast.subscribe(
         movie=> {!this._appService.toggle?this.router.navigate(['/home']):null}
       );

 }

 }
