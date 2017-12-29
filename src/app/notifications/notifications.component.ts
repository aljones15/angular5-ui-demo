import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../notifications.service';
import { SessionService } from '../session.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  public notices;
  private interval;
  constructor(_session: SessionService, _notices: NotificationsService, private ref: ChangeDetectorRef) { 
    _notices.notices.subscribe(this.updateNotices.bind(this));
    this.interval = setInterval(() => {
      this.ref.detectChanges();
    }, 500);  
  }
  updateNotices(notices) {
    console.log('updated notices');
    this.notices = notices;
  }
  ngOnInit() {
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
