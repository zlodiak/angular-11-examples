import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { environment } from 'src/environments/environment';
import { OwnerService } from './services/owner/owner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private ownerService: OwnerService,
    private translateService: TranslateService,
  ) { }

  ngOnInit(): void {
    this.translateService.use(environment.defaultLocale);
  }

  toggleLang() {
    const currentLang = this.translateService.currentLang;
    const toggleLang = currentLang === 'en' ? 'ru' : 'en';
    this.translateService.use(toggleLang);
  }

}
