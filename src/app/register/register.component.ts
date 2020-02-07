import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import { CustomeValidator } from '../CustomValidators';
import { group } from '@angular/animations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm;
  selectedFile;
  avatarName = '';
  message;
  imagePath;
  imgURL;
  dimgURL;
  showpassword = "text";
  constructor(private formBuilder : FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.initForm();
  }

  toggleVis(){
    
  }

  initForm(){
    this.registerForm = this.formBuilder.group({
      name : ['', Validators.required],
      username : ['', Validators.required],
      email : ['', [Validators.required, Validators.email]],
      password : ['', Validators.required],
      confirm : ['', Validators.required],
      avatar : ''
    })
  }

  passPattern(name){
    return (group: FormGroup) => {
      const Passcontrol = group.controls[name];
      
      console.log(Passcontrol.value)
      const pass_regex = /^[a-z]$/

      if(pass_regex.test(Passcontrol.value)) {
        Passcontrol.setErrors(null);
        console.log('yay')
        return
      }

      Passcontrol.setErrors({invalid : true});
  }
}

  userSubmit(formdata){
    if(!this.registerForm.valid){
      alert('invalid form');
      return;
    }
    formdata.avatar = this.avatarName;
    this.userService.addUser(formdata).subscribe( data => {
      console.log(data.message);
    });
  }

  onFileChanged(event){
    let formData = new FormData();
    this.selectedFile = event.target.files[0];
    this.avatarName = this.selectedFile.name;
    this.preview(event.target.files);
    formData.append('avatar', this.selectedFile, this.selectedFile.name);
    this.userService.uploadImage(formData).subscribe(response => {
      console.log(response.message);
      console.log(this.avatarName);
    });
  }

  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => { 
      this.imgURL = reader.result;
      // console.log(this.imgURL);
    }
  }

  getControl(name){
    // console.log(this.registerForm.controls[name])
    return this.registerForm.controls[name];
  }

}