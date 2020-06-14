const Admin = require("../models/Admin")
const Customer = require("../models/Customer")
const Order = require("../models/Order")

module.exports = {
   

    //customer viewing his orders
    async customerOrders(req, res) {
        try {
            const orders = await Order.find({ customerId: req.customer._id }).sort({ createdAt: -1 })
            const count = orders.length
            return res.json({ data: orders, count })
        }
        catch (error) {
            return res.json({ error: error.message })
        }
    },

    //customer view single order
    async customerViewOrder(req, res) {
        try {
            const order = await Order.findOne({ _id: req.params.orderId, customerId: req.customer._id })
            return res.json({ data: [order], count: 1 })
        }
        catch (error) {
            return res.json({ error: error.message })
        }
    },
    
  // ---------------Customer Controllers
  // customer login
  async customerLogin(req, res) {
    try {
      var email = req.body.email;
      var password = req.body.password;
      if (!email || !password) return res.json({ error: "Incorrect credentials" });
      const customer = await Customer.findOne({ email });
      if (!customer) return res.json({ error: "Incorrect credentials(email not found)" });
      const isMatched = await compare(password, customer.password);
      if (!isMatched) return res.send({ error: "Incorrect credentials(password not matched)" });
      const token = await jwt.sign({ _id: customer._id }, process.env.JSON_WEB_TOKEN_SECRET, { expiresIn: "1d" })
      customer.jsonWebToken = token;
      customer.save()
      return res.json({ jsonWebTokenwt: token })
    }
    catch (error) {
      return res.json({ error: error.message })
    }
  },
  //-------------------customer controllers
  // forgot password
  async customerForgotPassword(req, res) {
      try {
          const customer = await Customer.findOne({ email: req.body.email, mobile: req.body.mobile });
          if (!customer) return res.json({ error: "Incorrect Credentials " })
          const rawPassword = (Math.floor(Math.random() * 100000000)).toString();
          const hashedPassword = await hash(rawPassword, 10)
          customer.password = hashedPassword;
          customer.save();
          forgotPasswordMailing(req.body.email, rawPassword)
          return res.json({ message: "A System generated password has been sent to your email successfully. Login with that password and edit your password in profile section if needed" })
      }
      catch (error) {
          return res.json({ error: error.message })
      }
  },
  // customer change password
  async customerChangePassword(req, res) {
      try {
          const currentPassword = req.body.currentPassword
          const newPassword = req.body.newPassword
          const isVerified = await compare(currentPassword, req.customer.password)
          if (!isVerified) return res.json({ error: "current password is wrong" })
          const hashedPassword = await hash(newPassword, 10)
          await Customer.findOneAndUpdate({ _id: req.customer._id }, { password: hashedPassword })
          return res.json({ message: "customer password changed successfully" })

      } catch (error) {
          return res.status(500).send({ error: error.message })
      }
  },
  async customerLogout(req, res) {
    try {
        await Customer.findOneAndUpdate({ _id: req.customer._id }, { jasonWebToken: null })
        return res.json({data:[{message:"customer successfully logged out"}]});
    } catch (error) {
        res.status(404).send({error:error.message})
    }
},
}