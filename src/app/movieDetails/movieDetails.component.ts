import { Component,OnInit } from '@angular/core';
import { appService } from '../app.service';
import {SearchPipe}    from '../app.objectfilter';
import { Router } from '@angular/router';






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



 constructor(private _appService: appService,private router:Router){}



 ngOnInit() {
     this.item=this._appService.item;
     this.toggle=this._appService.toggle;
     if(this.item!=='undefined'){

       this.genres=this.item.genres;

    }
    this._appService.cast.subscribe(
         movie=> {!this._appService.toggle?this.router.navigate(['/home']):null}
       );

 }

 }
