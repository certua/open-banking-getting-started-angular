import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consent',
  templateUrl: './consent.component.html',
  styleUrls: ['./consent.component.css'],
})
export class ConsentComponent implements OnInit {
  public apiConfig: string = '';
  public data: any;
  public metadata: string = '';
  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit(): void {
    this.metadata = JSON.stringify(this.data.payload);
  }
}
