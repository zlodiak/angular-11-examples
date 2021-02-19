import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private accessToken: any;
  private API_URL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  getAccessToken() {
    return this.accessToken;
  }

  authorize(login: string, password: string) {
    this.http.post(this.API_URL + '/signin', { login, password }).subscribe(
      (data: any) => {
        console.log('success', data);
      }
    );
  }

}
