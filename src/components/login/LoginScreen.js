import React,{useContext} from 'react'
import {AuthContext} from '../../auth/AuthContext';
import { types } from "../../types/types";

export const LoginScreen = ({history}) => {
    const {dispatch,user} = useContext(AuthContext);

    const handleLogin=()=>{
        
        dispatch({
            type:types.login,
            payload:{
                name:'Alfredo'
            }
        })
        history.replace("/")
    }
    return (
        <div className="container mt-5">
            Login
            <hr />
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
        </div>
    )
}
