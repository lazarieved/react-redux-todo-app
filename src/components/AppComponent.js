import React from "react";
import ContainerComponent from "./ContainerComponent";
import InputAddComponent from "./InputAddComponent";
import InputSearchComponent from "./InputSearchComponent";
import {connect} from 'react-redux'
import {
  addToDoInState,
  deleteToDoState,
  editToDoItem,
  addSubItem,
  deleteSubItemsState,
  editSubItem,
} from '../actions/appAction'

class App extends React.Component {
  state = {
    searchInputValue: '',
    isSearchInvisible: false,
  };
  checkChangeInput = (e) => {
    this.setState({searchInputValue: e.target.value})
  };
  showSearchComponent = (e) => {
    this.setState(state => ({
      isSearchInvisible: !state.isSearchInvisible
    }));
  };
  // TODO: деструктурировать props и state
  render() {
    console.log(this.props);
    const {
      todos,
      addToDoInState,
      deleteToDoState,
      editSubItem,
      deleteSubItemsState,
      editToDoItem,
      addSubItem,
      subItems
    } = this.props;
    return (
      <div className='main-container-app'>
        <div className='main-title'>ToDo</div>
        <InputAddComponent addTodo={addToDoInState} fullSize/>
        <InputSearchComponent
          handleChange={this.checkChangeInput}
          searchInputValue={this.state.searchInputValue}
          isVisible={this.state.isSearchInvisible}
          showSearchComponent={this.showSearchComponent}
        />
        <ContainerComponent
          searchInputValue={this.state.searchInputValue}
          todos={todos}
          deleteToDo={deleteToDoState}
          editSubItem={editSubItem}
          deleteSubItemsState={deleteSubItemsState}
          editToDo={editToDoItem}
          addSubItem={addSubItem}
          subTodos={subItems}
        />
      </div>
    );
  }
}


const mapStateToProps = store => {
  console.log(store)
  const {
    dataReducer: {
      todos = [],
      searchInputValue = '',
      isSearchInvisible = false,
      subItems = {}
    },
  } = store;

  return {
    todos,
    subItems,
    searchInputValue,
    isSearchInvisible
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addToDoInState: item => dispatch(addToDoInState(item)),
    deleteToDoState: item => dispatch(deleteToDoState(item)),
    editToDoItem: item => dispatch(editToDoItem(item)),
    addSubItem: (id, item) => dispatch(addSubItem(id, item)),
    deleteSubItemsState: (id, parentId) => dispatch(deleteSubItemsState(id, parentId)),
    editSubItem: (item, parentId) => dispatch(editSubItem(item, parentId)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)

