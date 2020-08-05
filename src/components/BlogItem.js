import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

const BlogItem = (props) => {
  const { title, author, subject, article, objectId } = props.blog;
  return (
    <div
      //key={blog.objectId} if not destructuring
      className='ui card'
      style={{ width: '75%', padding: '20px' }}
    >
      <div className='content'>
        <div className='header'>{title}</div>
        <br />
        <div className='meta'>Author: {author}</div>
        <br />
        <div className='meta'>Subject: {subject}</div>
        <hr />
        <div className='description' style={{ whiteSpace: 'pre-wrap' }}>
          {article}
        </div>
      </div>
      <div>
        <Button
          className='ui primary button'
          onClick={() => {
            props.onDelete(objectId);
          }}
        >
          Delete
        </Button>
        <Button
          className='ui primary button'
          onClick={() => {
            props.onUpdate(objectId);
          }}
        >
          Update
        </Button>
      </div>
    </div>
  );
};

BlogItem.propType = {
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func,
  blog: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      author: PropTypes.string,
      subject: PropTypes.string,
      article: PropTypes.string,
      objectId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
};

export default BlogItem;
