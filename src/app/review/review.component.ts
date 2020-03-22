import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  reviewForm;
  @Input() reviews;
  @Input() myreview;
  @Input() product_id;
  currentUser;
  newreview = true;
  constructor(private formbuilder: FormBuilder, private productservice: ProductService) { }

  ngOnInit() {
    console.log(this.reviews);
    console.log(this.myreview);
  }

  addReview(formdata){
    if(this.newreview){
      this.productservice.addReview(formdata).subscribe(data => {
        console.log(data);
      })
    }
  }

  initForm(review){
    if(review){
      this.reviewForm = this.formbuilder.group(review);
      return;
    }
    this.reviewForm = this.formbuilder.group({
      user : this.currentUser._id,
      product : this.product_id,
      rating : 2,
      review : ''
    })
  }

}