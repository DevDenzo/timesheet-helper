import { Component } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { TimerEntry } from '../timer/timer.interface';

@Component({
  selector: 'app-records-modal',
  templateUrl: './records-modal.page.html',
  styleUrls: ['./records-modal.page.scss'],
})
export class RecordsModalPage {

  public eventName: String = this.navParams.get('eventName');
  public engagementCode: String = this.navParams.get('engagementCode');
  public activityId: String = this.navParams.get('activityId');
  public notes: String = this.navParams.get('notes');
  public date: String = this.navParams.get('date');
  public time: String = this.navParams.get('time')
  public displayTime: String = this.navParams.get('displayTime')

  public editedRecord!: TimerEntry

  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    this.editedRecord = {
      eventName: this.eventName,
      engagementCode:this.engagementCode,
      notes:this.notes,
    time: this.time,
    activityId:this.activityId,
    date: this.date,
    displayTime: this.displayTime

    }
    return this.modalCtrl.dismiss(this.editedRecord, 'confirm');
  }
}
