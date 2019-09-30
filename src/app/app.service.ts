import {
  Injectable
} from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router, ActivatedRoute, Params, RoutesRecognized  } from '@angular/router';

@Injectable()
export class appService {

  moviename: string;
  item: any;
  toggle: boolean = false;
  title: string;
  url: string;
  id:string;
  pageNumber:any=1;


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
  constructor(private route: ActivatedRoute,private http: Http, private router: Router) {


  }
  ngOnInit(){

  }
  getApp(title,id) {
    this.title = title;


    const movieService = (url) => {
      console.log(this.title)
      return this.http.get(url)
        .map((res: Response) => res.json())
    }
    if(this.title){
    if (this.title.indexOf("home")===0) {

      const url=`http://movierulz.us-east-2.elasticbeanstalk.com/api/partner/v1/movies/telugu`;
      return movieService(url);
    } else if (this.title.indexOf("Featured")=== 0) {
        const url=`http://movierulz.us-east-2.elasticbeanstalk.com/api/partner/v1/movies/telugu`;
      return movieService(url);
    } else if (this.title.indexOf("HollyWood")=== 0) {
        const url=`http://movierulz.us-east-2.elasticbeanstalk.com/api/partner/v1/movies/HollyWood&`;
      return movieService(url);
    } else if (this.title.indexOf("BollyWood")=== 0) {
        const url=`http://movierulz.us-east-2.elasticbeanstalk.com/api/partner/v1/movies/BollyWood`;

      return movieService(url);
    } else if (this.title.indexOf("Tamil")=== 0 ) {
        const url=`http://movierulz.us-east-2.elasticbeanstalk.com/api/partner/v1/movies/Tamil`;
      return movieService(url);
    } else if (this.title.indexOf("Telugu")=== 0) {
        const url=`http://movierulz.us-east-2.elasticbeanstalk.com/api/partner/v1/movies/Telugu`;
      return movieService(url);
    } else if (this.title.indexOf("Malayalam")=== 0) {
        const url=`http://movierulz.us-east-2.elasticbeanstalk.com/api/partner/v1/movies/Malayalam`;
      return movieService(url);
    } else if (this.title.indexOf("other")=== 0 ) {
        const url=`http://movierulz.us-east-2.elasticbeanstalk.com/api/partner/v1/movies/other`;
      return movieService(url);
    } else if (this.title.indexOf("Geners")=== 0 ) {
      //  const url=  `https://api.themoviedb.org/3/discover/movie?api_key=0d24ff1a5c9fe0f2899eb56b51e842c8&with_original_language=en&page=${id}`;
        const url=`http://movierulz.us-east-2.elasticbeanstalk.com/api/partner/v1/movies/Geners`;
      return movieService(url);
    } else {
      //  const url=  `https://api.themoviedb.org/3/discover/movie?api_key=0d24ff1a5c9fe0f2899eb56b51e842c8&with_original_language=en&page=${id}`;
       const url=`http://movierulz.us-east-2.elasticbeanstalk.com/api/partner/v1/movies/telugu`;
      return movieService(url);
    }
  }else{
  //  const url=  `https://api.themoviedb.org/3/discover/movie?api_key=0d24ff1a5c9fe0f2899eb56b51e842c8&with_original_language=en&page=${id}`;
    const url=`http://movierulz.us-east-2.elasticbeanstalk.com/api/partner/v1/movies/telugu`;
  return movieService(url);
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
  public setpageNumber(pageNumber) {
    this.pageNumber =parseInt(pageNumber,10)+1 ;
  }
  public getPageNumber() {
    return this.pageNumber;
  }
  public setDecpageNumber(pageNumber) {
    this.pageNumber =parseInt(pageNumber,10)-1 ;
  }
  public getDecPageNumber() {
    return this.pageNumber;
  }

}
