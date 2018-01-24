import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Header, Footer } from '../components'
import './index.css'
import styled from 'styled-components'
import { Provider, inject, observer } from 'mobx-react'
import store from '../store/'

const Content = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

@observer
class TemplateWrapper extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <Helmet
            title={store.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          />
          <Header />
          <Content>{this.props.children()}</Content>
          <Footer />
        </div>
      </Provider>
    )
  }
}

export default TemplateWrapper
