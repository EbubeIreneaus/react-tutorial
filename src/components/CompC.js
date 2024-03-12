import React, { Component } from 'react'
import { UserConsumer } from './UserComp'

export class CompC extends Component {
  render() {
    return (
      <UserConsumer>
        {
            (user) => {
                return <div>Hello {user.name}</div>
            }
        }
      </UserConsumer>
    )
  }
}

export default CompC