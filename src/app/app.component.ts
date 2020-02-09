import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';

  avatar;
  constructor(private authService: AuthService){
    sessionStorage.setItem('avatar', "assets/default_avatar.png");
    
  }

  ngOnInit(){
    console.log(sessionStorage.getItem('avatar'));
    this.avatar = sessionStorage.getItem('avatar');
  }

  ngDoCheck(){
    // console.log('ds')
    if(this.authService.loggedin){
      this.avatar = sessionStorage.getItem('avatar');
    }else{
      // console.log('default')
      sessionStorage.setItem('avatar', "assets/default_avatar.png");
      this.avatar = sessionStorage.getItem('avatar');
    }
  }
}

