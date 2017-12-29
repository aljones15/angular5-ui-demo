import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Notice } from './notice';
import { FetchUserService } from './fetch-user.service';

@Injectable()
export class NotificationsService {

  private _notices: Notice[];
  public notices;
  public users;

  constructor(private fetchUsers: FetchUserService) {
    this._notices = [];
    this.notices = new BehaviorSubject<Notice[]>(this._notices);
    fetchUsers.getUsers(10).subscribe(this.processUsers.bind(this));
  }
  processUsers(req) {
    this.users = req.results;
    this._notices = this.users.map(user => new Notice(user.email, user.picture.thumbnail));
    this.notices.next(this._notices);
  }
}
