import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InfoComponent } from './info/info.component';
import { MapComponent } from './map/map.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MainComponent } from './main/main.component'; 
import { MaterialModule } from './material/material.module';
import { NotificationsService } from './notifications.service';
import { SessionService } from './session.service';
import { HttpClientModule } from '@angular/common/http';
import { FetchUserService } from './fetch-user.service';
import { MapService } from './map.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InfoComponent,
    MapComponent,
    NotificationsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NotificationsService, SessionService, FetchUserService, MapService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
