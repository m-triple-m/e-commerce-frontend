import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  product;
  logged_user;
  constructor(private activatedRoute: ActivatedRoute, private productservice: ProductService) { }

  ngOnInit() {
    
  }

  ngAfterContentInit(){
    this.logged_user = JSON.parse(sessionStorage.getItem('user'));
    console.log(this.logged_user);
    this.productservice.getProductById(this.activatedRoute.snapshot.paramMap.get('id')).subscribe((product_data) => {
      this.product = product_data;
      console.log(this.product);
    })
  }

}
