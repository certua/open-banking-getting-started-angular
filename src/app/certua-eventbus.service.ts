import { RevokeModalComponent } from './revoke-modal/revoke-modal.component';
import { Injectable, NgZone } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ConsentComponent } from 'src/app/consent/consent.component';
import { UtilityShellComponent } from 'src/app/utility-shell/utility-shell.component';

@Injectable({
  providedIn: 'root',
})
export class CertuaEventbusService {
  private data: any;
  private modalRef: BsModalRef | undefined;
  private apiConfig = localStorage.getItem('apiConfig') ?? '';

  constructor(private ngZone: NgZone, private bsModalService: BsModalService) {
    window.CertuaEventBus().$on('open-dialog', (event: any) => {
      switch (event.payload.operation) {
        case 'link':
          this.showConsent(event);
          break;
        case 'revoke':
          this.showRevokeModal(event.payload);
          break;
      }
    });

    window.CertuaEventBus().$on('close-dialog', (event: any) => {
      this.modalRef?.hide();
    });

    window.CertuaEventBus().$on('redirection-request', (event: any) => {
      localStorage.setItem('redirectionConf', JSON.stringify(event));
      this.ngZone.run(() => {
        window.open(event.url, '_self');
      });
    });

    window.CertuaEventBus().$on('consent-channel', (event: any) => {
      const consentGiven: boolean = event.data.consentGiven;
      if (consentGiven) {
        this.data.payload.promise.resolve();
      } else {
        this.data.payload.promise.reject();
      }
      this.modalRef?.hide();
    });
  }

  showConsent(data: any) {
    this.data = data;
    const initialState: ModalOptions<ConsentComponent> = {
      initialState: {
        apiConfig: this.apiConfig,
        data: data,
      },
    };
    this.modalRef = this.bsModalService.show(ConsentComponent, initialState);
  }
  showRevokeModal(data: any) {
    this.data = data;
    const initialState: ModalOptions<RevokeModalComponent> = {
      initialState: { data },
    };
    this.modalRef = this.bsModalService.show(
      RevokeModalComponent,
      initialState
    );
  }
  confirmRevoke() {
    this.data.promise.resolve();
    this.modalRef?.hide();
  }
  cancelRevoke() {
    this.data.promise.reject();
    this.modalRef?.hide();
  }

  closeModal() {
    this.modalRef?.hide();
  }
}
