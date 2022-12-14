import { Component } from '@angular/core';
import { timeout } from 'rxjs';
import { LoginService } from '../login/login.service';
import { TimerService } from '../timer/timer.service';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsPage {

    public email: string = this.loginService.getEmail();
    public exportEmail: string = this.email;
    public savedExportEmail: string = ""
    public saved = false;

    constructor(
        public timerService: TimerService,
        private loginService: LoginService
    ) {}

    saveEditedEmail() {
        this.savedExportEmail = this.exportEmail
        this.saved = true

        setTimeout(() => {
            this.saved = false
        }, 2000);
    }

}
