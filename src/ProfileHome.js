import React, { Component } from "react";
import ReactDOM from "react-dom";

import FavoriteShows from "./components/FavoriteShows";

import getFavoriteShowsByUserId from "./api";

const App = () => (
  <ProfileHome userId="broadwaycom">
    {userInfo =>
      userInfo === null ? (
        <div className="ProfileHome container">
          <img
            src="https://media.giphy.com/media/N256GFy1u6M6Y/giphy.gif"
            alt="Loading"
            className="loading"
          />
        </div>
      ) : (
        <div className="ProfileHome container">
          <div className="ProfileHome__head">Welcome, {userInfo.userId}</div>
          <FavoriteShows shows={userInfo.shows} />
        </div>
      )
    }
  </ProfileHome>
);

class ProfileHome extends Component {
  constructor(props) {
    super(props);
    this.state = { userInfo: null };
  }

  componentDidMount() {
    getFavoriteShowsByUserId(this.props.userId).then(userInfo =>
      this.setState({ userInfo })
    );
  }

  render() {
    return this.props.children(this.state.userInfo);
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
