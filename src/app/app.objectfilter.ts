import { Pipe, PipeTransform, Injectable} from '@angular/core';

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
