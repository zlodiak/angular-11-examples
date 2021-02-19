import { Component, OnInit } from '@angular/core';

import { OwnerService } from '../../services/owner/owner.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  name: string;

  constructor(
    private ownerService: OwnerService, 
  ) { }

  ngOnInit(): void {
    this.name = this.ownerService.getOwners()[1];
  }

}
