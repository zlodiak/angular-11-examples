import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  lang = new BehaviorSubject('en');

  constructor(private translateService: TranslateService) { }

  toggleLang() {
    const currentLang = this.lang.value;
    const toggleLang = currentLang === 'en' ? 'ru' : 'en';
    this.lang.next(toggleLang);
    this.translateService.use(toggleLang);
  }

}
