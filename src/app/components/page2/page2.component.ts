import { Component, OnInit } from '@angular/core';

import { OwnerService } from '../../services/owner/owner.service';
import { GlobalService } from '../../services/global/global.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {

  name: string;
  lang: string;

  constructor(
    private ownerService: OwnerService, 
    private globalService: GlobalService
  ) { }

  ngOnInit(): void {
    this.name = this.ownerService.getOwners()[2];
    this.globalService.lang.subscribe(lang => this.lang = lang);
  }

}
