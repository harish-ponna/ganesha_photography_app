// NPM Package
const router = require("express").Router();

// controllers
const {
    login,
    register,
    forgotPassword,
    changePassword, 
    createCustomerAccount,
    updateOrder,
    customerOfficeNames,
    filterEditors,
    searchEditors,
    viewSingleEditor,
    updateEditor,
    logout
} = require("../controllers/editorControllers")

// middlewares
const { authenticateEditor } = require("../middlewares/authenticate")
const { registrationValidation } = require("../middlewares/validations")

// --------------------------get route------------------------------------------
router.get(`/api/ediitor/get-customer-ids`, authenticateEditor, customerOfficeNames)


// --------------------------post routes------------------------------------------
router.post(`/api/editor/register`, registrationValidation, register);
router.post(`/api/editor/login`, login);
router.post(`/api/editor/create-customer-account`, authenticateEditor, registrationValidation, createCustomerAccount);
router.post(`/api/editor/create-order`, authenticateEditor, orderValidation, createOrder);


// --------------------------update routes------------------------------------------
router.patch(`/api/editor/forgot-password`, forgotPassword)
router.patch(`/api/editor/change-password`, authenticateEditor, changePassword)
router.patch(`/api/editor/update-order/:orderId`, authenticateEditor, updateOrder)












// --------------------------get route------------------------------------------

router.get(`/api/admin/filter-orders`, authenticateAdmin, admin.adminFilterOrders) //?status = not_started || started || completed || cancelled

router.get(`/api/admin/payment-done-and-completed-orders`, authenticateAdmin, admin.adminPaymentDoneAndCompletedOrders)

router.get(`/api/admin/all-customers`, authenticateAdmin, admin.adminAllCustomers)

router.get(`/api/admin/search/customers-by-studio-name`, authenticateAdmin, admin.adminSearchCustomers)//?studioName = ${query}

router.get(`/api/admin/customer-orders/:customerId`, authenticateAdmin, admin.adminStudioOrders)

router.get(`/api/admin/search/orders`, authenticateAdmin, admin.adminSearchOrders) // ?titleOfOrder =  ${} 

router.get(`/api/admin/view-order/:orderId`, authenticateAdmin, admin.adminViewOrder)



router.delete(`/api/admin/logout`, authenticateAdmin, admin.adminLogout);
