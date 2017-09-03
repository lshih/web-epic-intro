import { createReducer } from 'redux-act';
import * as Immutable from 'immutable';

import { AppActions } from '../actions/';
import { IAppState as IState } from '../ReduxState';

// Initial state values
const defaultStateValues: Nullable<IState> = {
};

const StateRecord = Immutable.Record(defaultStateValues);

class State extends StateRecord {
  public toObject() {
    return super.toObject() as IState;
  }

  public merge(newState: Partial<IState> | Immutable.Iterable<string, any>) {
    return super.merge(newState) as any as State;
  }

  constructor(values: Partial<IState> = {}) {
    super(values);
  }
}

const initialState = new State();

export default createReducer<State>({
  // Update
  [AppActions.UPDATE]: (state, payload: Partial<IState>) => (
    state.merge(payload)
  ),
}, initialState);
