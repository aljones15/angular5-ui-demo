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
  public user;
  public message;
  private interval;
  constructor(_session: SessionService, private _notices: NotificationsService, private ref: ChangeDetectorRef) { 
    _notices.notices.subscribe(this.updateNotices.bind(this));
    this.interval = setInterval(() => {
      this.ref.detectChanges();
    }, 500);
    _session.user.subscribe((u) => this.user = u);
  }
  updateNotices(notices) {
    console.log('updated notices');
    const max = (first, second) => second.created - first.created;
    this.notices = notices.sort(max);
  }
  newPost(event) {
    console.log('newPost');
    console.log(this.message);
    console.log(event);
    if (event.key === 'Enter') {
      this.makeNotice(this.message);
      this.message = null;
    }
  }
  makeNotice(message) {
    this._notices.addNotice(this.user.email, this.user.picture.thumbnail, message);
  }
  ngOnInit() {
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
