'use strict'

const AccessService = require("../services/access.service")

const { OK, CREATED } = require('../core/success.response')

class AccessController {
  signUp = async ( req, res, next ) => {
    new CREATED({
      message: 'Registered OK',
      metadata: await AccessService.signUp(req.body)
    }).send(res)
    // return res.status(201).json(await AccessService.signUp(req.body))
  }
}

module.exports = new AccessController()