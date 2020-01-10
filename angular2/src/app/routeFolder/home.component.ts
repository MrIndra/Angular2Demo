import { Component } from "@angular/core";
//no selector for router components
// a selector is used when we embed one component inside another
//if we route to other componennt we dont use selector, rather we use route...


@Component({
    template: 'hello this is route...',
})
export class Home {

}

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