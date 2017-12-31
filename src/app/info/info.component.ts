import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  private scroller;
  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }
  scrollIt(increment: number) {
    const scroller = document.getElementById('js-scroll-box');
    scroller.scrollLeft += increment;
  }
  scrollRight(go: boolean) {
    if (!go) {
      clearInterval(this.scroller);
      this.scroller = null;
    }
    if (go) {
      this.scroller = setInterval(this.scrollIt, 25, 5);
    }
  }
  scrollLeft(go: boolean) {
    if (!go) {
      clearInterval(this.scroller);
      this.scroller = null;
    }
    if (go) {
      this.scroller = setInterval(this.scrollIt, 25, -5);
    }
  }
  openModal(): void {
    const options = {width: '60%'};
    let nodalRef = this.dialog.open(LogoPopUp, options);
  }
}

@Component({
  selector: 'logo-pop-up',
  templateUrl: './logo-pop-up.html',
  styleUrls: ['./logo-pop-up.css']

})

export class LogoPopUp {
  public directions = ['Across', 'In', 'Around'];
  public purposes = ['Solve', 'Improve', 'Fix', 'Increase', 'Decrease', 'Progress'];
  public ways = ['By', 'Through', 'From', 'With'];
  constructor(public modalRef: MatDialogRef<LogoPopUp>) {

  }
  onNoClick() {
    this.modalRef.close();
  } 
}
