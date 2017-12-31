import { Component,OnInit } from '@angular/core';
import { appService } from '../app.service';
import {FormatPipe}  from './recent.filter';






@Component({
  selector: 'recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css']



})
export class RecentComponent implements OnInit {

recentMovies:string;
recentMovies_error:boolean=false;
currentYear:number;

 constructor(private _appService:appService){}
 ngOnInit(){
   this._appService.getApp().subscribe(
     data => { this.recentMovies = data.data.movies},
     err => { this.recentMovies_error = true }
      );
    let d=new Date();
    this.currentYear = d.getFullYear();

 }



 }
