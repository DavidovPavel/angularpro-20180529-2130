import { Action } from "@ngrx/store";

export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';

export function counterReducer(state: number, action: Action) {
   switch(action.type) {
     case INCREMENT: return state + 1;
     case DECREMENT: return state - 1;
     default: return state;
   }
}