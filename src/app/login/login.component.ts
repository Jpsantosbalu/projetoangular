import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;
  
  constructor(private fb: FormBuilder, private loginService: LoginService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
   }

   onSubmit(){
    if(this.loginForm.valid){
 
      this.loginService.loginUser(this.loginForm.get('email')?.value, this.loginForm.get('senha')?.value).subscribe(data => {
        
        console.log(data); 
        
      });

    }else{
     console.log("Formulário inválido")
   }
  }
}
