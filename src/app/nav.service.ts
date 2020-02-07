import { Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  visible: boolean = false;
  @Output() change: EventEmitter<any> = new EventEmitter();
  constructor() { }

  toggleNav() {
    this.visible = !this.visible;
    this.change.emit(this.visible);
  }
}
