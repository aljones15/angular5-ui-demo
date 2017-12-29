import { Injectable } from '@angular/core';
import { Session } from './session';
import { FetchUserService } from './fetch-user.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SessionService {
  public session: Session;
  public user;
  constructor(getUser: FetchUserService) { 
    this.session = new Session();
    this.user = new BehaviorSubject({picture: {thumbnail: null}});
    getUser.getUsers(1).subscribe(res => this.user.next(res.results[0]));
  }
}
