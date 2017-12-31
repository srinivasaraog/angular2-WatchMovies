import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'format',
    pure: false
})

export class FormatPipe implements PipeTransform {
    transform(value, currentYear): any {
        if (name !== undefined && currentYear!=='') {
            // filter users, users which match and return true will be kept, false will be filtered out
            return value.filter((movie) => {

                      return  movie.year==currentYear;

            });

        }

        return value;
    }
}
