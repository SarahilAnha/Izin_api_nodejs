// import { where } from "sequelize/types";
import izin from "../models/izin.js";

const izinController = {
    getAll : async () => {

        try {
          const data = await izin.findAll({
            attributes :['id', 'user', 'tanggal', 'lama', 'alasan', 'ganti']
          })
          res.json(data)

        } catch (eror) {
          res.status(404).json({msg : eror})
        }

    },
    getId : async (req, res) => {

        try {
            const data = await izin.findAll({
                attributes :['id', 'user', 'tanggal', 'lama', 'alasan', 'ganti'],
                where : { id : req.params.id }
              })
              res.json(data)
        } catch (eror) {

        }

    },
    input : async (req, res) => {

        try {
          const data = await izin.create(req.body)
          res.status(201).json({ msg : "sukses" })
        } catch (eror) {
          res.status(404).json({msg : eror})
        }
    },
    update : async (req, res) => {

        try {
          const data = await izin.update(req.body, {
            where : { id : req.params.id }
          })
          res.status(201).json({ msg : "sukses" })
        } catch (eror) {
          res.status(404).json({msg : eror})
        }
    },
    delete : async (req, res) => {

        try {
          const data = await izin.destroy({
            where : { id : req.params.id }
          })
        } catch (eror) {
          res.status(404).json({msg : eror})
        }
    },

}

export default izinController