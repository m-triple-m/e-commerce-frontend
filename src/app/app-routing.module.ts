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

const routes : Routes = [
  { path : 'view', component : ViewProductComponent},
  { path : 'userdashboard', component : UserDashboardComponent},
  { path : 'home', component : HomepageComponent, canActivate: [AuthGuard]},
  { path : 'register', component : RegisterComponent},
  { path : 'login', component : LoginComponent},
  { path : 'admin', component : AdminDashboardComponent},
  { path : 'browse', component : BrowseProductComponent},
  { path : 'checkout', component : CheckoutComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
