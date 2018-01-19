import {
  Injectable
} from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Rx';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class appService {

  moviename: string;
  item: any;
  toggle: boolean = false;
  title:string;


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

  private movie = new BehaviorSubject<string>('');
  cast = this.movie.asObservable();
  constructor(private http: Http,private router:Router) {


  }
  getApp(title) {
    this.title=title;
    const movieService = (url) => {
      console.log(this.title)
      return this.http.get(url)
        .map((res: Response) => res.json())
    }
    if (this.title==="home") {
      return movieService("https://api.themoviedb.org/3/discover/movie?api_key=0d24ff1a5c9fe0f2899eb56b51e842c8&with_original_language=en");
    } else if (this.title==="Featured") {
      return movieService("https://api.themoviedb.org/3/movie/popular?api_key=0d24ff1a5c9fe0f2899eb56b51e842c8&language=en");
    } else if (this.title==="HollyWood") {
      return movieService("https://api.themoviedb.org/3/discover/movie?api_key=0d24ff1a5c9fe0f2899eb56b51e842c8&with_original_language=en");
    } else if (this.title==="BollyWood") {
      console.log("BollyWood")
      return movieService("https://api.themoviedb.org/3/discover/movie?api_key=0d24ff1a5c9fe0f2899eb56b51e842c8&with_original_language=hi");
    }else if (this.title==="Tamil") {
      return movieService("https://api.themoviedb.org/3/discover/movie?api_key=0d24ff1a5c9fe0f2899eb56b51e842c8&with_original_language=ta");
    }  else if (this.title==="Telugu") {
      return movieService("https://api.themoviedb.org/3/discover/movie?api_key=0d24ff1a5c9fe0f2899eb56b51e842c8&with_original_language=te");
    } else if (this.title==="Malayalam") {
      return movieService("https://api.themoviedb.org/3/discover/movie?api_key=0d24ff1a5c9fe0f2899eb56b51e842c8&with_original_language=ml");
    } else if (this.title==="other") {
      return movieService("https://api.themoviedb.org/3/discover/movie?api_key=0d24ff1a5c9fe0f2899eb56b51e842c8&with_original_language=en");
    } else {
      return movieService("https://api.themoviedb.org/3/discover/movie?api_key=0d24ff1a5c9fe0f2899eb56b51e842c8&with_original_language=en");
    }

  }


  public setValue(val) {
    this.moviename = val;
    this.movie.next(this.moviename);
  }
  public setItem(item) {
    this.item = item;

  }
  public getItem() {
    return this.item;
  }
  public setToggle(toggle) {
    this.toggle = toggle;
  }
  public getToggle() {
    return this.toggle;
  }


}
