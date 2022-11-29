import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profile: string =
    'FrontEnd Developer with experience developing web applications using technologies such as HTML5, CSS3, Javascript, React JS and Angular 2.';
  constructor() {}

  ngOnInit(): void {}
}
