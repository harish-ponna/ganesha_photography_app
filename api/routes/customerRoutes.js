const router = require("express").Router();
const customerControllers = require("../controllers/customerControllers")
const { authenticateAdmin, authenticateCustomer } = require("../middlewares/authenticate")


router.get(`/api/customer/orders`, authenticateCustomer,getControllers.customerOrders)


router.get(`/api/customer/view-order/:orderId`, authenticateCustomer,getControllers.customerViewOrder)
router.post(`/api/customer/login`, postControllers.customerLogin)
router.patch(`/api/customer/forgot-password`, updateControllers.customerForgotPassword) 
router.patch(`/api/customer/change-password`, authenticateCustomer, updateControllers.customerChangePassword) 

router.delete(`/api/customer/logout`, authenticateCustomer, deleteControllers.customerLogout);


module.exports = router;