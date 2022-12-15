const { BookReport, Book, User } = require('../models')
const user = require('../models/user')

const createBookReport = async (req, res) => {
    try {
        const bookReport = await new BookReport(req.body)
        await bookReport.save()
        res.send(bookReport)
    } catch (error) {
        throw error
    }
}

const getAllBookReports = async (req, res) => {
    try {
        const bookReports = await BookReport.findAll({
            include: [
               {
                model: User,
                as: "reviewer",
                attributes: ['username', 'name', 'email']
               },
               {
                model: Book,
                as: "comments",
                attributes: ['title', 'author']
               }
            ]
        })
        res.send(bookReports)
    } catch (error) {
        throw error
    }
}

const getBookReportById = async (req, res) => {
    try {
        const { bookReport_id } = req.params
        const bookReport = await BookReport.findByPk(bookReport_id)
        res.send(bookReport)
    } catch (error) {
        throw error
    }
}

const getBookReportByBook = async (req, res) => {
    try {
        const bookReports = await BookReport.findAll({
            where: { bookId: req.params.book_id},
            include: [
                {
                    model: User,
                    as: "reviewer",
                    attributes: ['username', 'name']
                }
            ]
        })
        res.send(bookReports)
    } catch (error) {
        throw error
    }
}

const updateBookReport = async (req, res) => {
    try {
        const bookReport = await BookReport.update(
            {...req.body},
            { where: { id: req.params.bookReport_id }, returning: true}
        )
        res.send(bookReport)
    } catch (error) {
        throw error
    }
}

const deleteBookReport = async (req, res) => {
    try {
        await BookReport.destroy({ where: { id: req.params.bookReport_id}})
        res.send({
            msg: 'Book report deleted',
            payload: req.params.bookReport_id,
            status: 'Ok'
        })
    } catch (error) {
        throw error
    }
}

module.exports = {
    createBookReport,
    getAllBookReports,
    getBookReportById,
    getBookReportByBook,
    updateBookReport, 
    deleteBookReport
}