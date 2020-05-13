import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewProductComponent } from './view-product/view-product.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BrowseProductComponent } from './browse-product/browse-product.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AuthGuard } from './guard/auth.guard';
import { RegSellerComponent } from './reg-seller/reg-seller.component';
import { ChoicesComponent } from './choices/choices.component';
import { PaymentComponent } from './payment/payment.component';
import { BookingComponent } from './booking/booking.component';
import { StripePaymentComponent } from './stripe-payment/stripe-payment.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AngularStripeComponent } from './angular-stripe/angular-stripe.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes : Routes = [
  { path : 'view', component : ViewProductComponent},
  { path : 'userdashboard', component : UserDashboardComponent},
  { path : 'home', component : HomepageComponent, canActivate: [AuthGuard]},
  { path : 'register', component : RegisterComponent},
  { path : 'login', component : LoginComponent},
  { path : 'admin', component : AdminDashboardComponent},
  { path : 'browse', component : BrowseProductComponent, canActivate: [AuthGuard]},
  { path : 'checkout/:id', component : CheckoutComponent},
  { path : 'seller/register', component : RegSellerComponent},
  { path : 'choices', component : ChoicesComponent},
  { path : 'pay', component : PaymentComponent},
  { path : 'booking', component : BookingComponent},
  { path : 'stripe', component : StripePaymentComponent},
  { path : 'detail/:id', component : ProductDetailComponent},
  { path : 'addproduct', component : AddProductComponent},
  { path : 'justdoit', component : AngularStripeComponent},
  { path : 'forgot', component : ForgotPasswordComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
