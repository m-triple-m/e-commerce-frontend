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
    console.log(this.currentUser);
    
  }

  getUserDetails(){
    this.currentUser = JSON.parse(sessionStorage.getItem('user'));
  }

  

}
