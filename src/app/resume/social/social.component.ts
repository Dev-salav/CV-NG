import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
})
export class SocialComponent implements OnInit {
  linkedInUrl: string = 'https://www.linkedin.com/in/david-salazar-083438232/';
  linkedInName: string = 'David Salazar';
  githubUrl: string = 'https://github.com/Dev-salav';
  githubName: string = '@Dev-salav';

  constructor() {}

  ngOnInit(): void {}
}
