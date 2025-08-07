import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-search',
  imports: [RouterModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
searchResult:undefined|product[]
  constructor(private activeRoute: ActivatedRoute, private product:ProductService) { }

  ngOnInit(): void {
    let query = this.activeRoute.snapshot.paramMap.get('query');
    console.warn(query);
    query && this.product.searchProduct(query).subscribe((result)=>{
      this.searchResult=result;
      
    })
    

  }
}
