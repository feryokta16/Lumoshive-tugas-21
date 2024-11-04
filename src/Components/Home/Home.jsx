import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ posts: data });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
  render() {
    return (
      <div className="container">
        <div className="Hero">
          <h1>Mingalaba</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repudiandae, sequi ab voluptatum eaque doloremque perspiciatis error
            doloribus beatae, culpa autem mollitia, quod a officiis. Atque
            consequatur facere beatae dolorem pariatur officiis porro, quod
            eveniet error? Sunt molestias accusantium repudiandae delectus
            quisquam exercitationem magni saepe! Asperiores vero omnis corrupti
            laborum rerum.
          </p>
          <p>social Links</p>
          <i className="bi bi-facebook"></i>
          <i className="bi bi-instagram mx-2"></i>
          <i className="bi bi-twitter"></i>
        </div>
        <hr style={{ backgroundColor: "orange" }} />
        <div className="container">
          <div className="Recent">
            <h4>Recent Post</h4>
            {this.state.posts.splice(0, 3).map((post) => (
              <div key={post.id} className="card">
                <Link className="link" to={`/post/${post.id}`}>
                  <h4 className="">{post.title}</h4>
                </Link>
                <p>8 desember 2022</p>
                <p>{post.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="pindah mx-3">
          <button className="btn btn-outline-primary my-2">
            <Link className="link my-3" to="/allpost">
              All Items <i className="bi bi-arrow-right"></i>
            </Link>
          </button>
        </div>
      </div>
    );
  }
}
export default Home;
