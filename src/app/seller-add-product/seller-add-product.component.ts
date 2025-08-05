import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-seller-add-product',
  imports: [FormsModule],
  templateUrl: './seller-add-product.component.html',
  styleUrl: './seller-add-product.component.css'
})
export class SellerAddProductComponent {

  addProductMessage:string|undefined;
  constructor(private productService: ProductService) {}
  
  addProductToList(data:product){
    this.productService.addProduct(data).subscribe((response) => {
      console.log("Product added successfully", response);
      if (response) {
        this.addProductMessage = "Product added successfully";
      } 
      setTimeout(() => {
        this.addProductMessage = undefined;
      }, 3000);
    });
  }
}
