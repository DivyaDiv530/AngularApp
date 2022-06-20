import { Component, OnInit } from '@angular/core';
import { ApiServices } from './api.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  userData: any;
  searchedUser: any;
  searchResults: any;
  userDataSelected = false;
  selectedInput: any;
  constructor(public apiService: ApiServices) {}
  ngOnInit() {
    this.apiService.getUserData().subscribe((data) => {
      console.log('data', data);
      this.userData = data;
    });
  }
  fetchUserData(event) {
    this.searchResults = this.userData.filter((user) => {
      return user.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
  }
  toggle(userData?:any) {
    if(userData) {
      this.searchedUser = userData.name;
    this.userDataSelected = false;
    return;
    }
    else {
    this.searchResults = this.userData;
    this.userDataSelected = true;
    }
  }
  onBlur() {
    this.userDataSelected = false;
  }
  selectUserData(event) {
    //this.selectedInput=event;
    console.log('e', event);
    this.searchedUser = event.name;
    this.userDataSelected = false;
    
  }
}
