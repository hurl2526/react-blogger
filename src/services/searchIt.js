import PropTypes from 'prop-types';

let searchIt = (term) => (item) =>
  item.subject.toLowerCase().includes(term.toLowerCase());

  export default searchIt;

  searchIt.prototype={
    subject: PropTypes.string
  }