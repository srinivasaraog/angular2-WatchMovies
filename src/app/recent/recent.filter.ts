import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'format',
    pure: false
})

export class FormatPipe implements PipeTransform {
    transform(value, currentYear): any {

          const movieFilter=(currentYear)=>{
              return  value.filter((movie) => {

                        return  movie.release_date.substring(0,4)==currentYear;


              });
            }
            let current=  movieFilter(currentYear);

        if (name !== undefined && currentYear!=='') {

            // filter users, users which match and return true will be kept, false will be filtered out
            return movieFilter(currentYear-1);


        }

        return value;
    }
}
