import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Book } from "src/app/types/books";

export interface AppState {
  books: ReadonlyArray<Book>;
  collection: ReadonlyArray<string>;
}

export const selectBooks = createSelector(
  (state: AppState) => state.books,
  (books: Array<Book>) => books
);
 
export const selectCollectionState = createFeatureSelector<
  AppState,
  ReadonlyArray<string>
>("collection");
 
export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books: Array<Book>, collection: Array<string>) => {
    return collection.map((id) => books.find((book) => book.id === id));
  }
);