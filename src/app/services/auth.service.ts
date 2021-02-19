import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private accessToken: any;

  constructor(private http: HttpClient) {}

  getAccessToken() {
    return this.accessToken;
  }

  authorize(login: string, password: string) {
    this.http.post(environment.AUTH_URL + '/signin', { login, password }).subscribe(
      (data: any) => {
        console.log('success', data);
      }
    );
  }

}
