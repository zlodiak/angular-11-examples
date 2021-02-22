import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/types/books';
 
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  @Input() books: Array<Book>;
  @Output() add = new EventEmitter();
}