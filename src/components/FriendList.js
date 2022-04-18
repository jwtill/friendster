import React from "react";
import Friend from "./Friend";

const mainFriendList = [
  {
    name: 'John Toastenson',
    location: 'Broadview, AL'
  },
  {
    name: 'Edgar Robin Penn',
    location: 'Angleton, FR'
  },
  {
    name: 'Duke of Earliantension',
    location: 'Big Sandwich, BR'
  }
];

function FriendList() {
  return (
    <React.Fragment>
      <hr />
      {mainFriendList.map((friend, index) =>
        <Friend name={friend.name} // Accesing Friend component from Friend.js
          location={friend.location}
          key="index" />
      )}
      <hr/>
    </React.Fragment>
  );
}

export default FriendList;