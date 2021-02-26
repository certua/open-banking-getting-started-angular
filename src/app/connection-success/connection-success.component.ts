import { jsDocComment } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './connection-success.component.html',
  styleUrls: ['./connection-success.component.css'],
})
export class ConnectionSuccessComponent implements OnInit {
  public apiConfig = '';
  constructor() {}

  ngOnInit(): void {
    this.apiConfig = localStorage.getItem('apiConfig') ?? '';
  }
}
