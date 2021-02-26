import { CertuaEventbusService } from './../certua-eventbus.service';
import { UtilityShellComponent } from './../utility-shell/utility-shell.component';
import { ConsentComponent } from './../consent/consent.component';
import { Component, NgZone, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-institution-selection',
  templateUrl: './institution-selection.component.html',
  styleUrls: ['./institution-selection.component.css'],
})
export class InstitutionSelectionComponent implements OnInit {
  public apiConfig: string = '';

  constructor(
    private bsModalService: BsModalService,
    private ngZone: NgZone,
    private router: Router,
    private certaEventBus: CertuaEventbusService
  ) {}

  ngOnInit(): void {
    this.apiConfig = localStorage.getItem('apiConfig') ?? '';
    if (!this.apiConfig) {
      this.router.navigateByUrl('/start');
    }
  }
}
