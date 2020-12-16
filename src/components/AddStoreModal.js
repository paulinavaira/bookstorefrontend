import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import image from '../assets/elaleph.jpg'
import { connect } from 'react-redux'
import adminActions from '../redux/actions/adminActions'

const AddStoreModal = (props) => {

    const[store, setStore] = useState()

    const handleChange = e => {
        setStore({
            ...store,
            [e.target.name]: e.target.value
        })
    }

    const sendInfo = async e => {
        e.preventDefault()
        await props.addStore(store)
    }

    return(
        <div class="modal fade" id="storeModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Add new store</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="name" class="col-form-label">Name</label>
                                <input type="text" class="form-control" id="name" name="name" onChange={handleChange}/>
                            </div>
                            <div class="form-group">
                                <label for="address" class="col-form-label">Address</label>
                                <input type="text" class="form-control" id="address" name="address" onChange={handleChange}/>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary" onClick={sendInfo}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    addStore: adminActions.addStore
}


export default connect(null, mapDispatchToProps)(AddStoreModal)