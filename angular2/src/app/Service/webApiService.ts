import { Injectable } from '@angular/core'
import { IChild } from '../Interface/child';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class webApiService {

    //steps involved
    //import http module in AppModule which is the root module.
    // import http service in this current component
    //inject the http service in this class..
           //provider is required for services.

        //An observable emits data items for subcribers or observers..
        //many observers or subcribers can call the observale...
        //many components can call the web services...
        //so this component is OBSERVABLE>.

    //An observer can call the observable with a call back function...that call back function will 
    //have the data. returned by Obervable..
    // allow cors.
    

    //HANDLE ERRORS>..


    constructor(private _http: Http) { // this class has dependency i.e. HTTP that is why we should have @Injectable decoration.

    }

    getData: Observable<any[]> = this._http.get("https://jsonplaceholder.typicode.com/todos/").map((res: Response) => <any[]>res.json());


    getDataWithCode(code:string): Observable<any> {
    return this._http.get("https://jsonplaceholder.typicode.com/todos/" + code).map((res: Response) => <any>res.json());
};

    getStudents(): Observable<IChild[]>{
        return this._http.get("https://jsonplaceholder.typicode.com/todos/").map((response: Response) => <IChild[]>response.json())
            .catch(this.handleError);
    }

    handleError(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}