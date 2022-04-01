import React, {useState} from 'react';

const LoginPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit', username, password);
    }

    return (
        <div id='login'>
            <h1 className="title">Login Page</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={username}
                    onChange={(event) => setUsername(event.target.value)} />
                </div>
                <div className="field">
                    <label htmlFor="password">Password</label>
                    <input 
                    type="password" 
                    name="password" 
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)} />
                </div>
            <div className="actions">
                <button className="button is-primary">Login</button>
            </div>
            </form>
        </div>
    
    );
}

export default LoginPage;