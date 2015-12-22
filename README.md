# Instanet

A node.js client for the [Instanet Solutions](http://www.instanetsolutions.com) TransactionDesk third party API.

## Installation

```cli
npm install instanet
```

## Usage

The Instanet API requires an `InstanetToken` to be passes with every API request. This library will automatically include the authentication header for all API calls once you've initialized the instance variable.

```Javascript
var Instanet = require('instanet');
var api = new Instanet('your InstanetToken');
```

## Callbacks or Promises

All of the methods below will work with either a standard Javascipt callback function `(error, result)` or promises. This module uses the Bluebird promise library.

## Methods

* getAgents
* getTransactions
* getTransactionDetails
* getContacts
* getContactDetails
* createContact
* createTransaction

#### getAgents(*[callback]*)

Gets a list of all agents your `InstanetToken` has access to.

**Sample Response**
```javascript
[
	{
		"ID": "00000000-0000-4ad8-8657-84000005b77",
		"FirstName": "Test",
		"LastName": "User",
		"Email": "",
		"AgentID": "",
		"SuperUser": false,
		"Offices": [
			{
				"ID": "00000000-0000-49b9-9507-9cb6f9f1eae0",
				"OfficeName": "Test Real Estate",
				"StreetNumber": "123",
				"StreetName": "Main St.",
				"City": "San Jose",
				"State": "CA",
				"ZipCode": "95125",
				"OfficeID": ""
			}
		]
  	}
]
```

#### getTransactions(*agentId*, *[callback]*)

Returns a list of transactions for the given `agentId`.

**Sample Response**
```javascript
[
	{
		"ID": "00000000-3767-4846-8f09-0000088f719d",
		"TransactionName": "Test Transaction",
		"TransactionStatusName": "Open",
		"TransactionTypeName": "Commercial Lease",
		"PropertyInformation": {
			"MLSNumber": "",
			"StreetNumber": "",
			"StreetName": "",
			"Address": "",
			"UnitNumber": "",
			"City": "",
			"State": "",
			"ZipCode": "",
			"County": "",
			"Township": "",
			"TaxNumber": "",
			"Subdivision": "",
			"SchoolDistrict": "",
			"YearBuilt": "",
			"LotNumber": "",
			"Block": "",
			"PageNumber": "",
			"PlatBook": "",
			"ZoningClass": "",
			"LegalDescription": "",
			"ListPrice": "",
			"Balance1stMortgage": "",
			"Balance2ndMortgage": "",
			"OtherLiens": "",
			"OtherLiensDesc": "",
			"TotalEncumbrances": "",
			"PropertyIncludes": "",
			"PropertyExcludes": "",
			"LeasedItems": "",
			"SupplementalInfo": "",
			"Deposit": "",
			"AdditionalDeposit": "",
			"PurchasePrice": "",
			"TotalFinancing": "",
			"Comments": null
		},
		"TransactionDates": {
			"ListDate": null,
			"ExpirationDate": null,
			"ClosingDate": null,
			"OfferDate": null,
			"OfferExpirationDate": null,
			"OfferAcceptanceDate": null,
			"PossessionDate": null,
			"FundingDate": null,
			"ApplicationDate": null,
			"CommitmentDate": null
		}
	},
	{
		"ID": "00000000-b535-4adc-84e2-477500000163",
		"TransactionName": "Test Transaction 2",
		"TransactionStatusName": "Open",
		"TransactionTypeName": "Commercial Listing",
		"PropertyInformation": {
			"MLSNumber": "",
			"StreetNumber": "",
			"StreetName": "",
			"Address": "",
			"UnitNumber": "",
			"City": "",
			"State": "",
			"ZipCode": "",
			"County": "",
			"Township": "",
			"TaxNumber": "",
			"Subdivision": "",
			"SchoolDistrict": "",
			"YearBuilt": "",
			"LotNumber": "",
			"Block": "",
			"PageNumber": "",
			"PlatBook": "",
			"ZoningClass": "",
			"LegalDescription": "",
			"ListPrice": "",
			"Balance1stMortgage": "",
			"Balance2ndMortgage": "",
			"OtherLiens": "",
			"OtherLiensDesc": "",
			"TotalEncumbrances": "",
			"PropertyIncludes": "",
			"PropertyExcludes": "",
			"LeasedItems": "",
			"SupplementalInfo": "",
			"Deposit": "",
			"AdditionalDeposit": "",
			"PurchasePrice": "",
			"TotalFinancing": "",
			"Comments": null
		},
			"TransactionDates": {
			"ListDate": null,
			"ExpirationDate": null,
			"ClosingDate": null,
			"OfferDate": null,
			"OfferExpirationDate": null,
			"OfferAcceptanceDate": null,
			"PossessionDate": null,
			"FundingDate": null,
			"ApplicationDate": null,
			"CommitmentDate": null
		}
	}
]
```

#### getTransactionDetails(*transactionId*, *[callback]*)

Retrieve the transaction details for a single transaction.

**Sample Response**
```javascript
{
	"ID": "00000000-3767-4846-8f09-0000088f719d",
	"TransactionName": "Test Transaction",
	"TransactionStatusName": "Open",
	"TransactionTypeName": "Commercial Lease",
	"PropertyInformation": {
		"MLSNumber": "",
		"StreetNumber": "",
		"StreetName": "",
		"Address": "",
		"UnitNumber": "",
		"City": "",
		"State": "",
		"ZipCode": "",
		"County": "",
		"Township": "",
		"TaxNumber": "",
		"Subdivision": "",
		"SchoolDistrict": "",
		"YearBuilt": "",
		"LotNumber": "",
		"Block": "",
		"PageNumber": "",
		"PlatBook": "",
		"ZoningClass": "",
		"LegalDescription": "",
		"ListPrice": "",
		"Balance1stMortgage": "",
		"Balance2ndMortgage": "",
		"OtherLiens": "",
		"OtherLiensDesc": "",
		"TotalEncumbrances": "",
		"PropertyIncludes": "",
		"PropertyExcludes": "",
		"LeasedItems": "",
		"SupplementalInfo": "",
		"Deposit": "",
		"AdditionalDeposit": "",
		"PurchasePrice": "",
		"TotalFinancing": "",
		"Comments": null
	},
	"TransactionDates": {
		"ListDate": null,
		"ExpirationDate": null,
		"ClosingDate": null,
		"OfferDate": null,
		"OfferExpirationDate": null,
		"OfferAcceptanceDate": null,
		"PossessionDate": null,
		"FundingDate": null,
		"ApplicationDate": null,
		"CommitmentDate": null
	}
}
```

#### getContacts(*agentId*, *[callback]*)

List of contacts associated with an agent.

**Sample Response**

```javascript
[
	{
		"ID": "00000000-d48c-4189-8b3a-000000a7ff2e",
		"ContactType": "Seller",
		"FirstName": "Test",
		"MiddleName": "",
		"LastName": "Lead",
		"Email": "",
		"Company": "",
		"PreferredName": "",
		"PreferredSignature": "",
		"PreferredInitials": "",
		"StreetNumber": "",
		"StreetName": "",
		"City": "",
		"State": "",
		"ZipCode": "",
		"Phone": "",
		"Fax": ""
	},
	{
		"ID": "00000000-d600-4108-b929-b9a0000056b8",
		"ContactType": "Buyer",
		"FirstName": "Test",
		"MiddleName": "",
		"LastName": "Lead 2",
		"Email": "",
		"Company": "",
		"PreferredName": "",
		"PreferredSignature": "",
		"PreferredInitials": "",
		"StreetNumber": "",
		"StreetName": "",
		"City": "",
		"State": "",
		"ZipCode": "",
		"Phone": "",
		"Fax": ""
	}
]
```

#### getContactDetails(*contactId*, *[callback]*)

Get details for a single contact.

**Sample Response**

```javascript
{
	"ID": "00000000-d48c-4189-8b3a-627f0000002e",
	"ContactType": "Seller",
	"FirstName": "Test",
	"MiddleName": "",
	"LastName": "Lead",
	"Email": "",
	"Company": "",
	"PreferredName": "",
	"PreferredSignature": "",
	"PreferredInitials": "",
	"StreetNumber": "",
	"StreetName": "",
	"City": "",
	"State": "",
	"ZipCode": "",
	"Phone": "",
	"Fax": ""
}
```

#### createContact(*agentId*, *contact*, *[callback]*)

Creates a new contact record for the given agentId.

**Example**

```javascript
var Instanet = require('instanet');
var api = new Instanet('your InstanetToken');
var agentId = '00000000-212a-4ad8-8657-84d000000b77';

var contact = {
	'ContactTypeGUID': Instanet.contactTypes.general,
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

api.createContact(agentId, contact)
.then(function(response) {
	console.log('inserted contact', response);
})
.error(function(err) {
	console.log('error inserting contact', err);
});
```
**Available `Instanet.contactTypes`**

* none
* agent
* appraisalCompany
* broker
* buyer
* condoAssociationOrHOA
* escrowCompany
* general
* lawyer
* mortgageAppraiser
* mortgageCompany
* prospect
* seller
* signingParticipant
* titleCompany

#### createTransaction(*agentId*, *transaction*, *[callback]*)

Creates a new transaction record for the given agentId.

**Example**

```javascript
var Instanet = require('instanet');
var api = new Instanet('your InstanetToken');
var agentId = '00000000-212a-4ad8-8657-84d000000b77';

var transaction = {
	'TransactionName': 'Test Transaction',
	'TransactionStatusName': 'Open',
	'TransactionTypeGUID': Instanet.transactionTypes.residentialListing,
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
}

api.createTransaction(agentId, transaction)
.then(function(response) {
	console.log('inserted transaction', response);
})
.error(function(err) {
	console.log('error inserting transaction', err);
});
```

**Available `Instanet.transactionTypes`**

* none
* residentialListing
* residentialSale
* residentialLease
* commercialListing
* commercialSale
* commercialLease
