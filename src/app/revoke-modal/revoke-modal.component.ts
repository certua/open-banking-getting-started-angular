import { CertuaEventbusService } from './../certua-eventbus.service';
import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-revoke-modal',
  templateUrl: './revoke-modal.component.html',
  styleUrls: ['./revoke-modal.component.css'],
})
export class RevokeModalComponent implements OnInit {
  constructor(public modalRef: BsModalRef) {}

  public data: any;
  ngOnInit(): void {}

  confirmRevoke() {
    this.data.promise.resolve();
    this.modalRef?.hide();
  }
  cancelRevoke() {
    this.data.promise.reject();
    this.modalRef?.hide();
  }
}
