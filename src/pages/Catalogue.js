import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import image from '../assets/elaleph.jpg'
import { connect } from 'react-redux'
import bookActions from '../redux/actions/bookActions'

const Catalogue = (props) => {

    useEffect(() => {
        props.getAllBooks()
    }, [])

    const id = props.match.params.id
    return(
        <main style={{minHeight: "70vh", display:'flex', flexDirection:'column', justifyContent:'center'}}>
            <section id="portfolio" class="portfolio mt-5 mb-5">
                <div class="container">
                    <div class="section-title" data-aos="fade-up">
                        <h2>Catalogue</h2>
                        <p>Check out our beautifull portfolio</p>
                    </div>
                    <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
                        {props.books !== undefined ? props.books.map(book => {
                            return (
                                <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                                    <div class="portfolio-wrap">
                                        <img src={`${image}`} class="img-fluid" alt=""/>
                                        <div class="portfolio-links">
                                            <NavLink to={`/books/${book.id}`}><h2>{book.title}</h2></NavLink>
                                            <p>{book.author.firstName} {book.author.lastName}</p>
                                        </div>
                                    </div>
                                </div>
                        )}) : <h1>No books</h1>}
                    </div>
                </div>
            </section>
        </main>
    )
}   

const mapStateToProps = state => {
    return{
        books: state.bookReducer.allBooks
    }
}

const mapDispatchToProps = {
    getAllBooks: bookActions.getAllBooks,

}

export default connect(mapStateToProps, mapDispatchToProps)(Catalogue)
