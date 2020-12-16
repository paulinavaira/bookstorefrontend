import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import authActions from '../redux/actions/authActions'
import customerActions from '../redux/actions/customerActions'

const Register = (props) => {

    const[customer, setCustomer] = useState()

    const handleChange = e => {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value
        })
    }

    const sendInfo = async e => {
        e.preventDefault()
        await props.addCustomer(customer)
    }

    console.log(customer);
    return(
        <main style={{minHeight: "100vh", display:'flex', justifyContent:'center',backgroundColor:"#B7D9EA"}}>
            <div class="card" style={{width:'60vh', height:'50vh'}}>
                <article class="card-body">
                    <h4 class="card-title text-center mb-4 mt-1">Register</h4>
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
                    <button type="submit" class="btn btn-primary btn-block" onClick={sendInfo}> Register  </button>
                    </div>
                    <p class="text-center"><a href="#" class="btn">Forgot password?</a></p>
                    </form>
                </article>
            </div>
        </main>
    )
}

const mapDispatchToProps = {
    addCustomer: authActions.newUser
}


export default connect(null, mapDispatchToProps)(Register)