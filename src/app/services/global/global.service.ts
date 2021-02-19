import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  lang = new BehaviorSubject('en');

  constructor() { }

  toggleLang() {
    const currentLang = this.lang.value;
    const toggleLang = currentLang === 'en' ? 'ru' : 'en';
    this.lang.next(toggleLang);
  }

}
