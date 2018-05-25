import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  userList: User[] = [];
  form: FormGroup;
 

  adduser(form) {
    var user: User;
    user = this.form.value;

    console.log("before ", this.userList);

     if (this.userList.length == 0) {
 
       this.userList.push(form.value);
 
     }
     else if (this.userList[0].name != form.value.name) {
       console.log("Name ::", form.value.name)
       this.userList.push(form.value);
     }
 
     console.log("afrer ", this.userList);
   }

  

   
  
  constructor() {
    this.form = new FormGroup({
      name: new FormControl(''),
      contact: new FormControl(''),
      mail: new FormControl('')
    })
  }

  
  ngOnInit() {
  }

}
