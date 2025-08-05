import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seller-home',
  imports: [CommonModule],
  templateUrl: './seller-home.component.html',
  styleUrl: './seller-home.component.css'
})
export class SellerHomeComponent {
  productList: undefined | product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.productList().subscribe((data) => {
      console.log(data);
      this.productList = data;
    });
  }
}
