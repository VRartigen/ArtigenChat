'use strict';

var express      = require('express'),
  router          = express.Router(),
  vcapServices = require('vcap_services'),
  extend       = require('util')._extend,
  watson       = require('watson-developer-cloud');

// another endpoint for the text to speech service

// For local development, replace username and password
var ttsConfig = extend({
  version: 'v1',
  url: 'https://stream.watsonplatform.net/text-to-speech/api',
  username: 'f5039155-d7b7-43f6-86c7-8f57ccd11caf',
  password: 'NdRK8QaenNnB'
}, vcapServices.getCredentials('text_to_speech'));

var ttsAuthService = watson.authorization(ttsConfig);

router.get('/token', function(req, res) {
  ttsAuthService.getToken({url: ttsConfig.url}, function(err, token) {
    if (err) {
      console.log('Error retrieving token: ', err);
      return res.status(500).send('Error retrieving token')
    }
    res.send(token);
  });
});

module.exports = router;
