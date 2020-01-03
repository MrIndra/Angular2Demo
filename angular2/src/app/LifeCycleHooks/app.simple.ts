import {Component} from '@angular/core'

@Component({
    selector: 'simple',
    template: `<input [(ngModel)]='name'/> you entered {{name}} 
                    <lifecycle [valueOfName]='name'></lifecycle>`
})

export class Simple{

    name: string = "indrjait";

}