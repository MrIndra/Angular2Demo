import { Component, Output } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
})
export class AppComponent  {

    //@Output()
    name: string = "indrajit";

    //@Output()
    age: any = 122;

    //@Output()
    sex: string = "male";


    getAll(): string {

        return this.name +"-------"+this.age + this.sex;
    }
}