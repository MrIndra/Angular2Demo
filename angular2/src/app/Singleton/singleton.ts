import { Component } from "@angular/core";
import { ServiceClass } from '../Service/app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    template: `<h1 [style.background]='color'>hello</h1>`,
})
export class Singleton {

    serviceCalss: any[];
    private eservice: ServiceClass;

    constructor(private EService: ServiceClass) {
    }

    get color(): string {
        console.log("dfdfdfdf");
        return this.eservice.color;
    }

    set color(value: string) {
        this.eservice.color = value;
    }

}