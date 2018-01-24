import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Header, Footer } from '../components'
import './index.css'
import styled from 'styled-components'
import { inject, observer } from 'mobx-react'

const Content = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

@inject(stores => ({
  title: stores.store.title
}))
@observer
class TemplateWrapper extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    return (
      <div>
        <Helmet
          title={this.props.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header />
        <Content>{this.props.children()}</Content>
        <Footer />
      </div>
    )
  }
}

export default TemplateWrapper
