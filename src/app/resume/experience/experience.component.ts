import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  experience1 = {
    title: 'Frontend Developer',
    institution: 'Comercializadora DMS SAS',
    duration: 'June 2022 - Present',
    description:
      'Design, development, and support of an app that allows user book flights, trains and hotels',
  };

  constructor() {}

  ngOnInit(): void {}
}
