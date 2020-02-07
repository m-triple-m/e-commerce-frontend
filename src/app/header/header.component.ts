import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavService } from '../nav.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  bar = faBars;
  currentUser;
  avatar;
  constructor(private navService: NavService, private userService: UserService) { }

  ngOnInit() {
    // this.currentUser = this.userService.getCurrentUser();
    // this.userService.getImage(this.currentUser.avatar).subscribe((url) => {
    //   this.avatar = url;
    //   console.log(url);
    // })
  }

  toggleSideNav(){
    console.log('toggled');
    this.navService.toggleNav();
  }

}
