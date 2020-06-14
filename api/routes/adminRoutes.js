// NPM Package
const router = require("express").Router();

// controllers
const {
    login, 
    filterEditors,
    searchEditors,
    viewSingleEditor,
    updateEditor,
    logout,
    forgotPassword,
    changePassword
} = require("../controllers/adminControllers")

// middlewares
const { authenticateAdmin } = require("../middlewares/authenticate")

// --------------------------get routes------------------------------------------
router.get(`/api/admin/filter-editors`, authenticateAdmin, filterEditors) //?status = requested || acitve || blcoked
router.get(`/api/admin/search-editors`, authenticateAdmin, searchEditors) //?officeName = ${query}
router.get(`/api/admin/view-single-editor/:editorId`, authenticateAdmin, viewSingleEditor) //?officeName = ${query}

// --------------------------post routes------------------------------------------
router.post(`/api/admin/login`, login);

// --------------------------udpate routes------------------------------------------
router.patch(`/api/admin/forgot-password`, forgotPassword)
router.patch(`/api/admin/change-password`, authenticateAdmin, ChangePassword)
router.get(`/api/admin/update-editor/:editorId`, authenticateAdmin, updateEditor) //?status = ${query}

// --------------------------delete routes------------------------------------------
router.delete(`/api/admin/logout`, authenticateAdmin, logout);
