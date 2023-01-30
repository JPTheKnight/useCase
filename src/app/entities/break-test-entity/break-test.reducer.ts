import * as actions from './break-test.actions';
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

export interface BreakTestHistory {
  id: number;
  Cycle: number;
  Result: boolean;
  Test_At: string;
  Message: string;
  BMS_Max_i: string;
  Left_Max_i: string;
  Right_Max_i: string;
}

export const breakTestAdapter: EntityAdapter<BreakTestHistory> =
  createEntityAdapter<BreakTestHistory>();
export interface State extends EntityState<BreakTestHistory> {}

const defaultBreakTest = {
  ids: [],
  entities: {},
};

export const initialState: State =
  breakTestAdapter.getInitialState(defaultBreakTest);

export const breakTestReducer = createReducer(
  initialState,
  on(actions.initializeState, (state) => {
    return state;
  }),
  on(actions.LoadBreakTest, (state, { breaktests }) => {
    return breakTestAdapter.addMany(breaktests, state);
  })
);

const { selectIds, selectEntities, selectAll, selectTotal } =
  breakTestAdapter.getSelectors();

export const selectBreakTestsIds = selectIds;

export const selectBreakTestsEntities = selectEntities;

export const selectAllBreakTests = selectAll;

export const selectBreakTestTotal = selectTotal;
