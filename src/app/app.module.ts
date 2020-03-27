import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from  '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule, MatCardModule, MatExpansionModule, MatAutocompleteModule
          ,MatStepperModule, MatRippleModule } from '@angular/material';
import { MatIconModule, MatDialogModule } from '@angular/material';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManagerUserComponent } from './manager-user/manager-user.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { BrowseProductComponent } from './browse-product/browse-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { WebstatsComponent } from './webstats/webstats.component';
import { RegSellerComponent } from './reg-seller/reg-seller.component';
import { ChoicesComponent } from './choices/choices.component';
import { PaymentComponent } from './payment/payment.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { NgxPayPalModule } from 'ngx-paypal';
import { BookingComponent } from './booking/booking.component';
import { StripePaymentComponent } from './stripe-payment/stripe-payment.component';
import { ItemComponent } from './item/item.component';
import { ItemCountComponent } from './item-count/item-count.component';
import { ReviewComponent } from './review/review.component';
import { AddDescriptionComponent } from './add-description/add-description.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    UserDashboardComponent,
    ViewProductComponent,
    RegisterComponent,
    LoginComponent,
    ManagerUserComponent,
    AdminDashboardComponent,
    UserProfileComponent,
    BrowseProductComponent,
    ProductDetailComponent,
    AddProductComponent,
    CheckoutComponent,
    MyDialogComponent,
    WebstatsComponent,
    RegSellerComponent,
    ChoicesComponent,
    PaymentComponent,
    BookingComponent,
    StripePaymentComponent,
    ItemComponent,
    ItemCountComponent,
    ReviewComponent,
    AddDescriptionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    FontAwesomeModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatStepperModule,
    NgxPayPalModule,
    MatRippleModule,
    NgxStarRatingModule,
    NgbModule,
    SweetAlert2Module.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  // entryComponents: [MyDialogComponent],
})
export class AppModule { }
