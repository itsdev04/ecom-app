import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seller-home',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './seller-home.component.html',
  styleUrl: './seller-home.component.css'
})
export class SellerHomeComponent {
  productList: undefined | product[];
  productMessage: string = '';
  icon = faTrash;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productListReload();
  }

  deleteProduct(id: number) {
    console.warn(id);
    this.productService.deleteProduct(id).subscribe((result) => {
      if (result) {
        this.productMessage = 'Product deleted successfully : ' + id;
        this.productListReload();
      }
    })
    setTimeout(() => {
      this.productMessage = '';
    }, 3000);
  }

  productListReload() {
    this.productService.productList().subscribe((data) => {
      console.log(data);
      if (data) {
        this.productList = data;
      }
    });
  }
}
