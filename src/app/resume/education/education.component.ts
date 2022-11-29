import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  education1 = {
    title: 'Frontend Bootcamp',
    institution: 'Open Bootcamp',
    duration: '2022',
  };

  constructor() {}

  ngOnInit(): void {}
}
