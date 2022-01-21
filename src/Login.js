import React, {useState} from 'react';
import { auth } from './firebase';
import './Login.css';
import { login } from './features/userSlice';
import {useDispatch} from 'react-redux';

function Login() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();


    const loginToApp = (e) =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            dispatch(login({
                email: userAuth.user.email,
                uid:userAuth.user.id,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL,

            }))
        })
    }
    const register = () =>{
          if(!name){
              return alert('Please enter full name')
          }
          auth.createUserWithEmailAndPassword(email, password)
          .then((userAuth) => {
              userAuth.user.updateProfile({
                  displayName: name,
                  photoUrl: profilePic,
              })
              .then(() => {
                  dispatch(login({
                      email: userAuth.user.email,
                      uid: userAuth.user.uid,
                      displayName:name,
                      photoUrl:profilePic

                  }))
              })
          })
          .catch((error) => alert(error));


    }

    return (
        <div className='login'>
            <img src='https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png' alt=''/>
            <form>
                <input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Full Name (required to register '/>
                <input value={profilePic} onChange={(e) => setProfilePic(e.target.value)} type='text' placeholder='Profile Pic (optional) '/>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email'/>
                <input value={password} onChange={(e) => setPassword(e.target.value)}   type='password' placeholder='Password'/>
                <button type='submit' onClick={loginToApp} >Sign In</button>
            </form>
            <p>Not a member?
                <span className='login_register' onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login
