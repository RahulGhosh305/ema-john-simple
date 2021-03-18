import { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { userContext } from "../../App";
import { createUserWithEmailAndPassword, handleGoogleSignIn, handleGoogleSignOut, initializeLoginFramework, signInWithEmailAndPassword } from "./LoginManager";


function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
    error: "",
    success: false,
  });
  const [loggedUser, setLoggedUser] = useContext(userContext)

    
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } }


  initializeLoginFramework();

  const googleSignIn = () => {
    handleGoogleSignIn()
    .then(res => {
        handleResponse(res, true)
    })
  }

  const googleSignOut = () => {
    handleGoogleSignOut()
    .then(res => {
        handleResponse(res, false)
    })
  }


  const handleResponse = (res, redirect) => {
    setUser(res)
    setLoggedUser(res)
    if(redirect){
        history.replace(from);
    }
  }


  const authStyle = {
    display: "flex",
    justifyContent: "center",
  };

  const handleForm = (e) => {
    if (newUser && user.email && user.password) {
        createUserWithEmailAndPassword(user.name, user.email, user.password)
        .then(res => {
            handleResponse(res, true)
        })
    }
    if (!newUser && user.email && user.password) {
        signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
            handleResponse(res, true)
        })
    }
    e.preventDefault();
  };

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      isFieldValid =
        /[a-z]\d|\d[a-z]/i.test(e.target.value) && e.target.value.length > 3;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };



  return (
    <div style={{textAlign :"center"}}>
      {user.isSignedIn ? (
        <button onClick={googleSignOut}>Sign Out</button>
      ) : (
        <button onClick={googleSignIn}>Sign in</button>
      )}
      <br/>
      <button>SignIn with Facebook</button>
      <br />
      {user.isSignedIn && (
        <div>
          <p> Welcome ,{user.name}</p>
          <p>{user.email}</p>
          <p>{user.password}</p>
        </div>
      )}

      <h1 style={{ textAlign: "center" }}>User Authentication</h1>
      
      <input
        type="checkbox"
        name="newUser"
        onChange={() => setNewUser(!newUser)}
      />
      <label htmlFor="newUser">New User Sign up</label>

      <div style={authStyle}>
        <form onSubmit={handleForm}>
          {newUser && (
            <input
              type="text"
              onBlur={handleBlur}
              name="name"
              placeholder="name"
              required
            />
          )}
          <br />
          <input
            type="text"
            onBlur={handleBlur}
            name="email"
            placeholder="email"
            required
          />
          <br />
          <input
            type="password"
            onBlur={handleBlur}
            name="password"
            placeholder="password"
            required
          />
          <br />
          <input type="submit" value={newUser ? 'Sign up' : 'Sign in'} />

            <p style={{ color: "red" }}>{user.error}</p>
            {user.success && (
                <p style={{ color: "green" }}>
                User {newUser ? "Created" : "log In"} Successfully
                </p>
            )}
        </form>
    
      </div>
    </div>
  );
}

export default Login;
