import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-count',
  templateUrl: './item-count.component.html',
  styleUrls: ['./item-count.component.css']
})
export class ItemCountComponent implements OnInit {

  @Input() items;
  @Input() sel;
  @Output() getUsage = new EventEmitter<number>();
  usage;
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.items);
  }

  setUsage(usage){
    this.usage = usage;
    this.getUsage.emit(this.usage);
  }

  getUsageClass(index){
    if(index != undefined){
      return this.usage === index?'selected':'';
    }else{
      return '';
    }
  }


}
