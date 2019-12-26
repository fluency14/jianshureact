import React, { Component } from 'react';
import { HomeWrapper, HomeLeft, HomeRight } from './style'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <HomeWrapper>
        <HomeLeft></HomeLeft>
        <HomeRight></HomeRight>
      </HomeWrapper>
     );
  }
}
 
export default Home;