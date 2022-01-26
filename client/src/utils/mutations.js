import { gql } from '@apollo/client';

export const LOGIN = ggl`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            _id
            email
            password
        }
    }
`;

export const ADD_USER = ggl`
    mutation addUser(username: String!, $password: String!) {
        addUser(username: $email, password: $password) {
            username
            password
        }
    }
`;

export const SAVE_BOOK = ggl`
    mutation saveBook(book: [Book]) {
        saveBook(book: $book) {
            book
        }
    }
`;

export const REMOVE_BOOK = ggl`
    mutation removeBook(bookId: Int!) {
        removeBook(bookId: $bookId) {
            bookId
        }
    }
`;

