import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  // Step 6: Method to fetch posts
  loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({ posts: data }))
      .catch(error => {
        console.error("Error fetching posts:", error);
        this.setState({ hasError: true });
      });
  }

  // Step 7: Lifecycle hook
  componentDidMount() {
    this.loadPosts();
  }

  // Step 9: Error boundary
  componentDidCatch(error, info) {
    alert("An error occurred: " + error);
    console.error("Error caught:", error, info);
  }

  // Step 8: Render method
  render() {
    const { posts, hasError } = this.state;

    if (hasError) {
      return <h3>Something went wrong while loading posts.</h3>;
    }

    return (
      <div>
        <h1>Blog Posts</h1>
        {posts.map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
