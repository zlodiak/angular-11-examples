import { createAction, props } from '@ngrx/store';

export const increment = createAction('[counter] increment value');
export const decrement = createAction('[counter] decrement value');

export const addBook = createAction(
  '[Book List] Add Book',
  props<{ bookId }>()
);

export const removeBook = createAction(
  '[Book Collection] Remove Book',
  props<{ bookId }>()
);

export const retrievedBookList = createAction(
  '[Book List/API] Retrieve Books Success',
  props<{ Book }>()
);