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
* getTransactionTypes
* getContacts
* getContactDetails
* getContactTypes
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

#### getTransactionTypes(*agentId*, *[callback]*)

Get the full list of transaction types for an agent. This list should contain the IDs in the `Instanet.transactionTypes` enumerator, but *could* contain additional, custom values for the given agent.

**Sample Response**

```javascript
[
	{
		"ID": "2d9d021d-beb7-456d-9cae-6ce5486ac3f5",
		"Name": "- None -"
	},
	{
		"ID": "0e31e091-c168-49b5-9ad7-4ccc7e2b793e",
		"Name": "Commercial Lease"
	},
	{
		"ID": "775835f7-400e-4c1c-840e-060b25a3f972",
		"Name": "Commercial Listing"
	},
	{
		"ID": "79979353-2687-4b60-bdb4-a5e4481c9194",
		"Name": "Commercial Sale"
	},
	{
		"ID": "23971525-9316-4462-a80c-ccaceb3bca8d",
		"Name": "Residential Lease"
	},
	{
		"ID": "4dff7a8e-6f64-4488-a13d-27199d21e9e3",
		"Name": "Residential Listing"
	},
	{
		"ID": "5698fac5-5f95-47cb-b231-13507ad61855",
		"Name": "Residential Sale"
	}
]
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

#### getContactTypes(*agentId*, *[callback]*)

Get the full list of contact types for an agent. This list should contain the IDs in the `Instanet.contactTypes` enumerator, but *could* contain additional, custom values for the given agent.

**Sample Response**

```javascript
[
	{
		"ID": "05816ead-c2d5-415c-bc1a-fbc20c1d3e61",
		"Name": "- None -"
	},
	{
		"ID": "43adb182-d837-4de3-8c07-74edfcce458c",
		"Name": "Agent"
	},
	{
		"ID": "54e6b5df-857a-482d-af95-ec23ae45dec8",
		"Name": "Appraisal Company"
	},
	{
		"ID": "5310c5e0-8097-4ea5-baf4-b71eb8f63452",
		"Name": "Broker"
	},
	{
		"ID": "e4d610e0-5a67-4b28-8b3b-c09a1b89c970",
		"Name": "Buyer"
	},
	{
		"ID": "8b61dbbc-b20d-4b66-82c2-63ce0ddf7dc1",
		"Name": "Condo Association/HOA"
	},
	{
		"ID": "45e0e3fe-8d60-4884-a97c-962c3668d73c",
		"Name": "Escrow Company"
	},
	{
		"ID": "b6953e02-6ef4-4050-88cd-66124704fd56",
		"Name": "General"
	},
	{
		"ID": "340f210d-bfe6-4c24-987c-be710493059a",
		"Name": "Lawyer"
	},
	{
		"ID": "4f0a54ce-a723-4dfd-b973-760310594b62",
		"Name": "Mortgage Appraiser"
	},
	{
		"ID": "fe56e87f-5fff-4d02-82a7-8f86fdebef4b",
		"Name": "Mortgage Company"
	},
	{
		"ID": "5bf32770-4c1e-4e1e-9e89-630815e43668",
		"Name": "Prospect"
	},
	{
		"ID": "b5e30a48-e161-44b2-8558-bf1991af6a9c",
		"Name": "Seller"
	},
	{
		"ID": "0416e257-aff0-4256-966b-d8ac81b211b2",
		"Name": "Signing Participant"
	},
	{
		"ID": "3841556d-13f3-4566-ad97-f21550c546bc",
		"Name": "Title Company"
	}
]
```

#### createContact(*agentId*, *contact*, *[callback]*)

Creates a new contact record for the given agentId.

**Example**

```javascript
var Instanet = require('instanet');
var api = new Instanet('your InstanetToken');
var agentId = '00000000-212a-4ad8-8657-84d000000b77';

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
