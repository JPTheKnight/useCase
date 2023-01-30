import { createAction, props } from '@ngrx/store';
import { Versioning } from './versioning.reducer';

export const initializeState = createAction('[Versioning] Initialize');
export const LoadVersioning = createAction(
  '[Versioning] Load',
  props<{ versionings: Versioning[] }>()
);
