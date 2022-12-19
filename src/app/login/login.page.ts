import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    public email : string = ""

    constructor(
      private loginService: LoginService,
      private router: Router
      ) { }

    ngOnInit() {
    }

    verifyLogin(): boolean {
        this.router.navigate(['']);
        this.loginService.setEmail(this.email)
        return true
    }

//   emailValidation(): void {
//     var pattern = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
//     var valid = pattern.test(email.value)

//     if(valid && email.value.trim().length > 0) {
//         emailError.style.display = 'none'
//     } else{
//         email.setCustomValidity(" ") //Removes the standard alert
//         emailError.style.display = 'block'
//     }

//     return (valid && email.value.trim().length > 0)
// };

}
