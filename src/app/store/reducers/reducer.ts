import { createReducer, on } from '@ngrx/store';
import { increment, decrement } from '../actions/actions';

const initialState: number = 0;

export const _counterReducer = createReducer(initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
)

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}