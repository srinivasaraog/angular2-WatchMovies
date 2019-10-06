import { Component,Input, Output,EventEmitter,OnInit }  from '@angular/core';
import { appService } from '../app.service';
import { Router } from '@angular/router';


@Component({

  selector:'search',
  templateUrl:'./search.component.html',
  styleUrls: ['./search.component.css']

})
 export class SearchComponent implements OnInit{
   movie:string;

constructor(private _appService: appService,private router:Router){



}
ngOnInit(){

}

search(moviename){
     this._appService.setToggle(false);
     this._appService.setValue(moviename);
     this.router.navigate(['/Search'])
}


 }
