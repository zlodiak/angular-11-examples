import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private isShowSpinner = new BehaviorSubject(false);

  constructor() {}

  spinner() {
    return this.isShowSpinner.asObservable();
  }

  setSpinnerState(state: boolean) {
    return this.isShowSpinner.next(state);
  }

}
