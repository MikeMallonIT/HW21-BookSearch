// import user model
const { User } = require('../models');
// import sign token function from auth
const { signToken } = require('../utils/auth');



const resolvers = {
    Query: {
      me: async () => {
        return User.find({})
      }
    },
    Mutation: {
      login: async(parent, {email, password}) => {
        const user = await User.findOne(
          { email: email });
        if (!user) {
          return res.status(400).json({ message: "Can't find this user" });
        }
        
        const correctPw = await user.isCorrectPassword(password);
        
        if (!correctPw) {
          return res.status(400).json({ message: 'Wrong password!' });
        }
        const token = signToken(user);
        return token
      },
      addUser: async(parent, {username, password}) => {
        const user = await User.create(
          {
            email: username,
            password: password
          }
        ),

        if (!user) {
          return res.status(400).json({ message: 'Something is wrong!' });
        }
        const token = signToken(user);
        return token;
      },
      saveBook: async (parent, { user, inputBook}) => {
        try {
          const updatedUser = await User.findOneAndUpdate(
            { _id: user._id },
            { $addToSet: { savedBooks: inputBook } },
            { new: true, runValidators: true }
          );
          return updatedUser;
        } catch (err) {
          return res.status(400).json(err);
        }
      },
      deleteBook: async (parent, { user, bookId}) => {
        const updatedUser = await User.findOneAndUpdate(
          { _id: user._id },
          { $pull: { savedBooks: { bookId: bookId } } },
          { new: true }
          );
          if (!updatedUser) {
            return res.status(404).json({ message: "Couldn't find user with this id!" });
          }
        },
    },
};

module.exports = resolvers;

