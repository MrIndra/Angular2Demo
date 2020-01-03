export interface IChild {

    name: string;
    sex: string; 
    age: number;
    dob: string;
    optionalProperty?: string;

    functionName?(optionalProperty:string): void;
}

//short hand typescript.....when implements parent..

export class newClass implements IChild {

    functionName(optional:string): void {
        console.log(optional);
    }

    constructor(public name: string, public sex: string, public age: number, public dob: string) { }

}