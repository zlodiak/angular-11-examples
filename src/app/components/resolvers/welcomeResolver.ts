
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { catchError, delay } from 'rxjs/operators';
import { HttpClient} from '@angular/common/http';

import { environment } from 'src/environments/environment'; 
import { GlobalService } from '../../services/global/global.service';


@Injectable()
export class WelcomeResolver implements Resolve<any> {

  constructor(
    private http: HttpClient,
    private globalService: GlobalService,
  ) {}

  resolve() {
    this.globalService.setSpinnerState(true);
    return this.http.get(environment.API_URL + '/welcome').pipe(
      delay(2000),
      catchError(async (error) => this.globalService.setSpinnerState(false))
    );
  }

}