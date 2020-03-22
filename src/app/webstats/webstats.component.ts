import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

import * as CanvasJS from '../../assets/canvasjs.min';
import { ParseService } from '../parse.service';

@Component({
  selector: 'app-webstats',
  templateUrl: './webstats.component.html',
  styleUrls: ['./webstats.component.css']
})
export class WebstatsComponent implements OnInit {

  dataPoints;
  users;
  total_reg;
  constructor(private userService: UserService, private parseservice: ParseService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe( data => {
      this.users = data;
      console.log(data);
      this.total_reg = this.users.length;

      this.parseservice.filterColumns(['x', 'y'], ['created', 'username'], this.users).subscribe( data => {
        console.log(data);
      });

      this.parseservice.getCounts(['name', 'y'], 'country', this.users).subscribe( data => {
        console.log(data);
        // this.drawLineChart(data, 'regByDate');
        this.drawPieChart(data, 'regByDate', "Users");
      })
      this.drawChart();
    })
    
    
  }


  drawChart(){
    let chart = new CanvasJS.Chart("bar", {
      animationEnabled: true,
      theme: "light2",
      title: {
        text: "Daily Sales Data"
      },
      axisY: {
        title: "Units",
        titleFontSize: 24
      },
      data: [{
        type: "column",
        yValueFormatString: "#,### Units",
        dataPoints: [
          { x: new Date(2017,6,24), y: 31 },
          { x: new Date(2017,6,25), y: 31 },
          { x: new Date(2017,6,26), y: 29 },
          { x: new Date(2017,6,27), y: 29 },
          { x: new Date(2017,6,28), y: 31 },
          { x: new Date(2017,6,29), y: 30 },
          { x: new Date(2017,6,30), y: 29 }
        ]
      }]
    });
    chart.render(); 
  }

  drawLineChart(data, container){
    let chart = new CanvasJS.Chart(container, {
      animationEnabled: true,
      theme: "light2",
      title: {
        text: "Daily Sales Data"
      },
      axisY: {
        title: "ytitle",
        titleFontSize: 24
      },
      data: [{
        type: "spline",
        yValueFormatString: "#,### Units",
        dataPoints: data
      }]
    });
    chart.render(); 
  }

  drawPieChart(data, container, ytitle){
    let chart = new CanvasJS.Chart(container, {
      animationEnabled: true,
      theme: "light2",
      title: {
        text: "Daily Sales Data"
      },
      axisY: {
        title: ytitle,
        titleFontSize: 24
      },
      data: [{
        type: "doughnut",
        yValueFormatString: "#,### Users",
        dataPoints: data
      }]
    });
    chart.render(); 
  }

}
