import { createAction, props } from '@ngrx/store';

export const increment = createAction('[counter] increment value');
export const decrement = createAction('[counter] decrement value');