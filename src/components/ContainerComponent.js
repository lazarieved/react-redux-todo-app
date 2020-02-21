import React from "react";
import ItemComponent from "./ItemComponent";

class ContainerComponent extends React.Component {
  render() {
    let {
      todos,
      searchInputValue,
      addSubItem,
      deleteToDo,
      editToDo,
      subTodos,
      deleteSubItemsState,
      editSubItem
    } = this.props;
    const items = searchInputValue ? todos.filter(item => item.inputValue.includes(searchInputValue)) : todos;

    return (
      <div className='container-component'>
        {items.map((item, index) => {
            return (
              <div key={index}>
                <ItemComponent
                  data={item}
                  deleteToDo={deleteToDo}
                  deleteSubItemsState={deleteSubItemsState}
                  editSubItem={editSubItem}
                  editToDo={editToDo}
                  addSubItem={addSubItem}
                  subTodos={subTodos}
                />
              </div>
            )
          }
        )}
      </div>
    );
  }
}

export default ContainerComponent;
