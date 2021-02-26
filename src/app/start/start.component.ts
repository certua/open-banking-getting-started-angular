import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent implements OnInit {
  public showAccessToken: boolean = true;
  public showContextToken: boolean = false;

  public username: string = '';
  public password: string = '';
  public userReference: string = '';

  public accessToken: string = '';
  private contextToken: string = '';
  private apiUrl = 'https://iqstgdaas.certua.io/api';

  public apiConfig = localStorage.getItem('apiConfig');

  constructor(private http: HttpClient) {
    // connect to the token management event bus
    window
      .CertuaEventBus()
      .$on('token-management', (event: any) =>
        alert('Your token has expired, please get a new one')
      );
  }

  ngOnInit(): void {}

  getAccessToken() {
    const authUrl =
      'https://iqstgauth.certua.io/oauth/token?grant_type=client_credentials';
    const basicAuth = btoa(`${this.username}:${this.password}`);
    let httpHeaders = new HttpHeaders().set(
      'authorization',
      `Basic ${basicAuth}`
    );

    this.http
      .post(authUrl, null, { headers: httpHeaders })
      .pipe(
        map((data: any) => (this.accessToken = data.access_token)),
        tap((_) => {
          this.showAccessToken = false;
          this.showContextToken = true;
        })
      )
      .subscribe();
  }

  getContextToken() {
    const tokenUrl = 'https://iqstgdaas.certua.io/app/token';

    let httpHeaders = new HttpHeaders().set(
      'authorization',
      `Bearer ${this.accessToken}`
    );

    const body = {
      'client.integration.datasource.preference': ['OpenBanking', 'Yodlee'],
      'client.integration.user.reference': this.userReference, // this is your reference for your client
    };
    this.http
      .post(tokenUrl, body, { headers: httpHeaders })
      .pipe(
        map((data: any) => (this.contextToken = data.context_token)),
        tap((token) =>
          localStorage.setItem(
            'apiConfig',
            JSON.stringify({
              url: this.apiUrl,
              token: token,
            })
          )
        ),
        tap((_) => (this.apiConfig = localStorage.getItem('apiConfig'))),
        tap((_) => (this.showContextToken = false))
      )
      .subscribe();
  }
}
