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

```

#### getTransactionDetails(*transactionId*, *[callback]*)

Retrieve the transaction details for a single transaction.

**Sample Response**
```javascript

```

#### getContacts(*agentId*, *[callback]*)

List of contacts associated with an agent.

**Sample Response**

```javascript

```

#### getContactDetails(*contactId*, *[callback]*)

Get details for a single contact.

**Sample Response**

```javascript

```