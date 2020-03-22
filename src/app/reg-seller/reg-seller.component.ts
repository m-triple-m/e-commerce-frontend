import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { faUser, faLock, faFlag, faCity } from '@fortawesome/free-solid-svg-icons';

import { MatCheckbox } from '@angular/material';
import { SellerService } from '../seller.service';
import { Option } from '../static/options';

@Component({
  selector: 'app-reg-seller',
  templateUrl: './reg-seller.component.html',
  styleUrls: ['./reg-seller.component.css']
})
export class RegSellerComponent implements OnInit {

  icons = {
            user: faUser, 
            lock: faLock, 
            country: faFlag, 
            city: faCity
          };

  @ViewChild('agree')
  agree: MatCheckbox;
  phide;
  chide;
  sellerform;
  constructor(private formbuilder: FormBuilder, private sellerService: SellerService) { }

  sellerSubmit(formdata){
    if(formdata.invalid || !this.agree.checked){
      Swal.fire({
        icon: 'question',
        title: 'Oops...',
        text: 'You forgot something to fill!!',
        footer: `complete the form to continue`
      })
      return;
    }
    // console.log(formdata)
    this.sellerService.addSeller(formdata).subscribe( data => {
      console.log(data);
    });
  }
  

  initForm(){
    this.sellerform = this.formbuilder.group({
      name : ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirm: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      created: new Date()
    }, {validator : this.checkPassword('password', 'confirm')})
  }

  checkPassword(con1name, con2name){
    return (formgroup: FormGroup) => {
      let con1 = formgroup.controls[con1name];
      let con2 = formgroup.controls[con2name];

      if(con1.value !== con2.value){
        con2.setErrors({ unmatch: true});
      }else{
        con2.setErrors(null)
      }
    }
  }

  getControl(){
    return this.sellerform.controls;
  }


  ngOnInit(): void {
    this.initForm();
    document.body.classList.add('bg-sl');
  }

  ngOnDestroy(){
    document.body.classList.remove('bg-sl');
  }

}
