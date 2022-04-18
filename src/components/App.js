import React from "react";
import Header from "./Header";
import FriendList from "./FriendList";
import Feed from "./Feed";

function App() {
  return (
    <React.Fragment>
      <Header />
      <FriendList />
      <Feed />
    </React.Fragment>
  );
}

export default App;