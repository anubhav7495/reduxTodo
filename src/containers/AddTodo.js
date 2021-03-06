import React from 'react';
import  { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
            e.preventDefault();
            if (!input.value.trim()) {
              return
            }
            dispatch(addTodo(input.value));
            input.value = '';
        }}
      >
        <input
          ref={node => {
              input = node
          }}
          className="input-text"
          placeholder="What needs to be done?"
        />
      <button type="submit" className="btn">
          Add Todo
        </button>
      </form>
    </div>
  )
}

AddTodo = connect()(AddTodo);

export default AddTodo;
