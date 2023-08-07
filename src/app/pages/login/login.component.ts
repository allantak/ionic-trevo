import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  img = 'assets/logo.png';

  email?: string;
  senha?: string;

  constructor(private apiService: ApiService,  private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('token')){
      this.router.navigate(['home']);
    }
   }

  onSubmit() {
    const data = {
      email: this.email,
      password: this.senha
    }
    this.apiService.login(data).subscribe(response => {
      localStorage.setItem('token', response.token)
      this.router.navigate(['home']);
      ;
    }, err => { throw err; });;
  }

}
