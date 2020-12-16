import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import image from '../assets/elaleph.jpg'

const CustomerCart = () => {

    const [books, setBooks] = useState()

    useEffect(() => { 
        fetch('http://localhost:8080/api/books')
        .then(response => response.json())
        .then(data => setBooks(data))
    }, [])

    return(
        <main style={{minHeight: "70vh", display:'flex', flexDirection:'column'}}>
            <section id="portfolio" class="portfolio mt-5 mb-5">
                <div class="container">

                    <div class="section-title" data-aos="fade-up">
                        <h2>Your cart</h2>
                    </div>
                    <div>
                        <table class="table table-hover table-bordered">
                            <thead>
                                <tr class="table-active">
                                    <th scope="col"></th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Stock</th>
                                    <th scope="col">Modify</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                        {books !== undefined ? books.map(book => {
                                return (
                                <tbody>
                                    <tr>
                                        <td><img src={`${image}`} class="img-fluid" style={{width:'12vh'}} alt=""/></td>
                                        <td><h4>{book.title}</h4></td>
                                        <td>$99.99</td>
                                        <td>22</td>
                                        <td>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
                                            </svg>
                                        </td>
                                        <td>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                                            </svg>
                                        </td>
                                    </tr>
                                </tbody>
                                    
                            )}) : <h1>No books</h1>}
                            <tfoot>
                                <tr class="table-active">
                                    <td colspan="6">Add a book
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square-fill ml-2" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                                        </svg>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <button type="button" class="btn btn-primary mr-2">Keep buying</button>
                    <button type="button" class="btn btn-primary mr-2">Clean cart</button>
                    <button type="button" class="btn btn-success">Continue</button>
                    </div>
            </section>
        </main>
    )
}

export default CustomerCart
