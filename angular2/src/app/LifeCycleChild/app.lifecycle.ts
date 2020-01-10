import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core'

@Component({
    selector: 'lifecycle',
    template: `{{valueOfName}}`
})

export class Lifecycle implements OnChanges, OnInit {

    @Input()
    valueOfName: string;

    //here you can see the lifecycle hooks.....the DOM Properties updating on each change...
    ngOnChanges(changes: SimpleChanges): void {
        for (let propertyName in changes) {
            let change = changes[propertyName];
            let current = JSON.stringify(change.currentValue);
            let previous = JSON.stringify(change.previousValue);
            console.log(propertyName + '=current=' + current + '=previous=' + previous)
        }
    }

    ngOnInit(): void {
        console.log("init of lifecycle");
    }
}