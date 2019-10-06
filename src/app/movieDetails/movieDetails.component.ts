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
videos:[{
  'name':'',
  'link':''
  }
]  

name:any;

public posterNotAvailable = require("../../posterNotAvailable.jpg");
 constructor(private _appService: appService,private http: Http,private router:Router,private appService:appService){}



 ngOnInit() {
     this.item=this._appService.item; 
     this.toggle = this._appService.toggle
     if(this.item){
      this.videos = this.item.movieLinks.split(';') && this.item.movieLinks.split(';').map(function(link:any,index:any){ 
           let str =link;
           let key = str.indexOf('.com');
           let name=str.slice(8,key);
          return {link:link, name:name}; 
           
        });
      
      console.log("links",this.videos);
     }
      
    this._appService.cast.subscribe(
         movie=> {!this._appService.toggle?this.router.navigate(['/home']):null}
    );
 }

 }
