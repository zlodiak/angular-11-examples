import { Component } from '@angular/core';

import { GlobalService } from './services/global/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private globalService: GlobalService) { }

  toggleLang() {
    this.globalService.toggleLang()
  }

}
