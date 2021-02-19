import { Component, OnInit } from '@angular/core';

import { OwnerService } from '../../services/owner/owner.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss']
})
export class Page3Component implements OnInit {

  name: string;
  lang: string;

  constructor(
    private ownerService: OwnerService, 
  ) { }

  ngOnInit(): void {
    this.name = this.ownerService.getOwners()[3];
  }

}
