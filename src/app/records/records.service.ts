import { Injectable } from '@angular/core';
import { TimerEntry } from '../timer/timer.interface';

@Injectable({
    providedIn: 'root'
})
export class RecordsService {

    public listOfRecords: TimerEntry[] = [
        {eventName: "SHUS",
    engagementCode:"fgfg",
notes:"dsfsdfsd",
time:"dfsdfsd",
activityId:"idjfijif",
date: "Dec 20 2022",
displayTime: "idfigh"
}
    ];

    constructor() { }

    addEntryToList(entry: TimerEntry) {
        this.listOfRecords.push(entry)
    }

    getListOfRecords() {
        return this.listOfRecords
    }

    clearListOfRecords() {
        this.listOfRecords.splice(0);
    }
}
