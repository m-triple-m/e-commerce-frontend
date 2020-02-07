import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  remember_user = true;
  cuser;
  loginForm;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.loginForm = this.formBuilder.group({
      username : ['', Validators.required],
      password : ['', Validators.required],
    })
  }

  userLogin(formdata){
    this.authenticateUser(formdata);
  }

  getControl(name){
    return this.loginForm.controls[name];
  }

  authenticateUser(logindata){
    this.userService.getUserByUsername(logindata.username).subscribe(user => {
      this.cuser = user;
      if(this.cuser){
        this.userService.setCurrentUser(this.cuser);
        this.router.navigate(['/home']);
        return;
      }
      console.log('failed');
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Your username or password is wrong!!',
        footer: `<a href="">Forgot Password?</p>`
      })
    });
    
  }

  forgotNav(){
    this.router.navigate(['/forgot']);
  }
}
