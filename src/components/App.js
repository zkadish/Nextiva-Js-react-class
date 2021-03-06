import React from 'react';
import { increment, decrement } from '../actions';
import { connect } from 'react-redux';
import Counter from './Counter';

import { Button } from '@nextiva/next-ui';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      counter,
      increment,
      decrement
    } = this.props;
    return (
      <div className="app-container">
        <div className="app-container__header">
          increment & decrement
        </div>
        <Counter counter={counter} />
        <div className="app-container__buttons">
          <Button
            onClick={increment}
          >
            increment
          </Button>
          <Button
            onClick={decrement}
          >
            decrement
          </Button>
        </div>
      </div>
    )
  }  
}

// const mapStateToProps
// const mapDispatchToProps

export default connect(
  (state) => state.counter,
  (dispatch) => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  })
)(App);

// export default App;
