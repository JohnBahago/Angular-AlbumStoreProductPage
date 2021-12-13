import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';



@Injectable()
export class ProductService {

  constructor(private _http: Http) { }
  getAlbum(id: Number):  Observable<Album> {
    
    return  this._http.get(this._albumUrl).map((response)=> <Album> response.json());}
    getProducts(): Observable <Product[]> {
      return this._http.get(this._productsUrl).map(Response => <Product[]>Response.json());
    }
}
