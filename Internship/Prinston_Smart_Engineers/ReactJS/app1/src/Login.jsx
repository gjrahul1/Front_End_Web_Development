import React, {useState} from "react";

function Login()
{

    const [userName, setUserName] = useState("test");
    const [password, setPassword] = useState("");
    

    return (
        <div>
            <h1>This is Login Component</h1>
            Email: <input type="text" name="" id="" placeholder="Email"/>
            <br /> <br />
            Password: <input type="text" name="" id="" placeholder="Password"/>
        </div>
    )
}

export default Login;