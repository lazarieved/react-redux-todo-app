import React, {Component} from "react";

class InputSearchComponent extends Component {
  render() {
    const {searchInputValue, isVisible, handleChange} = this.props;

    return (
      <div>
        <button
          className={'button-add-todo search-button-abs ' + (isVisible ? 'bgcolor ' : '')}
          onClick={this.props.showSearchComponent}
        >
          Search
        </button>
        {isVisible
          ? <div className='input-add-button-block input-search-block'>
            <input
              className='input-add-input input-search-input'
              placeholder='What do you search?'
              value={searchInputValue}
              onChange={e => handleChange(e)}
            />
          </div>
          : null
        }
      </div>
    );
  }
}

export default InputSearchComponent;
