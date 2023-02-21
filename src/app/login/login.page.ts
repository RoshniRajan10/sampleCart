import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string='';
  password: string='';

  constructor(private router: Router,) { }

  ngOnInit() {
  }

  login(){
    if(this.email === "abc@abc.com" && this.password === "Abc#1"){
      this.router.navigate(['/dashboard/home'])
    }
    else{
      alert('Invalid email or password');
    }
  }

}
