const { BookReport, Book } = require('../models')

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
        const bookReports = await BookReport.findAll()
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
                    model: Book,
                    attributes: ['title', 'author']
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