import React from 'react'
import Link from 'gatsby-link'
import { inject, observer } from 'mobx-react'
import { Title } from '../components'

@Title('第二页')
@inject(stores => ({
  updateTitle: stores.store.updateTitle,
}))
@observer
export default class SecondPage extends React.Component {
  render() {
    return (
      <div>
        <h1 onClick={() => this.props.updateTitle('aaa')}>
          Hi from the second page
        </h1>
        <p>Welcome to page 2</p>
        {[1, 2, 3, 4].map(x => <h1 key={x}>{x}</h1>)}
        <Link to="/">Go back to the homepage</Link>
      </div>
    )
  }
}
