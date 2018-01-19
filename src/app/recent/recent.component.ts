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

 constructor(private _appService:appService,private router:Router){}
 ngOnInit(){
   this.title=this.router.url.replace('/',"")
   this._appService.getApp(this.title).subscribe(
     data => { this.recentMovies = data.results},
     err => { this.recentMovies_error = true }
      );
    let d=new Date();
    this.currentYear = d.getFullYear();

 }



 }
