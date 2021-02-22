import { createReducer, on } from '@ngrx/store';
import { increment, decrement, retrievedBookList, removeBook, addBook } from '../actions/actions';
import { Book } from '../../types/books';

const initialState: number = 0;

export const _counterReducer = createReducer(initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
)

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}


export const initialStateBook: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialStateBook,
  on(retrievedBookList, (state, { Book }) => [...Book])
);


export const initialStateCollection: ReadonlyArray<string> = [];
 
export const collectionReducer = createReducer(
  initialStateCollection,
  on(removeBook, (state, { bookId }) => state.filter((id) => id !== bookId)),
  on(addBook, (state, { bookId }) => {
    if (state.indexOf(bookId) > -1) return state;
 
    return [...state, bookId];
  })
);