import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private welcomeText = '';

  constructor(private http: HttpClient) {}

  fillOwners() {
    this.http.get(environment.API_URL + '/welcome').subscribe(
      (welcome: any) => {
        this.welcomeText = welcome.text;
        debugger
      }
    );
  }

  getWelcomeText() {
    return this.welcomeText;
  }

}
