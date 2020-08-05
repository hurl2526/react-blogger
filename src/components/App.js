import React, { Component } from 'react';
import blogs from '../data/data';
import Search from './Search';
import Header from './Header';
import CreateBlog from './CreateBlog';
import Blogs from './Blogs'

// function searchIt(term) {
//   return function (item) {
//     return item.subject.toLowerCase().includes(term.toLowerCase());
//   };
// }
// let searchIt = (term) => (item) =>
//   item.subject.toLowerCase().includes(term.toLowerCase());

class App extends Component {
  state = {
    blogs,
    searchTerm: '',
  };
  // constructor() {
  //   super();
  //   this.state = {
  //     blogs,
  //   };
  // this.onDelete = this.onDelete.bind(this)
  // }

  onDelete = (objectId) => {
    const updateBlog = this.state.blogs.filter(
      (item) => item.objectId !== objectId
    );
    //this filter makes a new array from blogs and grabs all the items that dont have the current id you grabbed from the onclick below
    this.setState({
      blogs: updateBlog,
    });
    //if using big arrow function no need to bind above otherwise
    // console.log(`Delete ${id}`);
  };

  handleChange = (event) => {
    this.setState(
      {
        searchTerm: event.target.value,
      },
      () => {
        console.log(this.state.searchTerm);
      }
    );
  };

  handleBlogSubmit = (event, blog) => {
    event.preventDefault();
    let updatedBlogs = [blog,...this.state.blogs];
    this.setState({
      blogs: updatedBlogs
    })
  };

  onUpdate=(id)=>{
    console.log(`update ${id}`)
  }

  render() {
    return (
      <>
        <Header />
        <div
          style={{
            marginTop: '100px',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            flexDirection: 'row',
          }}
        >
          <div style={{ width: '50%' }}>
            <Search
              searchTerm={this.state.searchTerm}
              handleChange={this.handleChange}
            />
            <hr
              style={{
                width: '50%',
                color: 'black',
                margin: '50px auto 20px auto',
              }}
            />
            <CreateBlog handleBlogSubmit={this.handleBlogSubmit} />
          </div>
          <div style={{width:'50%'}}>
              <Blogs searchTerm={this.state.searchTerm} blogs={this.state.blogs} onDelete={this.onDelete} onUpdate={this.onUpdate} />
          </div>
          {/* <form className='ui form'>
          <div className='field'>
            <input
              type='text'
              placeholder='Search by Subject..'
              value={this.state.searchTerm}
              onChange={this.handleChange}
            />
          </div>
        </form> */}
          {/* {this.state.blogs
            .filter(searchIt(this.state.searchTerm))
            .map((blog) => {
              const { objectId, title, author, subject, article } = blog;
              return (
                //could be li instead of div wrpped in ul
                <div
                  //key={blog.objectId} if not destructuring
                  key={objectId}
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
                    <div className='description'>{article}</div>
                  </div>
                  <div>
                    <button
                      className='ui primary button'
                      style={{ margin: '10px 15px' }}
                      onClick={() => {
                        this.onDelete(blog.objectId);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                  <div className='extra content'>
                    <a href='/' style={{ paddingRight: '10px' }}>
                      <i aria-hidden='true' className='thumbs up icon'></i>
                      {blog.likes} Likes
                    </a>
                    <a href='/'>
                      <i aria-hidden='true' className='comments icon'></i>
                      {blog.comments} Comments
                    </a>
                  </div>
                  <div> </div>
                </div>
              );
            })} */}
        </div>
      </>
    );
  }
}
// {/* // <div */}
// {/* //   style={{ */}
// {/* //     marginTop: '100',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection: 'column',
//   }}
// >
//   <div className='ui card' style={{ width: '75%', padding: '20px' }}>
//     <div className='content'>
//       <div className='header'>My First Blog</div>
//       <br />
//       <div className='meta'>Author: John Davies</div>
//       <br />
//       <div className='meta'>Subject: News</div>
//       <hr />
//       <div className='description'>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//         eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//         enim ad minim veniam, quis nostrud exercitation ullamco laboris
//         nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
//         reprehenderit in voluptate velit esse cillum dolore eu fugiat
//         nulla pariatur.
//       </div>
//     </div>
//   </div>
// </div>
// ); */}

export default App;
