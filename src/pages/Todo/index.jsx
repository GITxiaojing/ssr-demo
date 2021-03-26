import React from 'react';
import { connect } from 'react-redux';
import Header from '../Header';

class Todo extends React.Component {
  render () {
    const { name } = this.props;
    return (
      <div>
        <Header />
        <h1>Todo Page</h1>
        <label>名称：</label>
        <span>{name}</span>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state
  }
}

export default connect(mapStateToProps, null)(Todo)