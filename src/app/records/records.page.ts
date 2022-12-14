import { Component } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { TimerEntry } from '../timer/timer.interface';
import { RecordsService } from './records.service';

@Component({
	selector: 'app-records',
	templateUrl: 'records.page.html',
	styleUrls: ['records.page.scss']
})
export class RecordsPage {

	public listOfRecords: TimerEntry[] = this.recordsService.getListOfRecords();

	constructor(
		public recordsService: RecordsService
	) {}

	printList() {
		console.log(this.listOfRecords)
	}

	exportToCsv(){
		console.log('sewey')
	}

	clearList() {
		this.recordsService.clearListOfRecords()
	}

  onIonInfinite(ev: any) {
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

}
