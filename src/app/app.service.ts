import {
   Injectable
} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

import {Observable} from 'rxjs/Rx';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class appService {

  moviename:string;
  item:any;
  toggle:boolean=false;


   /* About behaviour vs regular subject with observable
   BehaviorSubject is a type of subject, a subject is a special type of observable so you can subscribe to messages like any other observable.
   The unique features of BehaviorSubject are:

   It needs an initial value as it must always return a value on subscription even if it hasn't received a next()
   Upon subscription it returns the last value of the subject. A regular observable only triggers when it receives an onnext
   at any point you can retrieve the last value of the subject in a non-observable code using the getValue() method.
   Unique features of a subject compared to an observable are:

   It is an observer in addition to being an observable so you can also send values to a subject in addition to subscribing to it.
   In addition you can get an observable from behavior subject using the asobservable() method on BehaviorSubject.

   Observable is a Generic, and BehaviorSubject is technically a sub-type of Observable because BehaviorSubject is an observable with specific qualities.

   Example with BehaviorSubject:



   */

  private movie=new BehaviorSubject<string>('');
  cast=this.movie.asObservable();
  constructor(private http:Http) {


    }
  getApp() {
        return  this.http.get('https://yts.am/api/v2/list_movies.json')
                         .map((res:Response) => res.json())
         }


  public  setValue(val) {
        this.moviename = val;
        this.movie.next(this.moviename);
    }
  public   setItem(item){
       this.item=item;

   }
   public getItem(){
      return this.item;
   }
   public setToggle(toggle){
     this.toggle=toggle;
   }
   public getToggle(){
       return this.toggle;
   }


}
