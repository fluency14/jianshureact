import styled from 'styled-components'
import logo from '../../assets/images/nav-logo.png'

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0
`
export const Logo = styled.a.attrs({
  href:'/'
})`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logo});
  background-size: contain;
`
export const Nav = styled.div`
  width: 960px;
  padding-right: 50px;
  box-sizing: border-box;
  height: 100%;
  margin: 0 auto;
`
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 16px;
  color: #333;
  &.left{
    float: left;
  }
  &.right{
    float: right;
    color: #969696;
    font-size: 15px;
  }
  &.active{
    color: #ea6f5a;
  }
`
export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  .iconfont{
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
    color: #969696;
    &.focus{
      background: #969696;
      color: #fff;
    }
  }
`
export const NavSearch = styled.input.attrs({
  placeholder:'搜索'
})`
  width: 160px;
  height: 38px;
  padding: 0 35px 0 20px;
  margin-top: 9px;
  margin-left: 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  color: #666;
  font-size: 14px;
  &::placeholder{
    color: #999;
  }
  &.focus{
    width: 240px;
  }
  &.slide-enter{
    width:160px;
    transition: all 0.25s ease-out;
  }
  &.slide-enter-active{
    width: 240px;
  }
  &.slide-exit{
    transition: all 0.25s ease-out;
  }
  &.slide-exit-active{
    width: 160px;
  }
`
export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 56px;
`
export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 25px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ea6f5a;
  &.registered{
    color: #ea6f5a;
  }
  &.writing{
    background: #ea6f5a;
    color: #fff;
  }
`
export const SearchInfo = styled.div`
  position: absolute;
  width: 240px;
  left: 0;
  top: 56px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgb(0,0,0,0.2)
`
export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 13px;
  color: #969696;
`
export const SearchInfoSwitch = styled.span`
  float: right;
  cursor: pointer;
  user-select: none;
`
export const SearchInfoList = styled.div`
  overflow: hidden;
`
export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  line-height: 20px;
  margin: 0 6px 15px 6px;
  padding: 0 5px;
  font-size: 12px;
  border-radius: 3px;
  border: 1px solid #ddd;
  color: #787878;
`