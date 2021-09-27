const { Router } = require("express")

const { getAll } = require("./controller")

const router = Router()

router.get("/", getAll)

module.exports = router
