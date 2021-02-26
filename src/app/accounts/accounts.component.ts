import { CertuaEventbusService } from './../certua-eventbus.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
})
export class AccountsComponent implements OnInit {
  public apiConfig = localStorage.getItem('apiConfig');
  constructor(private certuaEventBus: CertuaEventbusService) {}

  ngOnInit(): void {}
}
