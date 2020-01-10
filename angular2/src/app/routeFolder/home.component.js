"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//no selector for router components
// a selector is used when we embed one component inside another
//if we route to other componennt we dont use selector, rather we use route...
var Home = /** @class */ (function () {
    function Home() {
    }
    Home = __decorate([
        core_1.Component({
            template: 'hello this is route...',
        })
    ], Home);
    return Home;
}());
exports.Home = Home;
//how to use RUOTE...
//set <base href="/src/"> in index.html
// import { RouterModule, Routes } from "@angular/router"; in root module.
//define applicaiton routes....in root module.
//define const route array for routing..
//in web config, rewrite rule...
//we use HTML5 style route we use
//  <system.webServer>
//<rewrite>
//    <rules>
//    <rule name="Angular Routes" stopProcessing = "true" >
//        <match url=".*" />
//            <conditions logicalGrouping="MatchAll" >
//                <add input="{REQUEST_FILENAME}" matchType = "IsFile" negate = "true" />
//                    <add input="{REQUEST_FILENAME}" matchType = "IsDirectory" negate = "true" />
//                        </conditions>
//                        < action type = "Rewrite" url = "/src/" />
//                            </rule>
//                            < /rules>
//                            < /rewrite>
//                            < /system.webServer>
//if we want to use hash style route do this
// RouterModule.forRoot(appRoutes, { useHash: true })
//# sourceMappingURL=home.component.js.map