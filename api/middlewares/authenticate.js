// Models
var Admin = require("../models/Admin");
var Editor = require("../models/Editor");
var Customer = require("../models/Customer");

// NPM package
const { verify } = require("jsonwebtoken");

module.exports = {
    async authenticateAdmin(req, res, next) {
        try {
            const token = req.header('Authorization')
            if (!token) return res.json({ error: "no token found" })
            const payload = await verify(token, process.env.JSON_WEB_TOKEN_SECRET)
            if (!payload._id) {
                return res.json({ error: "invalid token" })
            }
            const admin = await Admin.findOne({ _id: payload._id, jsonWebToken: token })
            if (!admin) return res.json({ error: "no admin account found" })
            req.admin = admin
            next()
        } catch (error) {
            res.json({ error: error.message })
        }
    },
    async authenticateEditor(req, res, next) {
        try {
            const token = req.header('Authorization')
            if (!token) return res.json({ error: "no token found" })
            const payload = await verify(token, process.env.JSON_WEB_TOKEN_SECRET)
            if (!payload._id) {
                return res.json({ error: "invalid token" })
            }
            const editor = await Editor.findOne({ _id: payload._id, jsonWebToken: token })
            if (!editor) return res.json({ error: "no editor account found" })
            req.editor = editor
            next()
        } catch (error) {
            res.json({ error: error.message })
        }
    },
    async authenticateCustomer(req, res, next) {
        try {
            const token = req.header('Authorization')
            if (!token) return res.json({ error: "no token found" })
            const payload = await verify(token, process.env.JSON_WEB_TOKEN_SECRET)
            if (!payload._id) {
                return res.json({ error: "invalid token" })
            }
            const customer = await Customer.findOne({ _id: payload._id, jsonWebToken: token })
            if (!customer) return res.json({ error: "no customer account found" })
            req.customer = customer
            next()
        } catch (error) {
            res.json({ error: error.message })
        }
    }
}



