import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from './User';
import { AuthService } from '../auth/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router,
    private loginService: LoginService) { }

  model: any={};


  ngOnInit() {
    
  }
  login(){
    // debugger;    
    // this.loginService.Login(this.model).subscribe(    
    //   data => {    
    //     debugger;    
    //     if(data.Status=="Success")    
    //     {       
    //       this.router.navigate(['/maintenance']);    
    //       debugger;    
    //     }    
    //     else{    
    //       this.errorMessage = data.Message;    
    //     }    
    //   },    
    //   error => {    
    //     this.errorMessage = error.message;    
    //   });    
    this.router.navigate(['/maintenance']);
  }    

}
