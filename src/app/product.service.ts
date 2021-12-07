import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AlbumStorePage } from '../../e2e/app.po';


  @Injectable()
  
export class ProductService {

  private _albumUrl = '../assets/album.json'
  constructor(private _http: Http) { 

  }

}




