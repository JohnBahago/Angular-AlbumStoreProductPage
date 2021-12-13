import { getLocaleNumberSymbol } from '@angular/common';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AlbumStorePage } from '../../e2e/app.po';

import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';
import { Album } from './album';
  @Injectable()
  
export class ProductService {

  private _albumUrl = '../assets/album.json';
  constructor(private _http: Http) { }
  getAlbum(id: Number):  Observable<Album> {
    
    return  this._http.get(this._albumUrl).map((response)=> <Album> response.json());
  }


}




function Observables<T>() {
  throw new Error('Function not implemented.');
}

