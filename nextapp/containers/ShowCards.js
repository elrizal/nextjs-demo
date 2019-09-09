import React, { Component } from "react";
import ImgCard from '../components/card';
import postData from '../data/posts';
import Layout from '../pages/layout';
import axios from 'axios';

class ShowCards extends Component {
  state = {
    posts: [],
    selectedPostId: null
  };
  componentDidMount() {
    axios.get("../data/posts.json").then(response => {
      const posts = response.data.slice(0, 10);
      const updatedPosts = posts.map(post => {
        return {
          ...post,
        };
      });
      this.setState({ posts: updatedPosts });
      console.log(response);
    });
  }

  render() {
    const postedData = this.postData;
    const posts = this.state.posts.map(post => {
      return (
        <ImgCard
          key={post.id}
          name={post.name}
          author={post.author}
          // clicked={() => this.postSelectedHandler(post.id)}
        />
      );
    });

    return(
      <div>
          {posts}
      </div>
    );
  }
}

export default ShowCards;
