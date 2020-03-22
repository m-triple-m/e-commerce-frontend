import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Options } from '../models/usage';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  isLinear = false;
  usage1;
  usage3;
  usage2;
  usage4;
  space3;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup : FormGroup;
  fourthFormGroup
  useroptions;
  seconduser;
  options=[
    {img:"assets/seven.png",name:"Several times a week"},
    {img:"assets/month.png",name:"Several times a month"},
    {img:"assets/rarely.png",name:"Rarely"}
  ];
  locations;
  constructor(private activatedroute:ActivatedRoute,private formbuilder : FormBuilder,private userservice:UserService) { }

  ngOnInit() {
    this.firstFormGroup = this.formbuilder.group({
      personal: ['', Validators.required],
      business: ['',Validators.required],
    
    });
    this.useroptions=Options.options;
    this.secondFormGroup = this.formbuilder.group({
      secondCtrl: ['', Validators.required]
    });
    
      this.thirdFormGroup=this.formbuilder.group({

    });

  }

  getStep1(){
    return this.useroptions;
  }

  getStep2(){
    return this.useroptions[this.usage1].options;
  }

  getStep3(){
    return this.useroptions[this.usage1].options[this.usage2].options;
  }

  getStep4(){
    return this.useroptions[this.usage1].options[this.usage2].options[this.usage3].options;
  }

  setUsage1(use){
    this.usage1 = use;
    console.log(this.usage1);
  }

  setUsage2(use){
    this.usage2=use;
    console.log(this.usage2);
  }
  
  setUsage3(use){
    this.usage3=use;
    console.log(this.usage3);
  }
  setUsage4(use){
    this.usage4=use;
    console.log(this.usage4);
  }

  setSpace3(space){
    this.space3 = space;
  }
  // getUsageClass(index){
  //   if(index != undefined){
  //     return this.usage === index?'selected':'';
  //   }else{
  //     return '';
  //   }
  // }
  // getUsageClass1(index){
  //   if(index != undefined){
  //     return this.usage1 === index?'selected':'';
  //   }else{
  //     return '';
  //   }
  // }
  // getUsageClass2(index){
  //   if(index != undefined){
  //     return this.usage2 === index?'selected':'';
  //   }else{
  //     return '';
  //   }
  // }
  // addThing(index){
  //   this.useroptions[this.usage].options[this.usage1].options[index].count++;
  // }
  // removeThing(index){
  //   this.useroptions[this.usage].options[this.usage1].options[index].count--;
  // }
  

}