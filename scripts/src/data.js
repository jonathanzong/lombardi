var LINK_TYPE = {
  Association: "association",
  InfluenceControl: "influence-control",
  FinancialTransaction: "financial-transaction",
  FinancialServiceProvider: "financial-bidirectional",
  Action: "action",
}

// array of {source, target, type}
var links = [
  {
    source: "Donald Trump",
    target: "Peter Thiel",
    type: LINK_TYPE.Association,
  },
  {
    source: "Donald Trump",
    target: "Jared Kushner",
    type: LINK_TYPE.Association,
  },
  {
    source: "Donald Trump",
    target: "Stephen Bannon",
    type: LINK_TYPE.Association,
  },
  {
    source: "Donald Trump",
    target: "Elon Musk",
    type: LINK_TYPE.Association,
  },
  {
    source: "Jared Kushner",
    target: "Joshua Kushner",
    type: LINK_TYPE.Association,
  },
  {
    source: "Joshua Kushner",
    target: "Thrive Capital",
    type: LINK_TYPE.InfluenceControl,
  },
  {
    source: "Joshua Kushner",
    target: "Oscar Health",
    type: LINK_TYPE.InfluenceControl,
  },
  {
    source: "Thrive Capital",
    target: "Oscar Health",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "Jared Kushner",
    target: "Thrive Capital",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "Joshua Kushner",
    target: "Kickstarter",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "Jared Kushner",
    target: "Kickstarter",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "Etsy",
    target: "Kushner Properties",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "Jared Kushner",
    target: "Kushner Properties",
    type: LINK_TYPE.InfluenceControl,
  },
  {
    source: "Peter Thiel",
    target: "Thrive Capital",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "Peter Thiel",
    target: "Elon Musk",
    type: LINK_TYPE.Association,
  },
  {
    source: "Elon Musk",
    target: "Tesla",
    type: LINK_TYPE.InfluenceControl,
  },
  {
    source: "Elon Musk",
    target: "SpaceX",
    type: LINK_TYPE.InfluenceControl,
  },
  {
    source: "IRS",
    target: "SpaceX",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "Peter Thiel",
    target: "Facebook",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "Peter Thiel",
    target: "Y Combinator",
    type: LINK_TYPE.InfluenceControl,
  },
  {
    source: "Peter Thiel",
    target: "Palantir",
    type: LINK_TYPE.InfluenceControl,
  },
  {
    source: "FBI",
    target: "Palantir",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "IRS",
    target: "FBI",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "Peter Thiel",
    target: "Founders Fund",
    type: LINK_TYPE.InfluenceControl,
  },
  {
    source: "Founders Fund",
    target: "Airbnb",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "Y Combinator",
    target: "Airbnb",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "Y Combinator",
    target: "Stripe",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "Founders Fund",
    target: "Oscar Health",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "Founders Fund",
    target: "Facebook",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "Founders Fund",
    target: "SpaceX",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "Founders Fund",
    target: "Palantir",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "Founders Fund",
    target: "Spotify",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "Spotify",
    target: "Facebook",
    type: LINK_TYPE.FinancialServiceProvider,
  },
  {
    source: "Founders Fund",
    target: "Stripe",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "Stripe",
    target: "Kickstarter",
    type: LINK_TYPE.FinancialServiceProvider,
  },
  {
    source: "Stripe",
    target: "Shopify",
    type: LINK_TYPE.FinancialServiceProvider,
  },
  {
    source: "Shopify",
    target: "Breitbart",
    type: LINK_TYPE.FinancialServiceProvider,
  },
  {
    source: "Google",
    target: "Breitbart",
    type: LINK_TYPE.FinancialServiceProvider,
  },
  {
    source: "Stephen Bannon",
    target: "Breitbart",
    type: LINK_TYPE.InfluenceControl,
  },
  {
    source: "Thrive Capital",
    target: "Stripe",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "Thrive Capital",
    target: "Instagram",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "Facebook",
    target: "Instagram",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "Thrive Capital",
    target: "Hot Potato",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "Jared Kushner",
    target: "Hot Potato",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "Facebook",
    target: "Hot Potato",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "News Corp",
    target: "AppNexus",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "AppNexus",
    target: "Breitbart",
    type: LINK_TYPE.FinancialServiceProvider,
  },
  {
    source: "Rupert Murdoch",
    target: "News Corp",
    type: LINK_TYPE.InfluenceControl,
  },
  {
    source: "Elaine Chao",
    target: "News Corp",
    type: LINK_TYPE.InfluenceControl,
  },
  {
    source: "Donald Trump",
    target: "Elaine Chao",
    type: LINK_TYPE.Association,
  },
  {
    source: "Donald Trump",
    target: "Rupert Murdoch",
    type: LINK_TYPE.Association,
  },
  {
    source: "Donald Trump",
    target: "Travis Kalanick",
    type: LINK_TYPE.Association,
  },
  {
    source: "Travis Kalanick",
    target: "Uber",
    type: LINK_TYPE.InfluenceControl,
  },
  {
    source: "Rupert Murdoch",
    target: "21st Century Fox",
    type: LINK_TYPE.InfluenceControl,
  },
  {
    source: "Amazon",
    target: "Breitbart",
    type: LINK_TYPE.FinancialServiceProvider,
  },
  {
    source: "Donald Trump",
    target: "Indra Nooyi",
    type: LINK_TYPE.Association,
  },
  {
    source: "Indra Nooyi",
    target: "PepsiCo",
    type: LINK_TYPE.InfluenceControl,
  },
  {
    source: "Donald Trump",
    target: "Doug McMillon",
    type: LINK_TYPE.Association,
  },
  {
    source: "Doug McMillon",
    target: "Walmart",
    type: LINK_TYPE.InfluenceControl,
  },
  {
    source: "Donald Trump",
    target: "Ginni Rometty",
    type: LINK_TYPE.Association,
  },
  {
    source: "Ginni Rometty",
    target: "IBM",
    type: LINK_TYPE.InfluenceControl,
  },
  {
    source: "Donald Trump",
    target: "Mary Barra",
    type: LINK_TYPE.Association,
  },
  {
    source: "Mary Barra",
    target: "General Motors",
    type: LINK_TYPE.InfluenceControl,
  },
  {
    source: "Donald Trump",
    target: "Ivanka Trump",
    type: LINK_TYPE.Association,
  },
  {
    source: "Jared Kushner",
    target: "Ivanka Trump",
    type: LINK_TYPE.Association,
  },
  {
    source: "Nordstrom",
    target: "Ivanka Trump",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "Amazon",
    target: "Ivanka Trump",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "Walmart",
    target: "Ivanka Trump",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "Macy's",
    target: "Ivanka Trump",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "Zappos",
    target: "Ivanka Trump",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "Hudson's Bay",
    target: "Ivanka Trump",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "IRS",
    target: "Donald Trump",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "Donald Trump",
    target: "Carl Icahn",
    type: LINK_TYPE.Association,
  },
  {
    source: "Carl Icahn",
    target: "Icahn Enterprises",
    type: LINK_TYPE.InfluenceControl,
  },
  {
    source: "Icahn Enterprises",
    target: "Lyft",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "Founders Fund",
    target: "Lyft",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "General Motors",
    target: "Lyft",
    type: LINK_TYPE.FinancialTransaction,
  },
  ////////////////////////////////////////////
  {
    source: "You",
    target: "Facebook",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "You",
    target: "Kickstarter",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "You",
    target: "Etsy",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "You",
    target: "IRS",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "You",
    target: "Airbnb",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "You",
    target: "Spotify",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "You",
    target: "Shopify",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "You",
    target: "Google",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "You",
    target: "Tesla",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "You",
    target: "Oscar Health",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "You",
    target: "Instagram",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "You",
    target: "Uber",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "You",
    target: "21st Century Fox",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "You",
    target: "Amazon",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "You",
    target: "PepsiCo",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "You",
    target: "Walmart",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "You",
    target: "IBM",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "You",
    target: "General Motors",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "You",
    target: "Nordstrom",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "You",
    target: "News Corp",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "You",
    target: "Lyft",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "You",
    target: "Macy's",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "You",
    target: "Zappos",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "You",
    target: "Hudson's Bay",
    type: LINK_TYPE.FinancialTransaction,
  },
  {
    source: "You",
    target: "Disney",
    type: LINK_TYPE.FinancialTransaction,
  },
  //
  {
    source: "#DeleteUber",
    target: "Uber",
    type: LINK_TYPE.Action,
  },
  {
    source: "#DeleteShopify",
    target: "Shopify",
    type: LINK_TYPE.Action,
  },
  {
    source: "#DeleteAmazon",
    target: "Amazon",
    type: LINK_TYPE.Action,
  },
  {
    source: "#GrabYourWallet",
    target: "Amazon",
    type: LINK_TYPE.Action,
  },
  {
    source: "#GrabYourWallet",
    target: "Walmart",
    type: LINK_TYPE.Action,
  },
  {
    source: "#GrabYourWallet",
    target: "Nordstrom",
    type: LINK_TYPE.Action,
  },
  {
    source: "#GrabYourWallet",
    target: "Macy's",
    type: LINK_TYPE.Action,
  },
  {
    source: "#GrabYourWallet",
    target: "Zappos",
    type: LINK_TYPE.Action,
  },
  {
    source: "#GrabYourWallet",
    target: "Hudson's Bay",
    type: LINK_TYPE.Action,
  },
  {
    source: "#DeleteLyft",
    target: "Lyft",
    type: LINK_TYPE.Action,
  },
  {
    source: "#Baycott",
    target: "Hudson's Bay",
    type: LINK_TYPE.Action,
  },
  {
    source: "#Resist",
    target: "Donald Trump",
    type: LINK_TYPE.Action,
  },
  {
    source: "Bob Iger",
    target: "Disney",
    type: LINK_TYPE.InfluenceControl,
  },
  {
    source: "Donald Trump",
    target: "Bob Iger",
    type: LINK_TYPE.Association,
  },
];

