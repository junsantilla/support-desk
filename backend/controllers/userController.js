const asyncHandler = require('express-async-handler')

// @desc        Register a new user
// @route       /api/users
// @access      public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    // Validation
    if (!name || !email || !password) {
        es.status(400)
        throw new Error('Please include all fields')
    }

    res.send('Register Router')
})

// @desc        Login a user
// @route       /api/login
// @access      public
const loginUser = asyncHandler(async (req, res) => {
    res.send('Login Router')
})

module.exports = {
    registerUser,
    loginUser,
}
