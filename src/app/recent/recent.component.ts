import { Component,OnInit } from '@angular/core';
import { appService } from '../app.service';
import {FormatPipe}  from './recent.filter';
import { Router } from '@angular/router';

@Component({
  selector: 'recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css']
})
export class RecentComponent implements OnInit {

recentMovies:string;
recentMovies_error:boolean=false;
currentYear:number;
title:string;
id:string;

 constructor(private _appService:appService,private router:Router){}
 ngOnInit(){
 
<<<<<<< HEAD
  //  this._appService.getApp(this.title,this.id).subscribe(
  //    data => { this.recentMovies = data.payload},
  //    err => { this.recentMovies_error = true }
  //     );
  //   let d=new Date();
  //   this.currentYear = d.getFullYear();
=======
   this._appService.getApp(this.title,this.id).subscribe(
     data => { this.recentMovies = data.payload},
     err => { this.recentMovies_error = true }
      );
    let d=new Date();
    this.currentYear = d.getFullYear();
>>>>>>> 4905c41a78b1d280538580d1578c34be329c50ea

 }
}

