import { gql } from '@apollo/client';

export const ME = ggl`
    query me {
        user {
            _id: ID!
            username: String!
            email: String!
            bookCount: Int!
            savedBooks: [Book]
        }
    }
`;