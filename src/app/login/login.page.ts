import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  verifyLogin(): boolean {
    this.router.navigate(['']);
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
