import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  private scroller;
  constructor() {
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
}
