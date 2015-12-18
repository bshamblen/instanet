var _ = require('underscore');
var request = require('request');
var Promise = require('bluebird');

var Instanet = function(authToken) {
	this.authToken = authToken;
}

Instanet.prototype.sendGetRequest = function(path, callback) {
	var deferred = Promise.pending();
	var url = 'https://td2.transactiondesk.com/api/thirdparty' + path;

	var reqOptions = {
		url: url,
		method: 'GET',
		json: true,
		headers: {
			'Authorization': 'InstanetToken ' + this.authToken
		}
	}

	request(reqOptions, function(err, response, body) {
		if (err) {
			callback && callback(err);
			deferred.reject(err);
		} else if (!err && (response.statusCode < 200 || response.statusCode >= 300) && body) {
			callback && callback(new Error(body));
			deferred.reject(new Error(body));
		} else {
			try {
				if (_.isString(body)) {
					body = JSON.parse(body);
				}

				callback && callback(null, body);
				deferred.resolve(body);
			} catch (err) {
				callback && callback(err);
				deferred.reject(err);
			}
		}
	});

	return deferred.promise;
}

Instanet.prototype.getAgents = function(callback) {
	return this.sendGetRequest('/agents', callback);
}

Instanet.prototype.getTransactions = function(agentId, callback) {
	return this.sendGetRequest('/transactions/' + agentId, callback);
}

Instanet.prototype.getContacts = function(agentId, callback) {
	return this.sendGetRequest('/contacts/' + agentId, callback);
}

Instanet.prototype.getTransactionDetails = function(transactionId, callback) {
	return this.sendGetRequest('/transaction/' + transactionId, callback);
}

Instanet.prototype.getContactDetails = function(contactId, callback) {
	return this.sendGetRequest('/contact/' + contactId, callback);
}

module.exports = Instanet;
