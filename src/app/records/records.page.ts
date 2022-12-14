import { Component } from '@angular/core';
import { InfiniteScrollCustomEvent, ModalController } from '@ionic/angular';
import { RecordsModalPage } from '../records-modal/records-modal.page';
import { TimerEntry } from '../timer/timer.interface';
import { RecordsService } from './records.service';

@Component({
	selector: 'app-records',
	templateUrl: 'records.page.html',
	styleUrls: ['records.page.scss']
})
export class RecordsPage {

	public listOfRecords: TimerEntry[] = this.recordsService.getListOfRecords();
	message = 'This modal example uses the modalController to present and dismiss modals.';
	public recordToEdit!: TimerEntry

	constructor(
		private modalCtrl: ModalController,
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

    editEntry(record: TimerEntry) {
        this.recordToEdit = record;
        this.openModal()
    }

    async openModal() {
        const modal = await this.modalCtrl.create({
        component: RecordsModalPage,
        componentProps: this.recordToEdit
        });
        modal.present();

        const { data, role } = await modal.onWillDismiss();

        if (role === 'confirm') {
        this.message = `Hello, ${data}!`;
        }
    }

		onIonInfinite(ev: any) {
			setTimeout(() => {
					(ev as InfiniteScrollCustomEvent).target.complete();
			}, 500);
		}

}
