import { useState, createContext } from 'react'

function Notification ({ message, severity })  {
     const notificationStyles = {
      padding: '20px',
      position: 'absolute',
      top: 120,
      right: 10,
      backgroundColor: severity === 'success' ? 'green' : 'red',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '20px'
    } 
  
    if(message === '') return

    return (
      <div style={notificationStyles}>
        {message}
      </div>
    )
  }
  

export const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('success')

    const setNotification = (severity, message) => {
        setSeverity(severity)
        setMessage(message)

        setTimeout(() => {
            setMessage('')
        }, 3000)
    }

    return(
        <NotificationContext.Provider value={{ setNotification }}>
            <Notification severity={severity} message={message}/>
            {children}
        </NotificationContext.Provider>
    )
}