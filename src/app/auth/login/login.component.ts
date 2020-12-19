import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorExists = false;
  errorText = "";

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    var email = form.value.email;
    var password = form.value.password;

    var user = this.userService.getUser(email);
    if(!user) {
      this.errorExists = true;
      this.errorText = "Ne postoji registrovani korisnik sa email-om " + email;
      return;
    }

    var isPasswordValid = this.userService.isPasswordCorrect(email, password);
    if(!isPasswordValid) {
      this.errorExists = true;
      this.errorText = "Sifra je netacna";
      return;
    }
    this.errorExists = false;
    this.router.navigate(['']); // na pocetnu stranicu
  }


}
