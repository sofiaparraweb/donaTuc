const { Router } = require("express");
const authRouter = require('./authRouter');
const chatRouter = require('./chatRouter');
const donationRouter = require('./donationRouter');
const filterRouter = require('./filterRouter');
const adminRouter = require('./adminRouter');
const publicationRouter = require("./publicationRouter");
// const userRouter = require('./userRouter')

const router = Router();

router.use("/user", userRouter);
router.use("/auth", authRouter);
router.use("/chat", chatRouter);
router.use("/donation", donationRouter);
router.use("/filter", filterRouter);
router.use("/admin", adminRouter);
router.use("/publication", publicationRouter);

module.exports = router;

