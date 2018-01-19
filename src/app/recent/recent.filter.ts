import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'format',
    pure: false
})

export class FormatPipe implements PipeTransform {
    transform(value, currentYear): any {

          const movieFilter=(currentYear)=>{
              return  value.filter((movie) => {

                        return  movie.year==currentYear;


              });
            }
            let current=  movieFilter(currentYear);
        
        if (name !== undefined && currentYear!=='') {

            // filter users, users which match and return true will be kept, false will be filtered out
            return  current.length>0 ? current:movieFilter(currentYear-1);


        }

        return value;
    }
}
