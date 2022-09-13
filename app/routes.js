const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/address-lookup-post', function (req, res) {
    const address = req.session.data['current-address']
    if (address === 'address1') {
      req.session.data['address-flat-number-current'] = ''
      req.session.data['address-house-number-current'] = ''
      req.session.data['address-house-name-current'] = 'Oxford House'
      req.session.data['address-street-current'] = 'Oxford Row'
      req.session.data['address-city-current'] = 'Leeds'
    } else if (address === 'address2') {
      req.session.data['address-flat-number-current'] = 'Office 14'
      req.session.data['address-house-number-current'] = ''
      req.session.data['address-house-name-current'] = ''
      req.session.data['address-street-current'] = 'New Station St'
      req.session.data['address-city-current'] = 'Leeds'
    } else if (address === 'address3') {
      req.session.data['address-flat-number-current'] = ''
      req.session.data['address-house-number-current'] = '38'
      req.session.data['address-house-name-current'] = ''
      req.session.data['address-street-current'] = 'Park Square North'
      req.session.data['address-city-current'] = 'Leeds'
    } else if (address === 'address4') {
      req.session.data['address-flat-number-current'] = ''
      req.session.data['address-house-number-current'] = '41'
      req.session.data['address-house-name-current'] = 'Lion House'
      req.session.data['address-street-current'] = 'York Place'
      req.session.data['address-city-current'] = 'Leeds'
    } else if (address === 'address5') {
      req.session.data['address-flat-number-current'] = ''
      req.session.data['address-house-number-current'] = '1'
      req.session.data['address-house-name-current'] = 'Whitehall Quay'
      req.session.data['address-street-current'] = 'Whitehall Road'
      req.session.data['address-city-current'] = 'Leeds'
    }
  
    res.redirect('confirmation-page')
  })

module.exports = router
