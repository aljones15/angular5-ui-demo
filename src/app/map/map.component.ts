import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { MapService } from '../map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(public maps: MapService) { }

  ngOnInit() {
    this.maps.inject();
  }

}
