import { ThunkAction } from 'redux-thunk';
import { createAction } from 'redux-act';

import { IReduxState, IAppState } from '../ReduxState';

export default class Actions {
  private static readonly _update = createAction<Partial<IAppState>, {}>();

  public static get UPDATE() { return Actions._update.getType(); }

  public static update(updates: Partial<IAppState>): ThunkAction<void, IReduxState, any> {
    return (dispatch) => {
      dispatch(Actions._update(updates));
    };
  }
}
