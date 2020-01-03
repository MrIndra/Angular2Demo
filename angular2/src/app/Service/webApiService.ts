import { Injectable } from '@angular/core'
import { IChild } from '../Interface/child';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class webApiService {

    constructor(private _http: Http ) {}
    getStudents(): Observable<IChild[]>{
        return this._http.get("https://jsonplaceholder.typicode.com/todos/").map((response: Response) => <IChild[]>response.json())

        //provider is required for services.
}
}