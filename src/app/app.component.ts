import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { environment } from 'src/environments/environment';
import { GlobalService } from './services/global/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private globalService: GlobalService,
    private translateService: TranslateService,
  ) { }

  ngOnInit(): void {
    this.translateService.use(environment.defaultLocale);
  }

  toggleLang() {
    this.globalService.toggleLang()
  }

}
