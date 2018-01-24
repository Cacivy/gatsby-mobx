import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`

const HeaderContent = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  overflow: hidden;
`

const H1 = styled.h1`
  margin: 0;
  float: left;
`

export const LinkWapper = styled(Link)`
  color: #fff;
  text-decoration: none;
`

const menuList = []

for (let i = 0; i < 5; i++) {
  menuList.push({
    title: 'menu' + i,
    url: 'page-' + i,
  })
}

const MenuUl = styled.ul`
  margin: 0;
  padding: 0;
  overflow: hidden;
  float: right;
`

const MenuLi = styled.li`
  float: left;
  margin: 10px;
  list-style: none;
  color: #fff;
`

const Menu = (props) => (
  <MenuUl>
    {props.list.map(menu => (
      <MenuLi>
        <LinkWapper to={menu.url}>{menu.title}</LinkWapper>
      </MenuLi>
    ))}
  </MenuUl>
)

Menu.propTypes = {
  list: PropTypes.array
}

const Header = () => (
  <HeaderContainer>
    <HeaderContent>
      <H1>
        <LinkWapper to="/">Gatsby</LinkWapper>
      </H1>
      <Menu list={menuList} />
    </HeaderContent>
  </HeaderContainer>
)

export default Header
