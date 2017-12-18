import {Injectable} from '@angular/core'
import { IProduct } from './product';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ProductService{
    private _productUrl= '../app/products/myjason.json';

    constructor(private _http: HttpClient) { }

    private handleError(err: HttpErrorResponse) {
    }

    getProducts(): Observable<IProduct[]>{
    return (this._http.get<IProduct[]>(this._productUrl).do(data => console.log('All: '+ JSON.stringify(data))));
    }

}