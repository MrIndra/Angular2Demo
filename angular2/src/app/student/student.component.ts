import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'student',
    templateUrl : './student.component.html'

})
export class Student {

    isTrue: boolean = false;
    tableAction(): void {
        this.isTrue = !this.isTrue;
       
    }

    name: string = "tom";

    arrayOfStudents: any[];

    onChange: string = 'all';

    constructor() {
        this.arrayOfStudents = [
            { name: 'indra', age: 26, sex: 'M', dob: '5/6/1992' },
            { name: 'indrajit', age: 29, sex: 'M', dob: '1/12/1992' },
            { name: 'indramaurya', age: 27, sex: 'F', dob: '2/14/1992' },
        ];
    }

    getAllEmployess(): void {
        this.arrayOfStudents = [
            { name: 'indra', age: 26, sex: 'M', dob: '5/6/1992' },
            { name: 'indrajit', age: 29, sex: 'M', dob: '1/12/1992' },
            { name: 'indramaurya', age: 27, sex: 'F', dob: '2/14/1992' },
            { name: 'indramauryadddddd', age: 27, sex: 'M', dob: '12/20/1992' },
        ];
    }

    trackByCode(index: number, employee: any): string {
        return employee.name;
    }

    getStudentCount(): number {
        return this.arrayOfStudents.length;
    }

    getMaleCount(): number {
        return this.arrayOfStudents.filter(x=> x.sex === "M").length;
    }

    getFemaleCount(): number {
        return this.arrayOfStudents.filter(x => x.sex === "F").length;
    } 

} 