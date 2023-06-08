import React from 'react'
import './Header.css'

function Header({userData, setUsers}) {
    
    // Create state to hold country
    const [country, setCountry] = React.useState('')

    const handleInput = (e) => {
        console.log(e.target.value)
        // Store text input in state
        setCountry(e.target.value)
    }

    const handleSearch = () => {
        console.log(country)
        // Filter to have only these users
        setUsers(userData.filter(item => item.country.toLowerCase() === country.toLowerCase()))
        // Clear the textbox
        setCountry('')
    }

    const showAll = () => {
        console.log('show')
        // I need users to have what is in userData
        setUsers(userData)
    }

  return (
    <div className="header-container">
        <button onClick={showAll}>Show all</button>
        <div className="search-container">
            <input type="text" value={country} onChange={handleInput} placeholder="Enter country" />
            <button onClick={handleSearch}>Search</button>
        </div>
    </div>
  )
}

export default Header