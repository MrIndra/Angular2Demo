import { Component, Input} from "@angular/core";

@Component({

    selector: 'app-emp',
    templateUrl: './app.employee.html',
    styleUrls: ['./app.employee.css']
})

export class AppEmployee {

    @Input()
    getAllData: string;

    propertyBindingExample: string = 'Property Binding Examples';
    isDisabled: boolean = true;

    colSpan: number = 2;

    findAllClass: string = 'pNew fNew';

    required: boolean = false;
    requiredNew: string = 'newMan';

    calMe():void{
        console.log("clicked..")
    }
}