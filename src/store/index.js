import { observable, action } from 'mobx'

class Store {
  @observable title = '首页'

  @action
  updateTitle = title => {
    this.title = title
  }
}

export default new Store()
