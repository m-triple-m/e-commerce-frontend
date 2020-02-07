import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  currentUser;
  avatar;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUserDetails();
    
    this.userService.getImage(this.currentUser.avatar).subscribe((url) => {
      this.avatar = url;
    })
    
  }

  getUserDetails(){
    this.currentUser = this.userService.getCurrentUser();
  }

  

}
