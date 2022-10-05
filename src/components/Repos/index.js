import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../Card'

const Repos = () => {

    const [userInput, setUserInput] = useState('')
    const [user, setUser] = useState('')

    const handleFormSubmit = (e) => {
        e.preventDefault()
        setUser(userInput)
        setUserInput('')
    }

    const handleInput = (e) => {
        setUserInput(e.target.value)
    }

    const [repos, setRepos] = useState([])

    useEffect(() => {

        const fetchRepos = async () => {
            try {
                const { data } = await axios.get(`https://api.github.com/users/jakerinahmed/repos`)
                console.log(data.forEach(repos => {console.log(repos.name)}
                ))
                setRepos(data.forEach(repos => console.log(repos.name)))
                // console.log(data.forEach(repos => repos.name))
            } catch (error) {
                console.log(error)
            }
        }
        fetchRepos()
    }, [user])

    const renderRepos = () => {
        return (
            <>
                <Card name={repos.name} />
            </>
        )
    }


    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    id='username'
                    name='username'
                    placeholder='Thats not my name'
                    value={userInput}
                    onChange={handleInput}
                />
                <input type="submit" value='Update!' />
            </form>
            {renderRepos}
        </>
    )
}

export default Repos
