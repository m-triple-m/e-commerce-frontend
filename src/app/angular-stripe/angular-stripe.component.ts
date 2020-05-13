import { Component, OnInit, ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import Stripe from 'stripe';
import { StripeToken, StripeSource } from 'stripe-angular';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-angular-stripe',
  templateUrl: './angular-stripe.component.html',
  styleUrls: ['./angular-stripe.component.css']
})
export class AngularStripeComponent implements OnInit {

  token;
  // constructor() { }

  ngOnInit(): void {
  }

  // extraData = {
  //   "name": 'null',
  //   "address_city": 'null',
  //   "address_line1": 'null',
  //   "address_line2": 'null',
  //   "address_state": 'null',
  //   "address_zip": 'null' 
  // }
 
  // onStripeInvalid( error:Error ){
  //   console.log('Validation Error', error)
  // }
 
  // setStripeToken( token:StripeToken ){
  //   console.log('Stripe token', token)
  // }
 
  // setStripeSource( source:StripeSource ){
  //   console.log('Stripe source', source)
  // }
 
  // onStripeError( error:Error ){
  //   console.error('Stripe error', this.token)
  // }

  @ViewChild('cardInfo') cardInfo: ElementRef;

  card: any;
  cardHandler = this.onChange.bind(this);
  error: string;

  constructor(private cd: ChangeDetectorRef, private userservice: UserService) {}

  ngAfterViewInit() {

    const style = {
      base: {
        lineHeight: '24px',
        fontFamily: 'monospace',
        fontSmoothing: 'antialiased',
        fontSize: '19px',
        '::placeholder': {
          color: 'purple'
        }
      }
    };

    this.card = elements.create('card', {style});
    this.card.mount(this.cardInfo.nativeElement);

    this.card.addEventListener('change', this.cardHandler);
  }

  ngOnDestroy() {
    this.card.removeEventListener('change', this.cardHandler);
    this.card.destroy();
  }

  onChange({ error }) {
    if (error) {
      this.error = error.message;
    } else {
      this.error = null;
    }
    this.cd.detectChanges();
  }

  async onSubmit(form: NgForm) {
    // const { token, error } = await stripe.createToken(this.card);

    const { token, error } = await stripe.createToken(this.card, {
      email: 'triplem656@gmail.com'
    });

    if (error) {
      console.log('Something is wrong:', error);
    } else {
      console.log('Success!', token);
      // this.userservice.getCurrentUser()
      // ...send the token to the your backend to process the charge
    }
  }

}
