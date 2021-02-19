import { Component, OnInit } from '@angular/core';

import { OwnerService } from '../../services/owner/owner.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {

  name: string;

  constructor(
    private ownerService: OwnerService, 
  ) { }

  ngOnInit(): void {
    this.name = this.ownerService.getOwners()[2];
  }

}
