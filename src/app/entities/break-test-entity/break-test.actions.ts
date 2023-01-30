import { createAction, props } from '@ngrx/store';
import { BreakTestHistory } from './break-test.reducer';

export const initializeState = createAction('[BreakTest] Initialize');
export const LoadBreakTest = createAction(
  '[BreakTest] Load',
  props<{ breaktests: BreakTestHistory[] }>()
);
