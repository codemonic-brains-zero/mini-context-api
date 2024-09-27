import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';

function Login() {

    const { setUser } = useContext(UserContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password });
        console.log('show: ', username, password);
    }
    return (
        <div>
            <input type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='username' /> &nbsp;
            <input type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='password' /> &nbsp;
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
