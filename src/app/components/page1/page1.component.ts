import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OwnerService } from '../../services/owner/owner.service';
import { GlobalService } from '../../services/global/global.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  name: string;
  welcomeText: string;

  constructor(
    private ownerService: OwnerService, 
    private route: ActivatedRoute,
    private globalService: GlobalService,
  ) {
    this.globalService.setSpinnerState(false);
  }

  ngOnInit(): void {
    this.name = this.ownerService.getOwners()[1];
    this.welcomeText = this.route.snapshot.data.welcomeResolver[0].text;
  }

}
