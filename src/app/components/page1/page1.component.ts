import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { OwnerService } from '../../services/owner/owner.service';
import { GlobalService } from '../../services/global/global.service';
import { selectBookCollection, selectBooks } from 'src/app/store/state/state';
import { BooksService } from 'src/app/services/book/book.service';
import { addBook, removeBook, retrievedBookList } from 'src/app/store/actions/actions';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  name: string;
  welcomeText: string;

  books$ = this.store.pipe(select(selectBooks));
  bookCollection$ = this.store.pipe(select(selectBookCollection));

  constructor(
    private ownerService: OwnerService, 
    private route: ActivatedRoute,
    private globalService: GlobalService,
    private store: Store,
    private booksService: BooksService,
  ) {}

  ngOnInit(): void {
    this.name = this.ownerService.getOwners()[1];
    this.welcomeText = this.route.snapshot.data.welcomeResolver[0].text;
    this.booksService
      .getBooks()
      .subscribe((Book) => this.store.dispatch(retrievedBookList({ Book })));    
  }

  onAdd(bookId) {
    this.store.dispatch(addBook({ bookId }));
  }
 
  onRemove(bookId) {
    this.store.dispatch(removeBook({ bookId }));
  }

}
