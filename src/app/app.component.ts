import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material'; 
import { User } from './model/User'; 
import { UserService } from './service/user.service';
import { SetupDialogComponent } from './setup-dialog/setup-dialog.component'; 

declare var M; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin2';
  private $auth: User; 
  private profilePic: string; 

  constructor(public _dialog: MatDialog, public _user: UserService) { }

  ngOnInit(){
    document.addEventListener('DOMContentLoaded', function() {
      M.AutoInit(); 
    });
   
    
  }
    

}
