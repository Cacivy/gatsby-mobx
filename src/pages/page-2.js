import React from 'react'
import Link from 'gatsby-link'
import { inject, observer } from 'mobx-react'
import { Title } from '../components'

@inject('store')
@observer
@Title('第二页')
export default class SecondPage extends React.Component {
  render() {
    return (
      <div>
        <h1 onClick={() => this.props.store.updateTitle('aaa')}>
          Hi from the second page
        </h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </div>
    )
  }
}
