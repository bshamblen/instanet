var _ = require('underscore');
var request = require('request');
var Promise = require('bluebird');

//Instanet's SSL certificate is invalid. Need to ignore the error.
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

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

Instanet.prototype.sendPutRequest = function(path, body, callback) {
	var deferred = Promise.pending();
	var url = 'https://td2.transactiondesk.com/api/thirdparty' + path;

	var reqOptions = {
		url: url,
		method: 'PUT',
		json: true,
		body: body,
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

Instanet.prototype.getTransactionTypes = function(agentId, callback) {
	return this.sendGetRequest('/transactiontypes/' + agentId, callback);
}

Instanet.prototype.getContactTypes = function(agentId, callback) {
	return this.sendGetRequest('/contacttypes/' + agentId, callback);
}

Instanet.prototype.createContact = function(agentId, contact, callback) {
	return this.sendPutRequest('/createcontact/' + agentId, contact, callback);
}

Instanet.prototype.createTransaction = function(agentId, transaction, callback) {
	return this.sendPutRequest('/createtransaction/' + agentId, transaction, callback);
}

module.exports = Instanet;

module.exports.transactionTypes = {
	none: '2D9D021D-BEB7-456D-9CAE-6CE5486AC3F5',
	residentialListing : '4DFF7A8E-6F64-4488-A13D-27199D21E9E3',
	residentialSale: '5698FAC5-5F95-47CB-B231-13507AD61855',
	residentialLease: '23971525-9316-4462-A80C-CCACEB3BCA8D',
	commercialListing: '775835F7-400E-4C1C-840E-060B25A3F972',
	commercialSale: '79979353-2687-4B60-BDB4-A5E4481C9194',
	commercialLease: '0E31E091-C168-49B5-9AD7-4CCC7E2B793E'
};

module.exports.contactTypes = {
	none: '05816EAD-C2D5-415C-BC1A-FBC20C1D3E61',
	agent: '43ADB182-D837-4DE3-8C07-74EDFCCE458C',
	appraisalCompany: '54E6B5DF-857A-482D-AF95-EC23AE45DEC8',
	broker: '5310C5E0-8097-4EA5-BAF4-B71EB8F63452',
	buyer: 'E4D610E0-5A67-4B28-8B3B-C09A1B89C970',
	condoAssociationOrHOA: '8B61DBBC-B20D-4B66-82C2-63CE0DDF7DC1',
	escrowCompany: '45E0E3FE-8D60-4884-A97C-962C3668D73C',
	general: 'B6953E02-6EF4-4050-88CD-66124704FD56',
	lawyer: '340F210D-BFE6-4C24-987C-BE710493059A',
	mortgageAppraiser: '4F0A54CE-A723-4DFD-B973-760310594B62',
	mortgageCompany: 'FE56E87F-5FFF-4D02-82A7-8F86FDEBEF4B',
	prospect: '5BF32770-4C1E-4E1E-9E89-630815E43668',
	seller: 'B5E30A48-E161-44B2-8558-BF1991AF6A9C',
	signingParticipant: '0416E257-AFF0-4256-966B-D8AC81B211B2',
	titleCompany: '3841556D-13F3-4566-AD97-F21550C546BC'
}
