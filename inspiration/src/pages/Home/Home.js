import React from "react";
import "./Home.css";
import Images from "../../components/Images/Images";
import { Redirect } from "react-router-dom";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [],
      redirect: false,
    };
  }
  componentDidMount() {
    fetch("https://api.unsplash.com/photos/random?count=12", {
      headers: {
        Authorization: `Client-ID Qh7NQWubxcXnPMO1m8PhAf1FT_CUiB_MUnOpBuTTl_4`,
      },
    })
      .then((response) => {
        if (response.headers.get("X-Ratelimit-Remaining") < 1) {
          this.setState({ redirect: true });
        }
        return response.json();
      })
      .then((data) => {
        if (!this.state.redirect) {
          this.setState({
            images: data,
          });
        }
      })
      .catch((error) => console.error(error));
  }
  render() {
    console.log(this.state.redirect);
    if (this.state.redirect) {
      return <Redirect to="/rate-limit-exceeded" />;
    }

    return (
      <div className="home">
        <h1 className="header">Inspiration Of The Day</h1>
        <Images images={this.state.images} />
      </div>
    );
  }
}

export default Home;
