import React from "react";
import InputAddComponent from "./InputAddComponent";

class ItemComponent extends React.Component {
  state = {
    onEdit: false,
    inputValue: this.props.data.inputValue,
    id: this.props.data.id,
    checked: this.props.data.checked,
    isSubInputVisible: false,
  };
  updateInputValue = e => {
    this.setState({
      inputValue: e.target.value,
    });
  };
  // ToDo: деструктурировать this.props, где нужно
  deleteItemComponent = (e) => {
    e.preventDefault();
    if (this.props.subTodos) {
      this.props.deleteToDo(this.props.data.id)
    } else {
      this.props.deleteSubItemsState(this.props.data.id, this.props.mainId)
    }
  };
  editItemComponent = (e) => {
    e.preventDefault();
    this.setState({onEdit: true})
  };
  editItemInApp = () => {
    if (this.props.subTodos) {
      this.props.editToDo(this.state)
    } else {
      this.props.editSubItem(this.state, this.props.mainId)
    }
    this.setState({onEdit: false});
  };
  changeCheck = (e) => {
    this.setState(state => ({
      checked: !state.checked
    }))
  };
  toggleSubInput = (e) => {
    this.setState(state => ({
      isSubInputVisible: !state.isSubInputVisible
    }))
  };
  handleAddClick = (item) => {
    this.props.addSubItem(this.state.id, item);
  };

  render() {
    //ToDo: !let, a const, const {} = this.props один и const {} = this.state тоже один
    let {data: {inputValue: text, id}} = this.props;
    let {
      addSubItem,
      deleteToDo,
      editToDo,
      subTodos,
      deleteSubItemsState,
      editSubItem
    } = this.props;
    let subItemsTemplate;
    const {onEdit, checked, isSubInputVisible} = this.state;

    if (subTodos && Object.keys(subTodos).length) {
      subItemsTemplate = subTodos[id] && subTodos[id].map(item => {
        return (
          <ItemComponent
            key={item.id}
            data={item}
            editSubItem={editSubItem}
            mainId={this.state.id}
            deleteToDo={deleteToDo}
            deleteSubItemsState={deleteSubItemsState}
            editToDo={editToDo}
            addSubItem={addSubItem}
          />
        )
      });
    }
    // ToDO: вынести большие {?:} из рендера в метод или переменную
    return (
      <div className={'item-component-block ' + (checked ? 'opacity ' : '')}>
        <div className={this.props.mainId ? 'item-main-todo sub-item-todo-comp' : 'item-main-todo '}>
          <input className='checkbox-component' type='checkbox' onChange={this.changeCheck}/>
          {this.props.subTodos
            ? <button
              onClick={this.toggleSubInput}
              className={isSubInputVisible
                ? 'button-delete-component '
                : 'button-delete-component edit-delete-component '}
            >
              {isSubInputVisible ? 'X' : '+'}
            </button>
            : null}
          <div className='block-for-item-component-span' onClick={this.editItemComponent}>
            {onEdit
              ? <input
                className='item-component-block input-item-component'
                value={this.state.inputValue}
                onChange={e => this.updateInputValue(e)}/>
              : <span className='span-component'>{text}</span>}
          </div>
          <button className='button-delete-component' onClick={this.deleteItemComponent}>X</button>
          {onEdit
            ? <button
              className='button-delete-component edit-delete-component'
              onClick={this.editItemInApp}>V</button>
            : null
          }
        </div>
        {isSubInputVisible ? <InputAddComponent addTodo={this.handleAddClick}/> : null}
        {subItemsTemplate}
      </div>
    );
  }
}

export default ItemComponent;