// http://www.lombardinetworks.net/lombardi.owl
var NODE_TYPE = {
  Person: "person",
  Organization: "organization",
  Product: "product",
  Action: "action"
}

// map of name to {name, type}
var nodes = {
  "You": {
    "name": "You",
    "type": "person",
    "x": 26.973923633085,
    "y": 368.20016299542,
    "index": 0,
    "weight": 25,
    "px": 26.973923633085,
    "py": 368.20016299542,
    "fixed": true
  },
  "Donald Trump": {
    "name": "Donald Trump",
    "type": "person",
    "x": 1401.8101046652,
    "y": 391.7227652735,
    "index": 1,
    "weight": 16,
    "px": 1401.8101046652,
    "py": 391.7227652735,
    "fixed": true
  },
  "Peter Thiel": {
    "name": "Peter Thiel",
    "type": "person",
    "x": 1109.6980806821,
    "y": 316.10672811642,
    "index": 2,
    "weight": 7,
    "px": 1109.6980806821,
    "py": 316.10672811642,
    "fixed": true
  },
  "Jared Kushner": {
    "name": "Jared Kushner",
    "type": "person",
    "x": 1281.6952868308,
    "y": 257.43652563184,
    "index": 3,
    "weight": 7,
    "px": 1281.6952868308,
    "py": 257.43652563184,
    "fixed": true
  },
  "Joshua Kushner": {
    "name": "Joshua Kushner",
    "type": "person",
    "x": 1283.1871976334,
    "y": 134.17515587782,
    "index": 4,
    "weight": 4,
    "px": 1283.1871976334,
    "py": 134.17515587782,
    "fixed": true
  },
  "Stephen Bannon": {
    "name": "Stephen Bannon",
    "type": "person",
    "x": 1205.729565686,
    "y": 695.49538397871,
    "index": 5,
    "weight": 2,
    "px": 1205.729565686,
    "py": 695.49538397871,
    "fixed": true
  },
  "Thrive Capital": {
    "name": "Thrive Capital",
    "type": "organization",
    "x": 858.9794188425,
    "y": 99.790016072233,
    "index": 6,
    "weight": 7,
    "px": 858.9794188425,
    "py": 99.790016072233,
    "fixed": true
  },
  "Facebook": {
    "name": "Facebook",
    "type": "organization",
    "x": 200.94691663505,
    "y": 572.03301628711,
    "index": 7,
    "weight": 6,
    "px": 200.94691663505,
    "py": 572.03301628711,
    "fixed": true
  },
  "Y Combinator": {
    "name": "Y Combinator",
    "type": "organization",
    "x": 948.40366519478,
    "y": 98.849094348932,
    "index": 8,
    "weight": 3,
    "px": 948.40366519478,
    "py": 98.849094348932,
    "fixed": true
  },
  "Kickstarter": {
    "name": "Kickstarter",
    "type": "organization",
    "x": 667.29846444253,
    "y": 336.71425421352,
    "index": 9,
    "weight": 4,
    "px": 667.29846444253,
    "py": 336.71425421352,
    "fixed": true
  },
  "Etsy": {
    "name": "Etsy",
    "type": "organization",
    "x": 663.70678869626,
    "y": 264.538767986,
    "index": 10,
    "weight": 2,
    "px": 663.70678869626,
    "py": 264.538767986,
    "fixed": true
  },
  "Kushner Properties": {
    "name": "Kushner Properties",
    "type": "organization",
    "x": 1043.9746100732,
    "y": 434.1098742116,
    "index": 11,
    "weight": 2,
    "px": 1043.9746100732,
    "py": 434.1098742116,
    "fixed": true
  },
  "Elon Musk": {
    "name": "Elon Musk",
    "type": "person",
    "x": 1200.1683107782,
    "y": 317.69314275046,
    "index": 12,
    "weight": 4,
    "px": 1200.1683107782,
    "py": 317.69314275046,
    "fixed": true
  },
  "SpaceX": {
    "name": "SpaceX",
    "type": "organization",
    "x": 846.03261879157,
    "y": 313.45421235419,
    "index": 13,
    "weight": 3,
    "px": 846.03261879157,
    "py": 313.45421235419,
    "fixed": true
  },
  "IRS": {
    "name": "IRS",
    "type": "organization",
    "x": 739.30392491409,
    "y": 477.20037806325,
    "index": 14,
    "weight": 4,
    "px": 739.30392491409,
    "py": 477.20037806325,
    "fixed": true
  },
  "Palantir": {
    "name": "Palantir",
    "type": "organization",
    "x": 851.39728149433,
    "y": 394.61889275717,
    "index": 15,
    "weight": 3,
    "px": 851.39728149433,
    "py": 394.61889275717,
    "fixed": true
  },
  "FBI": {
    "name": "FBI",
    "type": "organization",
    "x": 852.6703608743,
    "y": 478.279732144,
    "index": 16,
    "weight": 2,
    "px": 852.6703608743,
    "py": 478.279732144,
    "fixed": true
  },
  "Founders Fund": {
    "name": "Founders Fund",
    "type": "organization",
    "x": 1040.6697613508,
    "y": 104.10747490195,
    "index": 17,
    "weight": 9,
    "px": 1040.6697613508,
    "py": 104.10747490195,
    "fixed": true
  },
  "Airbnb": {
    "name": "Airbnb",
    "type": "organization",
    "x": 197.4371451933,
    "y": 408.11829224255,
    "index": 18,
    "weight": 3,
    "px": 197.4371451933,
    "py": 408.11829224255,
    "fixed": true
  },
  "Spotify": {
    "name": "Spotify",
    "type": "organization",
    "x": 197.40820285893,
    "y": 492.63903820503,
    "index": 19,
    "weight": 3,
    "px": 197.40820285893,
    "py": 492.63903820503,
    "fixed": true
  },
  "Stripe": {
    "name": "Stripe",
    "type": "organization",
    "x": 476.51856727901,
    "y": 720.73365322905,
    "index": 20,
    "weight": 5,
    "px": 476.51856727901,
    "py": 720.73365322905,
    "fixed": true
  },
  "Shopify": {
    "name": "Shopify",
    "type": "organization",
    "x": 408.68502113393,
    "y": 640.89344225909,
    "index": 21,
    "weight": 4,
    "px": 408.68502113393,
    "py": 640.89344225909,
    "fixed": true
  },
  "Breitbart": {
    "name": "Breitbart",
    "type": "organization",
    "x": 661.16328239668,
    "y": 657.25519196799,
    "index": 22,
    "weight": 5,
    "px": 661.16328239668,
    "py": 657.25519196799,
    "fixed": true
  },
  "Google": {
    "name": "Google",
    "type": "organization",
    "x": 300.13961332602,
    "y": 638.24988756967,
    "index": 23,
    "weight": 2,
    "px": 300.13961332602,
    "py": 638.24988756967,
    "fixed": true
  },
  "Tesla": {
    "name": "Tesla",
    "type": "organization",
    "x": 419.72997444246,
    "y": 398.07768769347,
    "index": 24,
    "weight": 2,
    "px": 419.72997444246,
    "py": 398.07768769347,
    "fixed": true
  },
  "Oscar Health": {
    "name": "Oscar Health",
    "type": "organization",
    "x": 733.13185216078,
    "y": 188.5905630813,
    "index": 25,
    "weight": 4,
    "px": 733.13185216078,
    "py": 188.5905630813,
    "fixed": true
  },
  "Instagram": {
    "name": "Instagram",
    "type": "organization",
    "x": 119.9418255341,
    "y": 571.68340492321,
    "index": 26,
    "weight": 3,
    "px": 119.9418255341,
    "py": 571.68340492321,
    "fixed": true
  },
  "Hot Potato": {
    "name": "Hot Potato",
    "type": "organization",
    "x": 116.69332587322,
    "y": 496.34495722208,
    "index": 27,
    "weight": 3,
    "px": 116.69332587322,
    "py": 496.34495722208,
    "fixed": true
  },
  "News Corp": {
    "name": "News Corp",
    "type": "organization",
    "x": 660.71618441441,
    "y": 727.74029082698,
    "index": 28,
    "weight": 4,
    "px": 660.71618441441,
    "py": 727.74029082698,
    "fixed": true
  },
  "AppNexus": {
    "name": "AppNexus",
    "type": "organization",
    "x": 581.91900042986,
    "y": 725.09361667437,
    "index": 29,
    "weight": 2,
    "px": 581.91900042986,
    "py": 725.09361667437,
    "fixed": true
  },
  "Rupert Murdoch": {
    "name": "Rupert Murdoch",
    "type": "person",
    "x": 1202.8991448844,
    "y": 642.65123491356,
    "index": 30,
    "weight": 3,
    "px": 1202.8991448844,
    "py": 642.65123491356,
    "fixed": true
  },
  "Elaine Chao": {
    "name": "Elaine Chao",
    "type": "person",
    "x": 1203.0969339189,
    "y": 590.38120533299,
    "index": 31,
    "weight": 2,
    "px": 1203.0969339189,
    "py": 590.38120533299,
    "fixed": true
  },
  "Travis Kalanick": {
    "name": "Travis Kalanick",
    "type": "person",
    "x": 1202.5712846978,
    "y": 396.21733339884,
    "index": 32,
    "weight": 2,
    "px": 1202.5712846978,
    "py": 396.21733339884,
    "fixed": true
  },
  "Uber": {
    "name": "Uber",
    "type": "organization",
    "x": 196.48508701993,
    "y": 261.0579695148,
    "index": 33,
    "weight": 3,
    "px": 196.48508701993,
    "py": 261.0579695148,
    "fixed": true
  },
  "21st Century Fox": {
    "name": "21st Century Fox",
    "type": "organization",
    "x": 659.91373126969,
    "y": 589.09567337175,
    "index": 34,
    "weight": 2,
    "px": 659.91373126969,
    "py": 589.09567337175,
    "fixed": true
  },
  "Amazon": {
    "name": "Amazon",
    "type": "organization",
    "x": 298.71193360783,
    "y": 190.73208620614,
    "index": 35,
    "weight": 5,
    "px": 298.71193360783,
    "py": 190.73208620614,
    "fixed": true
  },
  "Indra Nooyi": {
    "name": "Indra Nooyi",
    "type": "person",
    "x": 1277.1698215975,
    "y": 400.60645137902,
    "index": 36,
    "weight": 2,
    "px": 1277.1698215975,
    "py": 400.60645137902,
    "fixed": true
  },
  "PepsiCo": {
    "name": "PepsiCo",
    "type": "organization",
    "x": 496.54797248111,
    "y": 329.64778486563,
    "index": 37,
    "weight": 2,
    "px": 496.54797248111,
    "py": 329.64778486563,
    "fixed": true
  },
  "Doug McMillon": {
    "name": "Doug McMillon",
    "type": "person",
    "x": 1201.0773775468,
    "y": 527.07462610298,
    "index": 38,
    "weight": 2,
    "px": 1201.0773775468,
    "py": 527.07462610298,
    "fixed": true
  },
  "Walmart": {
    "name": "Walmart",
    "type": "organization",
    "x": 540.37002262172,
    "y": 184.99909940964,
    "index": 39,
    "weight": 4,
    "px": 540.37002262172,
    "py": 184.99909940964,
    "fixed": true
  },
  "Ginni Rometty": {
    "name": "Ginni Rometty",
    "type": "person",
    "x": 1203.8497417155,
    "y": 458.18043519301,
    "index": 40,
    "weight": 2,
    "px": 1203.8497417155,
    "py": 458.18043519301,
    "fixed": true
  },
  "IBM": {
    "name": "IBM",
    "type": "organization",
    "x": 498.84315984566,
    "y": 399.17602300339,
    "index": 41,
    "weight": 2,
    "px": 498.84315984566,
    "py": 399.17602300339,
    "fixed": true
  },
  "Mary Barra": {
    "name": "Mary Barra",
    "type": "person",
    "x": 1278.5314901923,
    "y": 528.4537791966,
    "index": 42,
    "weight": 2,
    "px": 1278.5314901923,
    "py": 528.4537791966,
    "fixed": true
  },
  "General Motors": {
    "name": "General Motors",
    "type": "organization",
    "x": 421.63230936489,
    "y": 331.26372937679,
    "index": 43,
    "weight": 3,
    "px": 421.63230936489,
    "py": 331.26372937679,
    "fixed": true
  },
  "Ivanka Trump": {
    "name": "Ivanka Trump",
    "type": "person",
    "x": 1369.083457899,
    "y": 257.05223909487,
    "index": 44,
    "weight": 8,
    "px": 1369.083457899,
    "py": 257.05223909487,
    "fixed": true
  },
  "Nordstrom": {
    "name": "Nordstrom",
    "type": "organization",
    "x": 595.24197399456,
    "y": 117.82563629461,
    "index": 45,
    "weight": 3,
    "px": 595.24197399456,
    "py": 117.82563629461,
    "fixed": true
  },
  "#DeleteUber": {
    "name": "#DeleteUber",
    "type": "action",
    "x": 77.398237040031,
    "y": 164.72038960414,
    "index": 46,
    "weight": 1,
    "px": 77.398237040031,
    "py": 164.72038960414,
    "fixed": true
  },
  "#DeleteShopify": {
    "name": "#DeleteShopify",
    "type": "action",
    "x": 305.20252548415,
    "y": 735.43895288441,
    "index": 47,
    "weight": 1,
    "px": 305.20252548415,
    "py": 735.43895288441,
    "fixed": true
  },
  "#DeleteAmazon": {
    "name": "#DeleteAmazon",
    "type": "action",
    "x": 139.99983631858,
    "y": 108.29291050606,
    "index": 48,
    "weight": 1,
    "px": 139.99983631858,
    "py": 108.29291050606,
    "fixed": true
  },
  "#GrabYourWallet": {
    "name": "#GrabYourWallet",
    "type": "action",
    "x": 448.10832280689,
    "y": 10.485596118669,
    "index": 49,
    "weight": 6,
    "px": 448.10832280689,
    "py": 10.485596118669,
    "fixed": true
  },
  "#DeleteLyft": {
    "name": "#DeleteLyft",
    "type": "action",
    "x": 44.466636506433,
    "y": 242.42707205548,
    "index": 50,
    "weight": 1,
    "px": 44.466636506433,
    "py": 242.42707205548,
    "fixed": true
  },
  "#Baycott": {
    "name": "#Baycott",
    "type": "action",
    "x": 172.87630739034,
    "y": 48.145584392222,
    "index": 51,
    "weight": 1,
    "px": 172.87630739034,
    "py": 48.145584392222,
    "fixed": true
  },
  "#Resist": {
    "name": "#Resist",
    "type": "action",
    "x": 1391.0322229232,
    "y": 190.61018894428,
    "index": 52,
    "weight": 1,
    "px": 1391.0322229232,
    "py": 190.61018894428,
    "fixed": true
  },
  "Carl Icahn": {
    "name": "Carl Icahn",
    "type": "person",
    "x": 1209.1889304382,
    "y": 747.65562583922,
    "index": 53,
    "weight": 2,
    "px": 1209.1889304382,
    "py": 747.65562583922,
    "fixed": true
  },
  "Icahn Enterprises": {
    "name": "Icahn Enterprises",
    "type": "organization",
    "x": 1044.716073695,
    "y": 509.38700980561,
    "index": 54,
    "weight": 2,
    "px": 1044.716073695,
    "py": 509.38700980561,
    "fixed": true
  },
  "Lyft": {
    "name": "Lyft",
    "type": "organization",
    "x": 197.3394784502,
    "y": 335.8439129064,
    "index": 55,
    "weight": 5,
    "px": 197.3394784502,
    "py": 335.8439129064,
    "fixed": true
  },
  "Hudson's Bay": {
    "name": "Hudson's Bay",
    "type": "organization",
    "x": 298.66408923076,
    "y": 102.20437241486,
    "index": 56,
    "weight": 4,
    "px": 298.66408923076,
    "py": 102.20437241486,
    "fixed": true
  },
  "Zappos": {
    "name": "Zappos",
    "type": "organization",
    "x": 378.73411541086,
    "y": 186.78307691167,
    "index": 57,
    "weight": 3,
    "px": 378.73411541086,
    "py": 186.78307691167,
    "fixed": true
  },
  "Macy's": {
    "name": "Macy's",
    "type": "organization",
    "x": 458.28050793997,
    "y": 186.70440466031,
    "index": 58,
    "weight": 3,
    "px": 458.28050793997,
    "py": 186.70440466031,
    "fixed": true
  },
  "Disney": {
    "name": "Disney",
    "type": "organization",
    "x": 584.67835320704,
    "y": 590.43787983631,
    "index": 59,
    "weight": 2,
    "px": 584.67835320704,
    "py": 590.43787983631,
    "fixed": true
  },
  "Bob Iger": {
    "name": "Bob Iger",
    "type": "person",
    "x": 1276.9206752727,
    "y": 459.38701233268,
    "index": 60,
    "weight": 2,
    "px": 1276.9206752727,
    "py": 459.38701233268,
    "fixed": true
  }
};
