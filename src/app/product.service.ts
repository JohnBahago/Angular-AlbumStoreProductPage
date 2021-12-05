import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AlbumStorePage } from '../../e2e/app.po';


  @Injectable()
  export class{
    private _albumUrl: string = '../assets/album.json'
  }
export class ProductService {

  constructor(private _http: Http) { 

  }

}
