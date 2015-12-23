var assert = require('assert');
var Instanet = require('../index');
var api = new Instanet('your InstanetToken');
var firstAgent;
var firstContact;
var firstTransaction;

describe('Test API Enpoints', function() {
	it('Get agent list', function(done) {
		api.getAgents()
		.then(function(agents) {
			assert.equal(Array.isArray(agents), true);
			assert.notEqual(agents.length, 0);
			firstAgent = agents[0];
		})
		.error(function(err) {
			assert.equal(err, null);
		})
		.finally(function() {
			done();
		});
	});

	it('Get contact list', function(done) {
		api.getContacts(firstAgent.ID)
		.then(function(contacts) {
			assert.equal(Array.isArray(contacts), true);
			assert.notEqual(contacts.length, 0);
			firstContact = contacts[0];
		})
		.error(function(err) {
			assert.equal(err, null);
		})
		.finally(function() {
			done();
		});
	});

	it('Get contact detail', function(done) {
		api.getContactDetails(firstContact.ID)
		.then(function(contact) {
			assert.notEqual(contact.ID, null);
		})
		.error(function(err) {
			assert.equal(err, null);
		})
		.finally(function() {
			done();
		});
	});

	it('Get contact types', function(done) {
		api.getContactTypes(firstAgent.ID)
		.then(function(types) {
			assert.equal(Array.isArray(types), true);
			assert.notEqual(types.length, 0);
		})
		.error(function(err) {
			assert.equal(err, null);
		})
		.finally(function() {
			done();
		});
	});

	it('Get transaction list', function(done) {
		api.getTransactions(firstAgent.ID)
		.then(function(transactions) {
			assert.equal(Array.isArray(transactions), true);
			assert.notEqual(transactions.length, 0);
			firstTransaction = transactions[0];
		})
		.error(function(err) {
			assert.equal(err, null);
		})
		.finally(function() {
			done();
		});
	});

	it('Get transaction detail', function(done) {
		api.getTransactionDetails(firstTransaction.ID)
		.then(function(transaction) {
			assert.notEqual(transaction.ID, null);
		})
		.error(function(err) {
			assert.equal(err, null);
		})
		.finally(function() {
			done();
		});
	});

	it('Get transaction types', function(done) {
		api.getTransactionTypes(firstAgent.ID)
		.then(function(types) {
			assert.equal(Array.isArray(types), true);
			assert.notEqual(types.length, 0);
		})
		.error(function(err) {
			assert.equal(err, null);
		})
		.finally(function() {
			done();
		});
	});

	it('Create a new transaction', function(done) {
		var transaction = {
			'TransactionName': 'Test Transaction',
			'TransactionStatusName': 'Open',
			'TransactionTypeID': Instanet.transactionTypes.residentialListing,
			'PropertyInformation': {
				'MLSNumber': '',
				'StreetNumber': '123',
				'StreetName': 'Main St',
				'Address': '',
				'UnitNumber': '',
				'City': 'San Jose',
				'State': 'CA',
				'ZipCode': '95125',
				'County': 'Santa Clara',
				'Township': '',
				'TaxNumber': '',
				'Subdivision': '',
				'SchoolDistrict': 'San Jose Unified',
				'YearBuilt': '',
				'LotNumber': '',
				'Block': '',
				'PageNumber': '',
				'PlatBook': '',
				'ZoningClass': '',
				'LegalDescription': '',
				'ListPrice': '',
				'Balance1stMortgage': '',
				'Balance2ndMortgage': '',
				'OtherLiens': '',
				'OtherLiensDesc': '',
				'TotalEncumbrances': '',
				'PropertyIncludes': '',
				'PropertyExcludes': '',
				'LeasedItems': '',
				'SupplementalInfo': '',
				'Deposit': '',
				'AdditionalDeposit': '',
				'PurchasePrice': '',
				'TotalFinancing': '',
				'Comments': null
			},
			'TransactionDates': {
				'ListDate': '2015-12-25',
				'ExpirationDate': null,
				'ClosingDate': null,
				'OfferDate': null,
				'OfferExpirationDate': null,
				'OfferAcceptanceDate': null,
				'PossessionDate': null,
				'FundingDate': null,
				'ApplicationDate': null,
				'CommitmentDate': null
			}
		};

		api.createTransaction(firstAgent.ID, transaction)
		.then(function(inserted) {
			assert.notEqual(inserted.ID, null);
		})
		.error(function(err) {
			assert.equal(err, null);
		})
		.finally(function() {
			done();
		});
	});

	it('Create a new contact', function(done) {
		var contact = {
			'ContactTypeID': Instanet.contactTypes.general,
			'FirstName': 'Test',
			'MiddleName': '',
			'LastName': 'Lead',
			'Email': '',
			'Company': '',
			'PreferredName': '',
			'PreferredSignature': '',
			'PreferredInitials': '',
			'StreetNumber': '',
			'StreetName': '',
			'City': '',
			'State': '',
			'ZipCode': '',
			'Phone': '',
			'Fax': ''
		}

		api.createContact(firstAgent.ID, contact)
		.then(function(inserted) {
			assert.notEqual(inserted.ID, null);
		})
		.error(function(err) {
			assert.equal(err, null);
		})
		.finally(function() {
			done();
		});
	});
});
