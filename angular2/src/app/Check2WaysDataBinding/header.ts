import { Component, Input } from "@angular/core";
import { ServiceClass } from "../Service/app.service";
import { webApiService } from "../Service/webApiService";
import { IChild } from "../Interface/child";

@Component({
    selector: 'Header',
    template: `<h1>I am Header.............</h1>
                <Footer [change]='db'></Footer>  <input type='text' [(ngModel)]='db'/>
        <table border="1">
        <tr *ngFor="let a  of emp;let i= index">
                    
                    <td> <a [routerLink]="['/cc', i]">{{i}}</a></td>
                    <td>{{a.name}}</td>
                    <td>{{a.age}}</td>
                    <td>{{a.sex}}</td>
                    <td>{{a.dob}}</td>
</tr></table>

                `,
    providers: [ServiceClass, webApiService] //can also regoster at root module..
})
export class Header {

    //getiton(btn: string) {
    //    this.H_name = btn;
    //}

    db: string = "indrajit";

    //getiton(b: string)
    //{
    //    this.db = b
    //};

    emp: IChild[];

    web: any[];

    //this is dependency injection...
    constructor(private aService: ServiceClass, private ObserService: webApiService) {
        //this.emp = this.aService.aServiceList;
    }
    //Service says no repetation of codes...use services instead..
    //Providers are to be registered for using Services.

    //Constructor is not the place for Services calls,,
    //as it is based on network calls..so there may be some delay.
    //therefore ngOnInit is the best place for services..
    //ngOnInit is called after constructor and is most used for component initialisationa and making Service Calls.

    //calss constructors are used to initialise and for bindings all paramters of both child and parent...deendency injection
    //class construcftors are not used to performing any task if there is a chance of delay in task.
    //ngOnInit is called after constructor, so we use ngOnInit to call services...

    ngOnInit() {
        console.log("INIT Header");
        this.emp = this.aService.aServiceList; //copy from constructor and pasted here.

        //trying to call Observable..

        this.ObserService.getData.subscribe(emp => this.web = emp);

        //subcribe has 3 call back methods.
        //OnNect: first - observble emits items.
        //onError: second where an error
        // onCompleted: when observable completes the emission.

        //ngOnInit maytake some time..
        //so if we are going to get the length of that array..
        //use *ngIf='array' - if it is not null then only..
    }

    ngOnChanges() {
        console.log("********************** Change header")
    }


    // USE () for @output binding as its event binding...
}