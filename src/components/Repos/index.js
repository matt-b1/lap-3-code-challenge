import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../Card'
import './style.css'

const Repos = () => {

    const [user, setUser] = useState('')
    const [formInput, setFormInput] = useState('')

    const handleFormSubmit = (e) => {
        e.preventDefault()
        setUser(formInput)
        setFormInput('')
    }

    const handleInput = (e) => {
        setFormInput(e.target.value)
    }

    const [repos, setRepos] = useState([])

    useEffect(() => {

        const fetchRepos = async () => {
            try {
                if (user) {
                    const { data } = await axios.get(`https://api.github.com/users/${user}/repos`)
                    let addRepos = [];
                    data.forEach(repos => {
                        addRepos.push({name: repos.name, stargazers_count: repos.stargazers_count, forks: repos.forks})
                        // stargazers.push(repos.stargazers_count)
                        // forks.push(repos.forks);
                    });
                    setRepos(addRepos);
                    console.log(addRepos)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchRepos()
    }, [user])

    
    const renderRepos = repos.map(repo => {
        return (
            <>
                <Card name={repo.name} stargazers_count={repo.stargazers_count} forks={repo.forks} ></Card>
            </>
        )
    })

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    id='username'
                    name='username'
                    placeholder='Thats not my name'
                    value={formInput}
                    onChange={handleInput}
                />
                <input type="submit" value='Search!' />
            </form>
            {renderRepos}
        </div>
    )
}

export default Repos
