import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { SellerService } from '../services/seller.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { login, signUp } from '../data-type';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-seller-auth',
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent {

  showLogin = false;
   authError:String='';
  constructor(private sellerService: SellerService) { }

  ngOnInit(): void {
    this.sellerService.reloadSeller();
  }

  signUp(data: signUp): void {
    this.sellerService.userSignUp(data);
  }

  login(data: login): void {
    this.sellerService.userLogin(data); 
  }

  openLogin() {
    this.showLogin = true;
  }
  openSignUp() {
    this.showLogin = false;
  }
}
