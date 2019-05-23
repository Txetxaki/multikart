import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/classes/product';
import { ProductsService } from '../../shared/services/products.service';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  public products: Product[] = [];
  
  constructor(private productsService: ProductsService, private apiService: ApiService) {   }

  ngOnInit() {
    this.productsService.getProducts().subscribe(product => this.products = product);
  }

}
