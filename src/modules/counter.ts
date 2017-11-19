import { Action } from 'redux';

enum TypeKeys {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT'
}

interface IncrementAction extends Action {
  type: TypeKeys.INCREMENT;
}
export const incrementCounter = (): IncrementAction => ({ type: TypeKeys.INCREMENT });

interface DecrementAction extends Action {
  type: TypeKeys.DECREMENT;
}
export const decrementCounter = (): DecrementAction => ({ type: TypeKeys.DECREMENT });

export type CounterActions = IncrementAction | DecrementAction;

export interface CounterState {
  count: number;
}

const counterReducer = (state: CounterState = { count: 0 }, action: CounterActions): CounterState => {
  switch (action.type) {
    case TypeKeys.INCREMENT:
      return { count: state.count + 1 };
    case TypeKeys.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default counterReducer;
