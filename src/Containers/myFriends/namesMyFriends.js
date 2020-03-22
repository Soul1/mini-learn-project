import React from 'react';
import namesMyFriends from '../../Component/myFriends/namesMyFriends';
import {connect} from "react-redux";
import {setNewName} from "../../redux/reducers/namesMyFriends";

class namesMyFriendsContainer extends React.Component{
  render() {
    return <namesMyFriends arrNamesFriends={this.props.nameMyFriend}
                           setNewName={this.props.setNewName}/>
  }
}

const mapStateToProps = (state) => ({
  nameMyFriend: state.namesFriends.namesMyFriends,
});

export default connect(mapStateToProps, {setNewName})(namesMyFriendsContainer);