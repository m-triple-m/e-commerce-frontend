import { Component, OnInit } from '@angular/core';
import { Option } from '../static/options';

@Component({
  selector: 'app-choices',
  templateUrl: './choices.component.html',
  styleUrls: ['./choices.component.css']
})
export class ChoicesComponent implements OnInit {

  usage;
  options = Option.usage_option;
  constructor() { }

  ngOnInit(): void {
  }

  setUsage(use){
    console.log(use);
    // console.log((this.options['name'] == this.options[use].name)?'selected':'')
    this.usage = use;
  }

  getClass(name){
    
    if(this.usage != undefined)
      
      return this.options[this.usage].name == name?'selected':'';
    return '';
  }

}
