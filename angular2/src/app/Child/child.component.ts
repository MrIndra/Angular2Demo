import { Component, OnInit, OnChanges } from '@angular/core'
import { webApiService } from '../Service/webApiService';
import { IChild } from '../Interface/child';

@Component({
    selector: 'child',
    templateUrl: './child.component.html',
    providers: [webApiService]
})

export class Child implements OnInit {


    arrayOfStudents: IChild[];

    constructor(private abcde: webApiService) { }

    //for normal calls.
    //ngOnInit(): void {
    //    console.log("init");
    //    this.arrayOfStudents = this.abcde.getStudents();
    //}

    //for web api

    ngOnInit(): void {
        console.log("init");
        this.abcde.getStudents().subscribe(data => this.arrayOfStudents = data);
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
