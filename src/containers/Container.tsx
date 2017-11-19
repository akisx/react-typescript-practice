import { connect } from 'react-redux';
import Counter from './Counter';
import { Dispatch } from 'redux';
import { AppState, AppActions } from '../rootReducer';
import { incrementCounter, decrementCounter } from '../modules/counter';

const mapStateToProps = (state: AppState) => {
  return { value: state.counterState.count };
};

const mapDispatchToProps = (dispatch: Dispatch<AppActions>) => {
  return {
    increment: () => {
      dispatch(incrementCounter());
    },
    decrement: () => {
      dispatch(decrementCounter());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
