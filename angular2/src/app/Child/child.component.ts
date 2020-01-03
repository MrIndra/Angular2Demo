import { Component, OnInit, OnChanges } from '@angular/core'
import { ServiceClass } from '../Service/app.service';
import { IChild } from '../Interface/child';

@Component({
    selector: 'child',
    templateUrl: './child.component.html',
    providers: [ServiceClass]
})

export class Child implements OnInit {


    arrayOfStudents: IChild[];

    constructor(private abcde: ServiceClass) { }

    ngOnInit(): void {
        console.log("init");
        this.arrayOfStudents = this.abcde.getStudents();
    }

    ngOnChanges(): void {
        console.log("changes");
    }

    getAll(): number {
        return this.arrayOfStudents.length;
    }


    getMale(): number {
        return this.arrayOfStudents.filter(x => x.sex == 'M').length;
    }


    getFemale(): number {
        return this.arrayOfStudents.filter(x => x.sex == 'F').length;
    }

    onChange: string = "all";


    selectedButton(btn: string) {
        this.onChange = btn;
    }
 }
