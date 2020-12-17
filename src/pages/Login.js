import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import authActions from '../redux/actions/authActions'
import { useForm } from "react-hook-form";

const Login = (props) => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = async data => await props.logUser(data)

    return(
        <main style={{minHeight: "100vh", display:'flex', justifyContent:'center',backgroundColor:"#B7D9EA"}}>
            <div class="card" style={{width:'60vh', height:'50vh'}}>
                <article class="card-body">
                    <h4 class="card-title text-center mb-4 mt-1">Login</h4>
                    <hr/>
                    <p class="text-success text-center">JediBook</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="form-group">
                    <div class="input-group">
                        <label>Email</label>
                        <input class="input-group" name="email" type="email" ref={register({ required: true })} />
                        {errors.email && <span>This field is required</span>}
                    </div>
                    </div>
                    <div class="form-group">
                    <div class="input-group">
                        <label>Password</label>
                        <input class="input-group" name="password" type="password"  ref={register({ required: true })} />
                        {errors.password && <span>This field is required</span>}
                    </div>
                    </div>
                    <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-block">Login</button>
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