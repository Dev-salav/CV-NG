import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss'],
})
export class CertificatesComponent implements OnInit {
  showCertificate: boolean = false;
  certificateToShow: string = '';

  constructor() {}

  ngOnInit(): void {}

  onClickCertificate(cert: string) {
    this.showCertificate = true;
    this.certificateToShow = cert;
  }

  closeCertificateModal() {
    this.showCertificate = false;
  }
}
