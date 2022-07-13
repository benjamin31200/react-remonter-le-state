import React from 'react';

function Search(props) {
  return (
    <div>
      <input
        value={props.searchValue}
        type="text"
        placeholder="Type here..."
        onChange={event => props.setSearchValue(event.target.value)}
      />
    </div>
  );
}

export default Search;
