import React from 'react'
import { connect } from 'react-redux'
import { add, sub } from '../../actions/counterActions'
import Counter from '../../components/Counter/Counter'
import { getCounter } from '../../selectors/counterSelectors'


const App = (props) => (
  <Counter 
    counter={props.counter} 
    onAdd={props.onAdd} 
    onSub={props.onSub} 
  />
)


function mapStateToProps(state) {
  return {
    counter: getCounter(state)
  }
}

function mapDispatchToProps(dispatch) {
  return {    
    onAdd: () => dispatch(add()),
    onSub: () => dispatch(sub())
  }  
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
