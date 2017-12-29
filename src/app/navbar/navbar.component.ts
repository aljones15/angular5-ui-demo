import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public profileUrl: string;
  constructor(sessionService: SessionService) { 
    sessionService.user.subscribe(user => this.profileUrl = user.picture.thumbnail);
  }
  ngOnInit() {
  }

}
