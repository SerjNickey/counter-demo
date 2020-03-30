import React from 'react';
import { connect } from 'react-redux';
import { add, sub, addAsync, subAsync } from '../../actions/counterActions';
import Counter from '../../components/Counter/Counter';
import { getCounter } from '../../selectors/counterSelectors';


const App = (props) => (
  <Counter 
    counter={props.counter} 
    onAdd={props.onAdd} 
    onSub={props.onSub} 
    onAddAsync={props.onAddAsync}
    onSubAsync={props.onSubAsync}
  />
);


function mapStateToProps(state) {
  return {
    counter: getCounter(state)
  }
}

function mapDispatchToProps(dispatch) {
  return {    
    onAdd: () => dispatch(add(1)),
    onSub: () => dispatch(sub(1)),
    onAddAsync: () => dispatch(addAsync()),
    onSubAsync: () => dispatch(subAsync())
  }  
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
