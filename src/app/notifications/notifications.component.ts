import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../notifications.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  public notices;
  constructor(_session: SessionService, _notices: NotificationsService) { 
    _notices.notices.subscribe(n => this.notices = n);
  }

  ngOnInit() {
  }

}
