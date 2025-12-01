const Router = require("express")
const { getAllKorzinka, getOneKorzinka, addKorzinka, updateKorzinka, deleteKorzinka } = require("../controller/korzinka.controller")
const authorization = require("../middleware/authorization")

const korzinkaRouter = Router()

korzinkaRouter.get("/get_all_korzinka", getAllKorzinka)
korzinkaRouter.get("/get_one-korzinka/:id", getOneKorzinka)
korzinkaRouter.post("/add_korzinka", authorization, addKorzinka)
korzinkaRouter.put("/update_korzinka/:id", authorization, updateKorzinka)
korzinkaRouter.delete("/delete_korzinka/:id", authorization, deleteKorzinka)

module.exports = korzinkaRouter