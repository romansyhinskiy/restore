import React, {Component} from 'react'
import BookListItem from "../book-list-item";
import {connect} from "react-redux";
import withBookstoreService from "../hoc/with-bookstore-service";
import { fetchBooks, bookAddedToCart} from '../../actions/index'
import './book-list.css'
import Spinner from '../spinner/spinner'
import ErrorIndicator from "../error-indicator";

class BookList extends Component {

    componentDidMount() {
        this.props.fetchBooks()
    }

    render() {
        const {books, error, onAddedToCart} = this.props;
        if(this.props.loading){
            return <Spinner />
        }
        if(error){
            return <ErrorIndicator />
        }
        return (
            <ul className='book-list'>
                {
                    books.map(book => {
                        return (
                            <li key={book.id}><BookListItem book={book} onAddedToCart={() => onAddedToCart(book.id)}/></li>
                        )
                    })
                }
            </ul>
        )
    }
}

const mapStateToProps = ({books, loading, error}) => {
    return {books, loading, error}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const {bookstoreService} = ownProps;
    return{
        fetchBooks: fetchBooks(bookstoreService, dispatch),
        onAddedToCart: (id) => dispatch(bookAddedToCart(id))
    }
}

export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList))