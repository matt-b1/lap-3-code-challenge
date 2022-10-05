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
        console.log(user);
    }

    const handleInput = (e) => {
        setUserInput(e.target.value)
    }

    const [repos, setRepos] = useState([])

    useEffect(() => {

        const fetchRepos = async () => {
            try {
                const { data } = await axios.get(`https://api.github.com/users/jakerinahmed/repos`)
                let addRepos = [];
                data.forEach(repos => {
                    addRepos.push(repos.name);
                });
                setRepos(prevState => [...prevState, addRepos]);
                renderRepos();
            } catch (error) {
                console.log(error)
            }
        }
        fetchRepos()
    }, [repos])

    const renderRepos = repos.map(repo => {
        return (
            <>
                <Card name={repo[0]}></Card>
            </>
        )
    })



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
