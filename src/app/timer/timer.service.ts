import { Injectable } from '@angular/core';

import { BehaviorSubject, timer } from 'rxjs';
import { TimerEntry } from './timer.interface';

@Injectable({
  	providedIn: 'root'
})
export class TimerService {

	public timerEntry!: TimerEntry;

    constructor() { }

	getTimerEntry() {
		return this.timerEntry
	}

	setTimerEntry(timerEntry: TimerEntry) {
		this.timerEntry = timerEntry
	}
}
