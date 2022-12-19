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
    public recordToEdit!: TimerEntry
    public exported: string = "Export"

	constructor(
		private modalCtrl: ModalController,
		public recordsService: RecordsService
	) {}

	exportToCsv(){
    this.exported = "Exported"

    setTimeout(() => {
        this.exported = "Export"
    }, 2000);
	}

	clearList() {
				this.recordsService.clearListOfRecords()
	}

    editEntry(record: TimerEntry) {
        this.openModal(record)
    }

    async openModal(record: TimerEntry) {
        const modal = await this.modalCtrl.create({
        component: RecordsModalPage,
        componentProps: record
        });
        modal.present();

        const { data, role } = await modal.onWillDismiss();

        if (role === 'confirm') {
            record.eventName= data.eventName
            record.engagementCode= data.engagementCode
            record.activityId= data.activityId
            record.notes= data.notes
            record.time= data.time
            record.date= data.date
            record.displayTime= data.displayTime
        }
    }

		onIonInfinite(ev: any) {
			setTimeout(() => {
					(ev as InfiniteScrollCustomEvent).target.complete();
			}, 500);
		}

}
