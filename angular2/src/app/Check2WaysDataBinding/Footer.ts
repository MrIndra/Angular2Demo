import { Component, Input, Output, EventEmitter, SimpleChanges, SimpleChange } from "@angular/core";

@Component({
    selector: 'Footer',
    template: `footer {{change}}`,
})
export class Footer {

       
    //@Output()
    //forr_header: EventEmitter<string> = new EventEmitter<string>();

    ngOnInit() {
        console.log("INIT FOOTER")
        //this.forr_header.emit("MAurya");
    }

    ngOnChanges(changes : SimpleChanges) {
        console.log("********************** Change footer")
        for (let a in changes) {
            let aa = changes[a];
            console.log(aa + "==" + aa.currentValue + "==" + aa.currentValue);
            }
        }
        

    @Input()
    change: string;
}