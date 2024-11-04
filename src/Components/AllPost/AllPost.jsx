import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

class AllPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      pagination: {},
      page: 1,
    };
  }

  componentDidMount() {
    this.fetchPosts();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.fetchPosts();
    }
  }

  fetchPosts = () => {
    axios
      .get(`http://localhost:3000/posts?_per_page=5&_page=${this.state.page}`)
      .then((response) => {
        this.setState({
          posts: response.data.data,
          pagination: {
            first: response.data.first,
            prev: response.data.prev,
            next: response.data.next,
            last: response.data.last,
          },
        });
      })
      .catch((error) => {
        console.error("error", error);
      });
  };
  handlePageChange = (page) => {
    this.setState({ page });
  };

  render() {
    const { pagination } = this.state;
    return (
      <div className="container">
        <div className="Recent">
          {this.state.posts.map((post) => (
            <div key={post.id} className="card">
              <Link className="link" to={`/post/${post.id}`}>
                <h3 className="">{post.title}</h3>
              </Link>
              <p>{post.desc}</p>
              <Link className="link" to={`/post/${post.id}`}>
                Read More
              </Link>
            </div>
          ))}
        </div>
        <div className="d-flex justify-space-between">
          <button
            className="btn btn-primary mx-2 my-2"
            disabled={pagination.prev === null}
            onClick={() => this.handlePageChange(pagination.prev)}
          >
            <i className="bi bi-arrow-left mx-1"></i>
            Previous
          </button>
          <button
            className="btn btn-warning mx-2 my-2"
            disabled={pagination.next === null}
            onClick={() => this.handlePageChange(pagination.next)}
          >
            Next
            <i className="bi bi-arrow-right mx-1"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default AllPost;
