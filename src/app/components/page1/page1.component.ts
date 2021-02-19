import { Component, OnInit } from '@angular/core';

import { OwnerService } from '../../services/owner/owner.service';
import { GlobalService } from '../../services/global/global.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  name: string;
  lang: string;

  constructor(
    private ownerService: OwnerService, 
    private globalService: GlobalService
  ) { }

  ngOnInit(): void {
    this.name = this.ownerService.getOwners()[1];
    this.globalService.lang.subscribe(lang => this.lang = lang);
  }

}
