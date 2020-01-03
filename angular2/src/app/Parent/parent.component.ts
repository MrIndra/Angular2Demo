import {Component,Input,Output,EventEmitter } from '@angular/core'
import { EventEmitter } from 'events';

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

    @Output()
    Diplomat: EventEmitter<string> = new EventEmitter<string>();

    buttonSelected() {
        console.log(this.onChange);
        this.Diplomat.emit(this.onChange);
    }


}