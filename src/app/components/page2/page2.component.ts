import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { OwnerService } from '../../services/owner/owner.service';
import { increment, decrement } from '../../store/actions/actions';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {

  name: string;
  count$: Observable<number>

  constructor(
    private ownerService: OwnerService, 
    private store: Store<{ count: number }>,
  ) {
    this.count$ = store.select('count');
  }

  ngOnInit(): void {
    this.name = this.ownerService.getOwners()[2];
  }

  increment() {
    this.store.dispatch(increment());
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }

}
