import React, { useEffect, useState } from 'react';
import image from '../assets/elaleph.jpg'
import { connect } from 'react-redux'
import bookActions from '../redux/actions/bookActions'

const Book = (props) => {

    const [book, setBook] = useState()

    useEffect(async () => {
        const bookId = props.match.params.id
        await props.getOneBook(bookId)
    }, [])

    return(
        <main style={{minHeight: "70vh", display:'flex', flexDirection:'column', justifyContent:'space-evenly'}}>
            <section id="contact" class="contact">
                <div class="container">
                    <div class="row" style={{display: 'flex',  justifyContent: 'space-around'}}>

                        <div class=" d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                            <div class="info">
                                 <img src={`${image}`}></img>
                            </div>

                        </div>

                        <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                            <div>
                                {props.book !== undefined ? props.book.map(info => {
                                return(
                                        <>
                                            <h1>{info.title}</h1>
                                            <h3>{info.author.firstName} {info.author.lastName}</h3>
                                            <h3>{info.category === "literatura_universal" ? "Literatura Universal" :
                                                info.category === "literatura_fantastica" ? "Literatura Fantastica" :
                                                info.category === "ciencia_ficcion" ? "Ciencia Ficcion" :
                                                info.category === "literatura_latinoamericana" ? "Literatura Latinoamericana" : 
                                                info.category === "literatura_argentina" ? "Literatura Argentina" : <></>
                                                }</h3>
                                        </>
                                    )
                                })
                                : <h1>No book</h1>}
                                <button href="#about" class="btn btn-outline-info">Buy</button>
                            </div>

                        </div>

                    </div>

                </div>
            </section>
        </main>
    )
}

const mapStateToProps = state => {
    return{
        book: state.bookReducer.oneBook
    }
}

const mapDispatchToProps = {
    getOneBook: bookActions.getOneBook,

}

export default connect(mapStateToProps, mapDispatchToProps)(Book)