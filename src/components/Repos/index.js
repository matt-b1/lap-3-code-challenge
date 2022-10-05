import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '../Card'

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
                        addRepos.push(repos.name);
                    });
                    setRepos(addRepos);
                    console.log(repos)
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
                <Card name={repo}></Card>
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
                    value={formInput}
                    onChange={handleInput}
                />
                <input type="submit" value='Update!' />
            </form>
            {renderRepos}
        </>
    )
}

export default Repos
