import { Component, OnInit } from "@angular/core";
import { webApiService } from '../Service/webApiService';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: `./RouteParam.html`,
})
export class RouteParam implements OnInit {

    serviceCalss: any[];

    constructor(private EService: webApiService) {

    }

    ngOnInit(): void {
        this.EService.getData.subscribe(data => this.serviceCalss = data);
    }//go to code.ts


    //steps to import query strings from URL provided by Angular...

}