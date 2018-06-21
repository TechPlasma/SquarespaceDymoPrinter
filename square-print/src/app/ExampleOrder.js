

let exampleOrder = {
  "id" : "585d498fdee9f31a60284a37",
  "orderNumber" : "3",
  "createdOn" : "2016-12-23T15:58:07.187Z",
  "modifiedOn" : "2016-12-23T15:58:07.187Z",
  "testmode" : true,
  "customerEmail" : "foo@example.com",
  "billingAddress" : {
    "firstName" : "Bob",
    "lastName" : "Loblaw",
    "address1" : "459 Broadway",
    "address2" : null,
    "city" : "New York",
    "state" : "NY",
    "countryCode" : "US",
    "postalCode" : "10003",
    "phone": "5553334444"
  },
  "shippingAddress" : {
    "firstName" : "Bob",
    "lastName" : "Loblaw",
    "address1" : "459 Broadway",
    "address2" : null,
    "city" : "New York",
    "state" : "NY",
    "countryCode" : "US",
    "postalCode" : "10003",
    "phone": "5553334444"
  },
  "fulfillmentStatus" : "PENDING",
  "lineItems" : [ {
    "id" : "585d4975dee9f31a60284a16",
    "sku" : "SQ3381024",
    "productId" : "565c8f3da7c8a3cf71d5fd0a",
    "productName" : "Product",
    "quantity" : 1,
    "unitPricePaid" : {
      "value" : "55.00",
      "currency" : "USD"
    },
    "variantOptions" : [ {
      "value" : "Large",
      "optionName" : "Size"
    }, {
      "value" : "Black",
      "optionName" : "Color"
    } ],
    "customizations" : null,
    "imageUrl" : "https://static.squarespace.com/universal/commerce/images/brine-32oz-spring-mix-v2.jpg?format=300w"
  } ],
  "internalNotes" : [ {
      "content" : "First note"
    }, {
      "content" : "Second note"
  } ],
  "shippingLines" : [ {
    "method" : "Flat Rate",
    "amount" : {
      "value" : "1.00",
      "currency" : "USD"
    }
  } ],
  "discountLines" : [ {
    "description" : "Fall Sale",
    "amount" : {
      "value" : "1.00",
      "currency" : "USD"
    },
    "promoCode" : "FALLSALE"
  } ],
  "formSubmission" : [ {
    "label" : "How did you hear about us?",
    "value" : "Facebook"
  } ],
  "fulfillments" : [ ],
  "subtotal" : {
    "value" : "55.00",
    "currency" : "USD"
  },
  "shippingTotal" : {
    "value" : "1.00",
    "currency" : "USD"
  },
  "discountTotal" : {
    "value" : "1.00",
    "currency" : "USD"
  },
  "taxTotal" : {
    "value" : "2.70",
    "currency" : "USD"
  },
  "refundedTotal" : {
    "value" : "0.00",
    "currency" : "USD"
  },
  "grandTotal" : {
    "value" : "57.70",
    "currency" : "USD"
  }
}
