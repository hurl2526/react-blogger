import React, { Component } from 'react';


class CreateBlog extends Component {
  constructor() {
    super();
    this.state = {
      blog: {
        title: '',
        author: '',
        subject: '',
        article: '',
        objectId: Date.now(),
      },
    };
  }

  handleChange = (event) => {
    // if(event.target.name ==='author')
    let updatedBlog = { ...this.state.blog };
    updatedBlog[event.target.name] = event.target.value;
    
    this.setState(
      {
        blog: updatedBlog,
      }
    );
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let emptyBlog = {
      title: '',
      author: '',
      article: '',
      subject: '',
      objectId: Date.now(),
    };
    // console.log(this.state.blog)
    this.props.handleBlogSubmit(event,this.state.blog);

    this.setState(
      {
        blog: emptyBlog,
      }
      // event.target.reset()
    );
  };

  render() {
    return (
      <div style={{ paddingLeft: '30px', width: '100%' }}>
        <h2>Create Blog: </h2>
        <form onSubmit={this.handleSubmit} className='ui form'>
          <div
            className='equal width fields'
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              width: '50%',
            }}
          >
            <div className='field'>
              <label htmlFor='author'>Author:</label>
              <div className='ui fluid input'>
                <input
                  type='text'
                  name='author'
                  onChange={this.handleChange}
                  value={this.state.blog.author}
                />
              </div>
            </div>
            <div className='field'>
              <label htmlFor='title'>Title:</label>
              <div className='ui fluid input'>
                <input
                  type='text'
                  name='title'
                  onChange={this.handleChange}
                  value={this.state.blog.title}
                />
              </div>
            </div>
            <div className='field'>
              <label htmlFor='subject'>Subject:</label>
              <div className='ui fluid input'>
                <input
                  type='text'
                  name='subject'
                  onChange={this.handleChange}
                  value={this.state.blog.subject}
                />
              </div>
            </div>
            <div className='field'>
              <label htmlFor='article'>Article:</label>
              <div className='ui fluid input'>
                <textarea
                  id='article'
                  name='article'
                  cols='30'
                  rows='10'
                  value={this.state.blog.article}
                  onChange={this.handleChange}
                ></textarea>
              </div>
            </div>
          </div>
          <div className='field'>
            <button type='submit' className='ui button green'>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}


export default CreateBlog;
