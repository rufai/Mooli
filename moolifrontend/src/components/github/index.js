import {useState, useEffect} from 'react'
import axios from 'axios'

function SundayGithub() {

    const endpoint = "https://api.github.com/users/SunnyInspired"

    const [login, setLogin] = useState("")
    const [avatarUrl, setAvatarUrl] = useState("")


    useEffect(() => {
        axios.get(endpoint).then(function (response) {
            setLogin(response.data.login)
            setAvatarUrl(response.data.avatar_url)
        }).catch(function (error) {
            console.warn(error)
        })
    }, [login, avatarUrl])

    return (
        <div>
            <div>
                <strong>Name</strong>
                <p>{login}</p>
            </div>
            <div>
                <strong>ID</strong>
                <p>{login}</p>
            </div>
            <img src={avatarUrl}
                alt={login}/>
        </div>
    )

}

export default SundayGithub;
