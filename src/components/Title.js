import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

export default title => {
  return WrappedComponent => {
    return @inject(stores => ({
      updateTitle: stores.store.updateTitle,
    }))
    @observer
    class PP extends React.Component {
      componentDidMount() {
        this.props.updateTitle(title)
      }

      render() {
        return <WrappedComponent {...this.props} />
      }
    }
  }
}
