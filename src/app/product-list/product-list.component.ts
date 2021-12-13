import { Component, OnInit } from '@angular/core';
import { Product } from 'app/product';
import { ProductService } from 'app/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 products: product[]
  constructor(private _ProductService: ProductService) { }

  ngOnInit() {
   return this._ProductService.getProducts().subscribe(Response => this.products = Response)
  }

}
