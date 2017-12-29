import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';

const modules = [
  MatButtonModule,
  MatMenuModule,
  BrowserAnimationsModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatCardModule,
  MatToolbarModule
];

@NgModule({
  imports: modules,
  exports: modules,
  declarations: []
})
export class MaterialModule { }
