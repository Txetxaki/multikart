import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../classes/product';
import { WishlistService } from '../../../../services/wishlist.service';
import { ProductsService } from '../../../../services/products.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  
  constructor(public productsService: ProductsService) { }

  ngOnInit() { }

}
