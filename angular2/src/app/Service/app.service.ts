import { Injectable } from '@angular/core'
import { IChild } from '../Interface/child';

@Injectable()
export class ServiceClass {

    getStudents(): IChild[]{
        return [
            { name: 'indra', age: 26, sex: 'M', dob: '5/6/1992' },
            { name: 'indrajit', age: 29, sex: 'M', dob: '1/12/1992' },
            { name: 'indramaurya', age: 27, sex: 'F', dob: '2/14/1992' },
            { name: 'indramauryadddddd', age: 27, sex: 'M', dob: '12/20/1992' }]

        //provider is required for services.
}
}