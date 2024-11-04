import React from "react";
// import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Post() {
  const params = useParams();
  const navigate = useNavigate();
  return <Detail params={params} navigate={navigate} />;
}

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
    };
  }
  componentDidMount() {
    const { id } = this.props.params;
    this.fetchDetail(id);
  }
  fetchDetail = (id) => {
    axios
      .get(`http://localhost:3000/posts/${id}`)
      .then((response) => {
        this.setState({ post: response.data });
      })
      .catch((error) => {
        console.error("error", error);
      });
  };

  render() {
    const { post } = this.state;
    if (!post) {
      return <p>Loading</p>;
    }
    return (
      <div className="container">
        <h1>{post.title}</h1>
        <p>{post.desc}</p>
        <p>coba</p>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <button
          className="btn btn-danger my-2"
          onClick={() => this.props.navigate(-1)}
        >
          Back
        </button>
      </div>
    );
  }
}

export default Post;
