import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utility-shell',
  templateUrl: './utility-shell.component.html',
  styleUrls: ['./utility-shell.component.css'],
})
export class UtilityShellComponent implements OnInit {
  public apiConfig: string = '';
  public data: any;
  public metadata = '';
  constructor() {}

  ngOnInit(): void {
    this.metadata = JSON.stringify(this.data);
  }
}
