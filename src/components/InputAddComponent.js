import React from "react";

class InputAddComponent extends React.Component {
  state = {
    inputValue: '',
    id: null,
    checked: false,
  };
  updateInputValue = (e) => {
    this.setState({
      inputValue: e.target.value,
      id: new Date().getTime(),
      checked: false,
    });
  };
  addToDoItem = (e) => {
    this.props.addTodo(this.state);
    this.setState({inputValue: ''})
  };

  // ToDo: ()=>{} вынести в методы из хедлеров
  render() {
    return (
      <div className='input-add-block'>
        <div className='input-add-button-block'>
          <input
            className={this.props.fullSize ? 'input-add-input ' : 'input-add-input sub-input-comp'}
            value={this.state.inputValue}
            onChange={e => this.updateInputValue(e)}
            type='text'
            placeholder='text your todo..'
          />
          <button
            className='button-add-todo'
            onClick={this.addToDoItem}
            disabled={!this.state.inputValue}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

export default InputAddComponent;
