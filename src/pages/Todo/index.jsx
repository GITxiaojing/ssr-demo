import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Header from '../Header';
import { CHANGE_VALUES } from './types';

class Todo extends React.Component {
  componentDidMount () {
    const { getList } = this.props;
    getList()
  }
  render () {
    const { name, list = [] } = this.props;
    return (
      <div>
        <Header />
        <h1>Todo Page</h1>
        <label>名称：</label>
        <span>{name}</span>
        <h3>There are lists below: </h3>
        {
          list.map((item, index) => {
            return (
              <p key={`${item}_${index}`}>{item.title}</p>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state.todo,
  }
}

const getData = () => {
  return dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/todos').then(res => {
      dispatch(changeValuesAction({
        list: res.data || []
      }))
    })
  }
}

const changeValuesAction = (data) => {
  return {
    type: CHANGE_VALUES,
    data,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getList: () => {
      dispatch(getData())
    },
    changeValues: (data) => {
      dispatch(changeValuesAction(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)