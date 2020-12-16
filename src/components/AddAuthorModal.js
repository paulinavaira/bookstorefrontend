import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import image from '../assets/elaleph.jpg'
import { connect } from 'react-redux'
import adminActions from '../redux/actions/adminActions'

const AddAuthorModal = (props) => {

    const[author, setAuthor] = useState()

    const handleChange = e => {
        setAuthor({
            ...author,
            [e.target.name]: e.target.value
        })
    }

    const sendInfo = async e => {
        e.preventDefault()
        await props.addAuthor(author)
    }

    return(
        <div class="modal fade" id="authorModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Add new author</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="firstName" class="col-form-label">First name</label>
                                <input type="text" class="form-control" id="firstName" name="firstName" onChange={handleChange}/>
                            </div>
                            <div class="form-group">
                                <label for="lastName" class="col-form-label">Last name</label>
                                <input type="text" class="form-control" id="lastName" name="lastName" onChange={handleChange}/>
                            </div>
                            <div class="form-group">
                                <label for="nationality" class="col-form-label">Nationality</label>
                                <input type="text" class="form-control" id="nationality" name="nationality" onChange={handleChange}/>
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
    addAuthor: adminActions.addAuthor
}


export default connect(null, mapDispatchToProps)(AddAuthorModal)