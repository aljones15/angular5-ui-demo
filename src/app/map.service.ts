import { Injectable } from '@angular/core';
import { apikey } from './apikey';
import { NotificationsService } from './notifications.service';
import { SessionService } from './session.service';

@Injectable()
export class MapService {
  public client;
  public map;
  public markers = [];
  public apiUrl = 'https://maps.googleapis.com/maps/api/js?key=';
  public cb = 'initMap';
  public key;
  public loading: boolean = true;

  constructor(private notices: NotificationsService, private session: SessionService) {
    this.key = apikey; 
    console.log(this.url);
  }
  get url() {
    return this.apiUrl + this.key + "&callback=" + this.cb;
  }
  addMarker(event) {
    const loc = {position: event.latLng, map: this.map};
    const marker = new this.client.maps.Marker(loc);
    this.markers.push(marker);
    this.client.maps.event.addListener(marker, 'click', this.deleteMarker.bind(this, marker));
    this.makeNotice('Added a New Marker');
  }
  deleteMarker(marker) {
    const index = this.markers.indexOf(marker);
    if (marker && index >= 0) {
      marker.setMap(null);
      this.markers.splice(index,1); 
    }
    this.makeNotice('Delete a Marker');
  }
  makeNotice(message) {
    const user = this.session.user.value;
    this.notices.addNotice(user.email, user.picture.thumbnail, message);
  }
  deleteAllMarkers() {
    this.markers.map((marker) => marker.setMap(null));
    this.markers = [];
    this.makeNotice('Deleted all Markers');
  }
  restoreMarkers() {
    this.markers.map((marker) => marker.setMap(this.map));
  }
  callback() {
    this.client = window['google'];
    this.loading = false;
    const houston = {lat: 29.7604, lng: -95.3698};
    this.map = new this.client.maps.Map(document.getElementById('gmap'), {
      zoom: 4,
      center: houston,
      disableDefaultUI: true,
      mapTypeControl: false
    });
    this.client.maps.event.addListener(this.map, 'click', this.addMarker.bind(this));
  }
  inject() {
    window[this.cb] = this.callback.bind(this);
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = this.url;
    window.document.body.appendChild(script);
  }
}
