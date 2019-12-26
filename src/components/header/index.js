import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group'

import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoList, SearchInfoItem } from './style'
import  { actionCreators } from './store'


class Header extends Component{
  getSearchList(){
    const { focus, list, page, totalPage, mouse, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
    // 将immutable类型转化为JS
    const newList = list.toJS();
    const pageList = [];
    if( newList.length ){
      for(let i = (page-1)*10; i<page*10; i++){
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }
    if(focus || mouse){
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>热门
            <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage)}>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    }else{
      return null
    }
  }
  render(){
    const { focus, list, handleInputFocus, handleInputBlur } = this.props;
    return ( 
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right"><span className="iconfont">&#xe636;</span></NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focus}
              timeout={200}
              classNames="slide"
            >
              <NavSearch 
                className={focus?'focus':''}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <span className={ focus?'focus iconfont':'iconfont' }>&#xe614;</span>
            {this.getSearchList()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writing"><span className="iconfont">&#xe61d;</span> 写文章</Button>
          <Button className="registered">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    focus: state.get('header').get('focus'),
    list: state.get('header').get('list'),
    page: state.get('header').get('page'),
    totalPage: state.get('header').get('totalPage'),
    mouse: state.get('header').get('mouse')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list){
      dispatch(actionCreators.searchFocus());
      if(list.size === 0){
        dispatch(actionCreators.getList())
      }
    },
    handleInputBlur(){
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter(){
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave(){
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page,totalPage){
      if( page < totalPage ){
        dispatch(actionCreators.changePage(page + 1))
      }else{
        dispatch(actionCreators.changePage(1))
      }
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);