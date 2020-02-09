import { Component, OnInit, Input } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavService } from '../nav.service';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  bar = faBars;
  currentUser;
  @Input('avatar')
  avatar;
  constructor(private navService: NavService, private authservice: AuthService, private router: Router) { }

  ngOnInit() {
    // this.currentUser = this.userService.getCurrentUser();
    // this.userService.getImage(this.currentUser.avatar).subscribe((url) => {
    //   this.avatar = url;
    //   console.log(url);
    // })
    // if(sessionStorage.getItem('user')){
    //   this.avatar = `http://localhost:3000/${JSON.parse(sessionStorage.getItem('user')).avatar}`;
    // }
    // console.log(this.avatar);
  }

  ngOnChanges(){
    if(sessionStorage.getItem('user')){
        this.avatar = `http://localhost:3000/${JSON.parse(sessionStorage.getItem('user')).avatar}`;
      }
      console.log(this.avatar);
  }

  toggleSideNav(){
    console.log('toggled');
    this.navService.toggleNav();
  }

  logout(){
    this.authservice.logout();
    console.log('logged_out')
    this.router.navigate(['/login']);
  }

}
