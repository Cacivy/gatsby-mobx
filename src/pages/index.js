import React from 'react'
import Link from 'gatsby-link'

const list = [
  {
    title: 11,
  },
  {
    title: 22,
  },
  {
    title: 33,
  },
]

const IndexPage = () => (
  <div>
    <h1>Hi peopel</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    {list.map(x => <span key={x.title}>{x.title}</span>)}
  </div>
)

export default IndexPage
