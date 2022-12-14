import { Component, EventEmitter, Output } from '@angular/core';
import { RecordsService } from '../records/records.service';
import { TimerEntry } from './timer.interface';
import { TimerService } from './timer.service';

@Component({
	selector: 'app-timer',
	templateUrl: 'timer.page.html',
	styleUrls: ['timer.page.scss']
})

export class TimerPage {

    constructor(
        public recordsService: RecordsService,
        public timerService: TimerService
    ) {}

    public timeBegan:any = null
    public timeStopped:any = null
    public stoppedDuration:any = 0
    public started:any = null
    public running = false
    public blankTime = "00:00.000"
    public time = "00:00.000"
    public timePaused:any = null
    public timeResumed:any = null
    public displayTime:any = "00:00:00"
    public eventName: String = ""
    public engagementCode: String = ""
    public activityId: String = ""
    public notes: String = ""
    public timerEntry!: TimerEntry

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

        this.saveTimerEntryDetails()
        this.reset()

        this.eventName = "";
        this.engagementCode = "";
        this.activityId = "";
        this.notes = ""

        this.displayTime = "00:00:00"
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

        this.displayTime =
        this.zeroPrefix(hour, 2) + ":" +
        this.zeroPrefix(min, 2) + ":" +
        this.zeroPrefix(sec, 2)
    };

    saveTimerEntryDetails() {
        if(this.eventName === "") {
            this.eventName = "Unamed Event"
        }

        this.timerEntry = {
            eventName: this.eventName,
            engagementCode: this.engagementCode,
            activityId: this.activityId,
            notes: this.notes,
            time: this.time
        };

        this.timerService.setTimerEntry(this.timerEntry)
        this.recordsService.addEntryToList(this.timerEntry)
    }
}
