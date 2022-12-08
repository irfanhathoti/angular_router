import { Component, OnInit } from '@angular/core';
import { userDetails } from './userDetails';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userData: userDetails[]

  constructor() {
    this.userData = [
      new userDetails(1,"irfan","irfan@gmail.com",2345678,"Hombalagatti Harapanahalli "),
      new userDetails(2,"Imran","imran@gmail.com",345679843,"Channai Crompete 1233"),
      new userDetails(3,"madhi","madhi@gmail.com",1234556678,"Nichapura Harapanahalli 583127"),
      new userDetails(4,"Anand","anand@gmail.com",3951543," Harapanahalli 583131 "),
      new userDetails(5,"Darshan","darshan@gmail.com",2345678,"Harapanahalli Davanagere"),
      new userDetails(6,"Sai Kiran","saikiran@gmail.com",65432854,"Hospete Karnataka")
    ]

  }

  ngOnInit(): void {
  }

}
