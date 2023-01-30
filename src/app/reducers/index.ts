import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromBreakTest from '../entities/break-test-entity/break-test.reducer';
import * as fromVersioning from '../entities/versioning-entity/versioning.reducer';

export interface State {
  breaktest: fromBreakTest.State;
  versioning: fromVersioning.State;
}

export const reducers: ActionReducerMap<State> = {
  breaktest: fromBreakTest.breakTestReducer,
  versioning: fromVersioning.versioningReducer,
};

export const selectBreakTestState =
  createFeatureSelector<fromBreakTest.State>('breaktest');
export const selectVersioningState =
  createFeatureSelector<fromVersioning.State>('versioning');

export const selectAllBreakTests = createSelector(
  selectBreakTestState,
  fromBreakTest.selectAllBreakTests
);

export const selectAllVersionings = createSelector(
  selectVersioningState,
  fromVersioning.selectAllVersionings
);
