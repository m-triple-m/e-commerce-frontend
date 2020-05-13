import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-manage-address',
  templateUrl: './manage-address.component.html',
  styleUrls: ['./manage-address.component.css']
})
export class ManageAddressComponent implements OnInit {

  user;
  addressform;
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    this.initForm();
  }

  initForm(){
    this.addressform = this.formbuilder.group({
      house : '',
      area : '',
      city : '',
      landmark : '',
      state : '',
      country : ''
    })
  }

}