import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private incorrect: Boolean = false;

  constructor(private authSvc: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    if (this.authSvc.login(email, password)) {
      this.router.navigate(['/clients']);
    } else {
      this.incorrect = true;
    }
  }

}
