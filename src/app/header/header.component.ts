import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  toggle: boolean = false;

  ngOnInit(): void {}

  toggleOn() {
    this.toggle = !this.toggle;
  }

  onClickNavItem() {
    this.toggle = false;
  }
}
