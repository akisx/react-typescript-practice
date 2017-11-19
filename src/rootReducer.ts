import { combineReducers } from 'redux';
import counter from './modules/counter';
import { CounterState, CounterActions } from './modules/counter';

export default combineReducers<AppState>({
  counterState: counter
});

export type AppState = { counterState: CounterState };

export type AppActions = CounterActions;
