import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-certificate-modal',
  templateUrl: './certificate-modal.component.html',
  styleUrls: ['./certificate-modal.component.scss'],
})
export class CertificateModalComponent implements OnInit {
  @Input() certificateToShow: string = '';
  @Output() closeModalEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onCloseModal() {
    this.closeModalEvent.emit();
  }
}
