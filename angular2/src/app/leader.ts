import { Component } from '@angular/core';

@Component({
    selector: 'leader',
    templateUrl: './leader.html',
})

export class Leader {
    //@Output()
    name: string = "indrajit";

    //@Output()
    age: any = 122;

    //@Output()
    sex: string = "male";


    getAll(): string {

        return this.name + "-------" + this.age + this.sex;
    }
}