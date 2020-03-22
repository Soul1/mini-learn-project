import React, {Component} from 'react';
import MySkills from "../../Component/MySkills/MySkills";
import {connect} from "react-redux";

class MySkillsContainer extends Component {
  render() {
    return <MySkills arrSkills={this.props.arrSkills}/>
  }
}

const mapStateToProps = (state) => ({
  arrSkills: state.mySkills.skills
});

export default connect(mapStateToProps) (MySkillsContainer);