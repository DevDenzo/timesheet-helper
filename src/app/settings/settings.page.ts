import { Component } from '@angular/core';
import { LoginService } from '../login/login.service';
import { TimerService } from '../timer/timer.service';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsPage {

  public email: string = this.loginService.getEmail()

  constructor(
    public timerService: TimerService,
    private loginService: LoginService
) {}

  editEmail() {
    console.log(this.timerService.getTimerEntry())
  }

}
