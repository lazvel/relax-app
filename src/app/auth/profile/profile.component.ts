import { Component, OnInit, inject, Inject } from '@angular/core';
import { User, UserService } from '../user.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isEditing: boolean = false;
  profileForInput: User;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public User: UserService, private _snackBar: MatSnackBar) { }

  ngOnInit(){
    this.profileForInput = {
      id: this.data.user.id,
      name: this.data.user.name,
      email: this.data.user.email,
      password: this.data.user.password,
      phone: this.data.user.phone,
      address: this.data.user.address,
      date: this.data.user.date
      
    };
  }

  finishEditing(form: NgForm) {
    this.data.user.email = this.profileForInput.email;
    this.data.user.password = this.profileForInput.password;
    this.data.user.name = this.profileForInput.name;
    this.data.user.address = this.profileForInput.address;

    console.log(this.data.user);
    console.log(UserService.dummyUserList);
    this.isEditing = false;
  }

  openSnackBar() {
    this._snackBar.open('Korisnik sačuvan', 'Undo',{
      duration: 2000,
    });
  }

}
