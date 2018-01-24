import React, { Component } from 'react'
import { inject } from 'mobx-react'

export default title => {
  return WrappedComponent => {
    return inject('store')(
      class PP extends React.Component {
        componentDidMount() {
          this.props.store.updateTitle(title)
        }

        render() {
          return <WrappedComponent {...this.props} />
        }
      }
    )
  }
}
