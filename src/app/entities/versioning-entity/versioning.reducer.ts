import * as actions from './versioning.actions';
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

export interface Versioning {
  id: number;
  Name: string;
  Info: string;
}

export const versioningAdapter: EntityAdapter<Versioning> =
  createEntityAdapter<Versioning>();
export interface State extends EntityState<Versioning> {}

const defaultVersioning = {
  ids: [],
  entities: {},
};

export const initialState: State =
  versioningAdapter.getInitialState(defaultVersioning);

export const versioningReducer = createReducer(
  initialState,
  on(actions.initializeState, (state) => {
    return state;
  }),
  on(actions.LoadVersioning, (state, { versionings }) => {
    return versioningAdapter.addMany(versionings, state);
  })
);

const { selectIds, selectEntities, selectAll, selectTotal } =
  versioningAdapter.getSelectors();

export const selectVersioningsIds = selectIds;

export const selectVersioningsEntities = selectEntities;

export const selectAllVersionings = selectAll;

export const selectVersioningTotal = selectTotal;
