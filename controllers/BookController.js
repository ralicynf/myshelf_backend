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

// view all Books
const getAllBooks = async (req, res) => {
    try {
        const books = await Book.findAll()
        res.send(books)
    } catch (error) {
        throw error
    }
}

//view Books by Id
const getBookById = async (req, res) => {
    try {
        const { book_id } = req.params
        const book = await Book.findByPk(book_id)
        res.send(book)
    } catch (error) {
        throw error 
    }
}

//update Book
const updateBook = async (req, res) => {
    try {
        const book = await Book.update(
            {...req.body},
            { where: { id: req.params.book_id }, returning: true}
        )
        res.send(book)
    } catch (error) {
        throw error
    }
}

//delete Book
const deleteBook = async (req, res) => {
    try {
        await Book.destroy({ where: { id: req.params.book_id } })
        res.send({
          msg: 'User Deleted',
          payload: req.params.book_id,
          status: 'Ok'
        })
      } catch (error) {
        throw error
      }
} 

module.exports = {
    createBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook
}