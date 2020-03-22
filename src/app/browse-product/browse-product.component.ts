import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse-product',
  templateUrl: './browse-product.component.html',
  styleUrls: ['./browse-product.component.css']
})
export class BrowseProductComponent implements OnInit {

  products;
  search=faSearch;
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(){
    this.productService.getAllProduct().subscribe(products => {
      this.products = products;
    });
  }

  searchByName(pName){
    console.log(pName)
    if(pName){
      this.productService.getProductByName(pName).subscribe(products => {
        this.products = products;
        console.log(products);
      })
    }
  }

  getImg(img){
    return `http://localhost:3000/products/${img}`;
  }

  selectProduct(id){
    this.router.navigate(['/detail', id]);
  }

}
