import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: 'timer.page.html',
  styleUrls: ['timer.page.scss']
})

export class TimerPage {

  constructor() {}

  public timeBegan:any = null
  public timeStopped:any = null
  public stoppedDuration:any = 0
  public started:any = null
  public running = false
  public blankTime = "00:00.000"
  public time = "00:00.000"
  public timePaused:any = null
  public timeResumed:any = null

  start() {
    if(this.running) {
      return
    }

    if (this.timeBegan === null) {
        this.reset();
        this.timeBegan = new Date();
    }

    if (this.timeStopped !== null) {
      let newStoppedDuration:any = (+new Date() - this.timeStopped)
      this.stoppedDuration = this.stoppedDuration + newStoppedDuration;
    }

    if (this.time !== this.blankTime) {
      this.stoppedDuration = this.timeResumed - this.timePaused
    }

    this.started = setInterval(this.clockRunning.bind(this), 10);
    this.running = true;

  }

  stop() {
    this.running = false;
    this.timeStopped = new Date();
    clearInterval(this.started);

    // Create the code here which makes a log of the relevant information. Then clear all the input fields. And provide a notification about the log being sent to records.
    this.reset()
  }

  pause() {
    this.timePaused = new Date();
    this.running = false;
    clearInterval(this.started);
  }

  resume() {
      this.timeResumed = new Date();
      this.start();
  }

  reset() {
      this.running = false;
      clearInterval(this.started);
      this.stoppedDuration = 0;
      this.timeBegan = null;
      this.timeStopped = null;
      this.time = this.blankTime;
  }

  zeroPrefix(num: Number, digit: Number) {
      let zero = '';
      for(let i = 0; i < digit; i++) {
        zero += '0';
      }
      return (zero + num).slice(-digit);
  }

  clockRunning(){
      let currentTime:any = new Date()
      let timeElapsed:any = new Date(currentTime - this.timeBegan - this.stoppedDuration)
      let hour = timeElapsed.getUTCHours()
      let min = timeElapsed.getUTCMinutes()
      let sec = timeElapsed.getUTCSeconds()
      let ms = timeElapsed.getUTCMilliseconds();
      this.time =
      this.zeroPrefix(hour, 2) + ":" +
      this.zeroPrefix(min, 2) + ":" +
      this.zeroPrefix(sec, 2) + "." +
      this.zeroPrefix(ms, 3);
  };
}
