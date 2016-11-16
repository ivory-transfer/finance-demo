'use strict'

module.exports = (client, sharedState) => {
	return client.createStep({
    satisfied() {
      return false
    },

    prompt() {
      client.addResponse('app:response:name:error/request_rephrase')
      client.done()
    },
  })
}