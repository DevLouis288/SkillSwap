import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Login } from './_models/Login';
import { Register } from './_models/Register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BASE_URL = 'http://localhost:8080';

  constructor(private _httpClient: HttpClient, private router: Router) {

  }

  
  login(login: Login) {
    return this._httpClient.post(this.BASE_URL+'/auth/login', login);
  }

  register(register: Register) {
    return this._httpClient.post(this.BASE_URL + '/auth/register', register);

  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/')
    setTimeout(()=> (window.location.reload()), 500)
  }
}
