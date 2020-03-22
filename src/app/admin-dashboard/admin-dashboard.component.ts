import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavService } from '../nav.service';
import { MatSidenav } from '@angular/material/sidenav';


import * as CanvasJS from '../../assets/canvasjs.min';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  @ViewChild("drawer") drawer: MatSidenav;
  items = ['Manage Order','Manage Users','View Products','View Registrations','Manage Admins','cyfcyvewcuye','cyfcyvewcuye','cyfcyvewcuye','cyfcyvewcuye' ]
  constructor(private navService: NavService) { }

  ngOnInit() {
    this.navService.change.subscribe(toggle => {
      this.drawer.toggle();
    })
    
  }

}
