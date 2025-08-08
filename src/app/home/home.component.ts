import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [NgbCarouselModule, CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  popularProducts: undefined | product[];
  trendingProducts: undefined | product[];
  
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.popularProducts().subscribe((data) => {
      this.popularProducts = data;
    });
    this.productService.trendingProducts().subscribe((data) => {
      this.trendingProducts = data;
    });
  }
}
