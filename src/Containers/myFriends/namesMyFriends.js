import React from 'react';
import NamesMyFriends from '../../Component/myFriends/namesMyFriends';
import {connect} from "react-redux";
import {setNewName} from "../../redux/reducers/namesMyFriends";

class NamesMyFriendsContainer extends React.Component{
  render() {
    return <NamesMyFriends arrNamesFriends={this.props.nameMyFriend}
                           setNewName={this.props.setNewName}/>
  }
}

const mapStateToProps = (state) => ({
  nameMyFriend: state.namesFriends.namesMyFriends,
});

export default connect(mapStateToProps, {setNewName})(NamesMyFriendsContainer);