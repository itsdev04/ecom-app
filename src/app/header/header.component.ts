import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  menuType: string = 'default';
  private constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((val:any) => {
      if (val.url) {
        console.log('Navigation event:', val);
        if(localStorage.getItem('seller') && val.url.includes('seller')) {
          console.log('Seller route accessed');
          this.menuType = 'seller';
        } else{
          console.log('Not a seller route, redirecting to home');
          this.menuType = 'default';
        }
      }
    });
  }
}