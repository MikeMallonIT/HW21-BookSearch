const { User } = require('../models');

const resolvers = {
    Query: {
        user: async () => {
            return User.find({});
        },
        userBooks: async(parent, {username}) => {
            const params = username ? { username } : {};
            return User.find(params);
        },
    },
    Mutation: {
        saveBook: async (parent, { username, bookId}) => {
            const savedBook = await User.findOneAndUpdate(
                { username },
                { $inc: { savedBooks: bookId } },
            )
        },
    }
};