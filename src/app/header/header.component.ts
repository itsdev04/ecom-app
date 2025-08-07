import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuType: string = 'default';
  sellerName:string="";
  searchResult: undefined | product[];

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit(): void {
    this.router.events.subscribe((val:any) => {
      if(val.url){
        console.warn(val.url);
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          console.warn('seller logged in');
          this.menuType = 'seller';
          if(localStorage.getItem('sellerName')){
            let sellerStore = localStorage.getItem('sellerName');
            let sellerData = sellerStore && JSON.parse(sellerStore);
            this.sellerName = sellerData.name;
          }
        }else{
          console.warn('user logged in');
          this.menuType = 'default';
        }
      }
    });
  }
  userLogout(){
    localStorage.removeItem('user');
    this.router.navigate(['/user-auth'])
    //this.product.cartData.emit([])
  }

  logout(){
    localStorage.removeItem('seller');
    this.router.navigate(['/'])
  }

  searchProduct(query:KeyboardEvent){
    if(query){
      const element = query.target as HTMLInputElement;
      this.productService.searchProduct(element.value).subscribe((result)=>{
       
        if(result.length>5){
          result.length=length
        }
        this.searchResult=result;
      })
    }
  }

   hideSearch(){
    this.searchResult=undefined
  }

  redirectToDetails(id:number){
    this.router.navigate(['/details/'+id])
  }
  
  submitSearch(val:string){
    console.warn(val)
  this.router.navigate([`search/${val}`]);
  }
}