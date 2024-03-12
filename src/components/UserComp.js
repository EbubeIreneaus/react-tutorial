import React from 'react'
const obj = {
    name: 'Okigwe Ebube Ireneaus'
}
const UserContext = React.createContext(obj)

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}

export default UserContext