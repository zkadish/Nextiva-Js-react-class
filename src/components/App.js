import React from 'react';
import { increment, decrement } from '../actions';
import { connect } from 'react-redux';

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
        <div className="app-container__output">
          {counter}
        </div>
        <div className="app-container__increment">
          <button
            onClick={increment}
          >increment</button>
          <button
            onClick={decrement}
          >decrement</button>
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
