const { Book } = require('../models')

//create Book
const createBook = async (req, res) => {
    try {
        const book = await new Book(req.body)
        await book.save()
        res.send(book)
    } catch (error) {
        throw error
    }
}

//view all Books
// const getAllBooks = async (req, res) => {
//     try {
//         const books = await Book.findAll()
//     } catch (error) {
        
//     }
// }

//view Books by Id


//update Book


//delete Book


module.exports = {
    createBook,
    //getAllBooks
}