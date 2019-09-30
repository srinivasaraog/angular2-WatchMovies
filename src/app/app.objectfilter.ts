import { Pipe, PipeTransform, Injectable} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
    name: 'search',
    pure: false
})
@Injectable()
export class SearchPipe implements PipeTransform {
    transform(value, name): any {
        if (name !== undefined && name!=='') {
            // filter users, users which match and return true will be kept, false will be filtered out
            return value.filter((movie) => {

                      return (movie.title.toLowerCase().indexOf(name.toLowerCase()) > -1 );

            });
        }

        return value;
    }
}


@Pipe({name: 'safeHtml'})
@Injectable()
export class Safe {
  constructor(private sanitizer:DomSanitizer){}

  transform(value: any, args?: any): any {
    return this.sanitizer.bypassSecurityTrustHtml(value);
    // return this.sanitizer.bypassSecurityTrustStyle(style);
    // return this.sanitizer.bypassSecurityTrustXxx(style); 
  }
}