import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  name: string = 'David';
  LastName: string = 'Salazar';
  profession: string = 'Frontend Developer';
  address: string = 'Calle 22 # 10 - 81';
  email: string = 'de.salav24@gmail.com';
  cellphone: string = ' 57 3214050091';

  constructor() {}

  ngOnInit(): void {}
}
