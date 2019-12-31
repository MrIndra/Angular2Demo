import { PipeTransform, Pipe } from "@angular/core";


@Pipe({
    name: 'stupipe'

})
export class StudentPipe implements PipeTransform {
    transform(value: string, sex:string) : string{

        if (sex.toLowerCase() == 'm') {
            return "Mr. " + value;
        }
        else {
            return "Miss. " + value;
        }
           
    }

}