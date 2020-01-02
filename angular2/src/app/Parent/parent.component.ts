import {Component,Input } from '@angular/core'

@Component({
    selector: 'parent-app',
    templateUrl: './parent.component.html',
})

export class Parent {

    @Input()
    all: number; 

    @Input()
    male: number;

    @Input()
    female: number;

    onChange: string;
}