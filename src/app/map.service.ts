import { Injectable } from '@angular/core';
var googleMapsClient = require('@google/maps');


@Injectable()
export class MapService {
  public client;
  constructor() { 
    client = googleMapsClient.createClient({key: ''});
  }

}
