import { Component } from "@angular/core";
import { webApiService } from '../Service/webApiService';
import { ActivatedRoute } from '@angular/router';

@Component({
    template: ``,
})
export class Di {
    serviceCalss: any[];
    message: string;
    constructor(private EService: webApiService, private _activatedRoute: ActivatedRoute) {
        //providers are usud by Angular Injector for creating and injecting Dependency Injection...
        //Dependency provides singleton...single instance of a service
    }

    ngOnInit(): void {
        console.log("hitted");
        let codeParam: string = this._activatedRoute.snapshot.params['code'];
        this.EService.getDataWithCode(codeParam).subscribe(data => {
            if (data == null) {
                this.message = "no data";
            }
            else { this.serviceCalss = data }
        });
    }

    //dependency injection: when a class depends on an external factor for the instatiation of its dependencies then
    //we call it DI.
    //if we use new. then the class is instantiated the dependent class ans therefore is locally availbale.
    //here angular Injector instantiate the class anfd inject it to components and is globally available..
    //once created and injected in one componnet, it will use for all components...

}