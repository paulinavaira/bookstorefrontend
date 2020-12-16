import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import authActions from '../redux/actions/authActions'

const Login = (props) => {

    const[user, setUser] = useState()

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const sendInfo = async e => {
        e.preventDefault()
        await props.logUser(user)
    }

    console.log(user);
    return(
        <main style={{minHeight: "100vh", display:'flex', justifyContent:'center',backgroundColor:"#B7D9EA"}}>
            <div class="card" style={{width:'60vh', height:'50vh'}}>
                <article class="card-body">
                    <h4 class="card-title text-center mb-4 mt-1">Login</h4>
                    <hr/>
                    <p class="text-success text-center">JediBook</p>
                    <form>
                    <div class="form-group">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"> <i class="fa fa-user"></i> </span>
                        </div>
                        <input name="email" class="form-control" placeholder="Email" type="email" onChange={handleChange}/>
                    </div>
                    </div>
                    <div class="form-group">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                        </div>
                        <input name="password" class="form-control" placeholder="******" type="password" onChange={handleChange}/>
                    </div>
                    </div>
                    <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-block" onClick={sendInfo}> Login  </button>
                    </div>
                    <p class="text-center"><a href="#" class="btn">Forgot password?</a></p>
                    </form>
                </article>
            </div>
        </main>
    )
}

const mapDispatchToProps = {
    logUser: authActions.logUser
}


export default connect(null, mapDispatchToProps)(Login)