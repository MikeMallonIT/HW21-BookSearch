const typeDefs = gql`
    type Query {
        user: [User]
    }

    type Mutation {
        login(email: String!, password: String!): User
        addUser(username: String!, password: String): User
        saveBook(book: [Book]): User
        removeBook(bookId: Int!): User
    }

    type Book {
        authors: [String!]
        description: String!
        title: String!
        bookId: Int!
        image: String!
        link: String!
    }

    type User {
        _id: ID!
        username: String!
        email: String!
        bookCount: Int!
        savedBooks: [Book]
    }

    type Auth {
        token: String
        user: [User]
    }
`;


module.exports = typeDefs;