import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';

@Component({
  selector: 'app-manager-user',
  templateUrl: './manager-user.component.html',
  styleUrls: ['./manager-user.component.css']
})
export class ManagerUserComponent implements OnInit {

  users;
  search = faSearch;
  constructor(private userService: UserService, public dialog: MatDialog) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;   
    })
  }

  openDialog(){
    console.log('dialog opened');
    const dialogref = this.dialog.open(MyDialogComponent, {
      width: '500px',
      data: {}
    });

    dialogref.afterClosed().subscribe(result => {
      console.log(result);
    })

  }

  getImg(img){
    return `http://localhost:3000/avatar/${img}`;
  }

}
