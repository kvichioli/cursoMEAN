const express = require('express')

module.exports = function(server) {

  //API routes
  const router = express.Router()
  server.use('/api', router) //Tudo que estiver na URL /api chamará a rota 'router'

  //rotas da API
  const billingCycleService = require('../api/billingCycle/billingCyclesService')
  billingCycleService.register(router, '/billingCycles')

  const billingSummaryService = require('../api/billingSummary/billingSummaryService')
  router.route('/billingSummary').get(billingSummaryService.getSummary)
}
