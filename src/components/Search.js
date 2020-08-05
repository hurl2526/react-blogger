import React from 'react';
import PropTypes from 'prop-types';


const Search = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: '40px',
      }}
    >
      <h2>Search Blog By Subject</h2>
      <form className='ui form'>
          <div className='field'>
            <input
              type='text'
              placeholder='Search by Subject..'
              value={props.searchTerm}
              onChange={props.handleChange}
            />
          </div>
        </form>
    </div>
  );
};

Search.prototype={
  searchTerm: PropTypes.string,
  handleChange: PropTypes.func,
}
export default Search;
