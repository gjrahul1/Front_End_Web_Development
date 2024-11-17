import React, {useState} from 'react';

function SignUp() {

    const [userName, setUserName] = useState("Name");

    const [userEmail, setEmail] = useState("sample@email.com");

    const [userPassword, setPassword] = useState("");

    // console.log("username",userName);


    function handleUserName(e) {
        // e.target.value returns value entired by the user
        // console.log(e.target.value);      
        
        setUserName(e.target.value);

    }

    function handleEmail(f) {

        // console.log(f.target.value);

        setEmail(f.target.value);

    }

    function handlePassword(f) {

        // console.log(f.target.value);

        setPassword(f.target.value);
    }

    console.log("User", userName);

    console.log("Email", userEmail);

    console.log("Password", userPassword);

    return (

        <div>
            Username: <input type="text" name="" id="" placeholder='Enter Username'
            onChange={handleUserName}
            />
            <br /> <br />
            Email: <input type="text" name="" id="" placeholder='Enter Email'
            onChange={handleEmail}
            />
            <br /> <br />
            Password: <input type="password" name="" id="" placeholder='Enter Password' onChange={handlePassword}
            />
            <br /> <br />
            <button>Register Now</button>
        </div>
    );
}

export default SignUp;