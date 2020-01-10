"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_service_1 = require("../Service/app.service");
var webApiService_1 = require("../Service/webApiService");
var Header = /** @class */ (function () {
    //this is dependency injection...
    function Header(aService, ObserService) {
        this.aService = aService;
        this.ObserService = ObserService;
        //getiton(btn: string) {
        //    this.H_name = btn;
        //}
        this.db = "indrajit";
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
    Header.prototype.ngOnInit = function () {
        var _this = this;
        console.log("INIT Header");
        this.emp = this.aService.aServiceList; //copy from constructor and pasted here.
        //trying to call Observable..
        this.ObserService.getData.subscribe(function (emp) { return _this.web = emp; });
        //subcribe has 3 call back methods.
        //OnNect: first - observble emits items.
        //onError: second where an error
        // onCompleted: when observable completes the emission.
        //ngOnInit maytake some time..
        //so if we are going to get the length of that array..
        //use *ngIf='array' - if it is not null then only..
    };
    Header.prototype.ngOnChanges = function () {
        console.log("********************** Change header");
    };
    Header = __decorate([
        core_1.Component({
            selector: 'Header',
            template: "<h1>I am Header.............</h1>\n                <Footer [change]='db'></Footer>  <input type='text' [(ngModel)]='db'/>\n        <table border=\"1\">\n        <tr *ngFor=\"let a  of emp;let i= index\">\n                    \n                    <td> <a [routerLink]=\"['/cc', i]\">{{i}}</a></td>\n                    <td>{{a.name}}</td>\n                    <td>{{a.age}}</td>\n                    <td>{{a.sex}}</td>\n                    <td>{{a.dob}}</td>\n</tr></table>\n\n                ",
            providers: [app_service_1.ServiceClass, webApiService_1.webApiService] //can also regoster at root module..
        }),
        __metadata("design:paramtypes", [app_service_1.ServiceClass, webApiService_1.webApiService])
    ], Header);
    return Header;
}());
exports.Header = Header;
//# sourceMappingURL=header.js.map