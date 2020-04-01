import { Component,OnInit } from '@angular/core';
import {MovieComponent} from '../movie/movie.component'
import { appService } from '../app.service';






@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']


})
export class MainComponent  implements OnInit{
  constructor(private _appService:appService){

  }
  

ngOnInit(){
  this._appService.setToggle(false);
}

 }