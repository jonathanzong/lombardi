var links, nodes;

var LINK_TYPE = {
  Association: "association",
  InfluenceControl: "influence-control",
  FinancialTransaction: "financial-transaction",
  FinancialServiceProvider: "financial-bidirectional",
  Action: "action",
}

// http://www.lombardinetworks.net/lombardi.owl
var NODE_TYPE = {
  Person: "person",
  Organization: "organization",
  Product: "product",
  Action: "action"
}

function initData() {
  // array of {source, target, type}
  links = [
    {
      source: "Donald Trump",
      target: "Peter Thiel",
      type: LINK_TYPE.Association,
      annotation: "Thiel advises Trump"
    },
    {
      source: "Donald Trump",
      target: "Jared Kushner",
      type: LINK_TYPE.Association,
      annotation: "Kushner is Trump's son-in-law"
    },
    {
      source: "Donald Trump",
      target: "Stephen Bannon",
      type: LINK_TYPE.Association,
      annotation: "Bannon is Trump's chief strategist"
    },
    {
      source: "Donald Trump",
      target: "Elon Musk",
      type: LINK_TYPE.Association,
      annotation: "Musk advises Trump"
    },
    {
      source: "Jared Kushner",
      target: "Joshua Kushner",
      type: LINK_TYPE.Association,
      annotation: "Brothers"
    },
    {
      source: "Joshua Kushner",
      target: "Thrive Capital",
      type: LINK_TYPE.InfluenceControl,
      annotation: "Josh Kushner founded Thrive"
    },
    {
      source: "Joshua Kushner",
      target: "Oscar Health",
      type: LINK_TYPE.InfluenceControl,
      annotation: "Josh Kushner co-founded Oscar"
    },
    {
      source: "Thrive Capital",
      target: "Oscar Health",
      type: LINK_TYPE.FinancialTransaction,
      annotation: "Thrive invests in Oscar"
    },
    {
      source: "Jared Kushner",
      target: "Thrive Capital",
      type: LINK_TYPE.FinancialTransaction,
      annotation: "Jared Kushner invests in Thrive"
    },
    {
      source: "Thrive Capital",
      target: "Kickstarter",
      type: LINK_TYPE.FinancialTransaction,
      annotation: "Thrive invests in Kickstarter"
    },
    {
      source: "Etsy",
      target: "Kushner Properties",
      type: LINK_TYPE.FinancialTransaction,
      annotation: "Etsy leases from Kushner Properties"
    },
    {
      source: "Jared Kushner",
      target: "Kushner Properties",
      type: LINK_TYPE.InfluenceControl,
      annotation: "Jared Kushner founded Kushner Properties"
    },
    {
      source: "Peter Thiel",
      target: "Thrive Capital",
      type: LINK_TYPE.FinancialTransaction,
      annotation: "Thiel invests in Thrive"
    },
    {
      source: "Peter Thiel",
      target: "Elon Musk",
      type: LINK_TYPE.Association,
      annotation: "Members of the Paypal Mafia"
    },
    {
      source: "Elon Musk",
      target: "Tesla",
      type: LINK_TYPE.InfluenceControl,
      annotation: "Musk founded Tesla"
    },
    {
      source: "Elon Musk",
      target: "SpaceX",
      type: LINK_TYPE.InfluenceControl,
      annotation: "Musk founded SpaceX"
    },
    {
      source: "IRS",
      target: "SpaceX",
      type: LINK_TYPE.FinancialTransaction,
      annotation: "SpaceX holds federal contracts"
    },
    {
      source: "Peter Thiel",
      target: "Facebook",
      type: LINK_TYPE.FinancialTransaction,
      annotation: "Thiel is on the board of Facebook"
    },
    {
      source: "Peter Thiel",
      target: "Y Combinator",
      type: LINK_TYPE.InfluenceControl,
      annotation: "Thiel is a part-time partner at Y Combinator"
    },
    {
      source: "Peter Thiel",
      target: "Palantir",
      type: LINK_TYPE.InfluenceControl,
      annotation: "Thiel founded Palantir"
    },
    {
      source: "FBI",
      target: "Palantir",
      type: LINK_TYPE.FinancialTransaction,
      annotation: "The FBI is a client of Palantir"
    },
    {
      source: "IRS",
      target: "FBI",
      type: LINK_TYPE.FinancialTransaction,
      annotation: "The FBI is federally funded"
    },
    {
      source: "Peter Thiel",
      target: "Founders Fund",
      type: LINK_TYPE.InfluenceControl,
      annotation: "Thiel founded Founders Fund"
    },
    {
      source: "Founders Fund",
      target: "Airbnb",
      type: LINK_TYPE.FinancialTransaction,
      annotation: "Founders Fund invests in Airbnb"
    },
    {
      source: "Y Combinator",
      target: "Airbnb",
      type: LINK_TYPE.FinancialTransaction,
      annotation: "Y Combinator invests in Airbnb"
    },
    {
      source: "Y Combinator",
      target: "Stripe",
      type: LINK_TYPE.FinancialTransaction,
      annotation: "Y Combinator invests in Stripe"
    },
    {
      source: "Founders Fund",
      target: "Oscar Health",
      type: LINK_TYPE.FinancialTransaction,
      annotation: "Founders Fund invests in Oscar"
    },
    {
      source: "Founders Fund",
      target: "Facebook",
      type: LINK_TYPE.FinancialTransaction,
      annotation: "Founders Fund invests in Facebook"
    },
    {
      source: "Founders Fund",
      target: "SpaceX",
      type: LINK_TYPE.FinancialTransaction,
      annotation: "Founders Fund invests in SpaceX"
    },
    {
      source: "Founders Fund",
      target: "Palantir",
      type: LINK_TYPE.FinancialTransaction,
      annotation: "Founders Fund invests in Palantir"
    },
    {
      source: "Founders Fund",
      target: "Spotify",
      type: LINK_TYPE.FinancialTransaction,
      annotation: "Founders Fund invests in Spotify"
    },
    {
      source: "Spotify",
      target: "Facebook",
      type: LINK_TYPE.FinancialServiceProvider,
      annotation: "Spotify partners with Facebook"
    },
    {
      source: "Founders Fund",
      target: "Stripe",
      type: LINK_TYPE.FinancialTransaction,
      annotation: "Founders Fund invests in Stripe"
    },
    {
      source: "Stripe",
      target: "Kickstarter",
      type: LINK_TYPE.FinancialServiceProvider,
      annotation: "Stripe processes payments for Kickstarter"
    },
    {
      source: "Stripe",
      target: "Shopify",
      type: LINK_TYPE.FinancialServiceProvider,
      annotation: "Stripe processes payments for Shopify"
    },
    {
      source: "Shopify",
      target: "Breitbart",
      type: LINK_TYPE.FinancialServiceProvider,
      annotation: "Stripe processes payments for Breitbart"
    },
    {
      source: "Google",
      target: "Breitbart",
      type: LINK_TYPE.FinancialServiceProvider,
      annotation: "Google advertises on Breitbart"
    },
    {
      source: "Stephen Bannon",
      target: "Breitbart",
      type: LINK_TYPE.InfluenceControl,
      annotation: "Bannon is executive chair of Breitbart"
    },
    {
      source: "Thrive Capital",
      target: "Stripe",
      type: LINK_TYPE.FinancialTransaction,
      annotation: "Thrive invests in Stripe"
    },
    {
      source: "Thrive Capital",
      target: "Instagram",
      type: LINK_TYPE.FinancialTransaction,
      annotation: "Thrive invests in Instagram"
    },
    {
      source: "Facebook",
      target: "Instagram",
      type: LINK_TYPE.FinancialTransaction,
      annotation: "Facebook owns Instagram"
    },
    {
      source: "Thrive Capital",
      target: "Hot Potato",
      type: LINK_TYPE.FinancialTransaction,
      annotation: "Thrive invested in Hot Potato"
    },
    {
      source: "Jared Kushner",
      target: "Hot Potato",
      type: LINK_TYPE.FinancialTransaction,
      annotation: "Jared Kushner invested in Hot Potato"
    },
    {
      source: "Facebook",
      target: "Hot Potato",
      type: LINK_TYPE.FinancialTransaction,
      annotation: "Facebook owns Hot Potato"
    },
    {
      source: "News Corp",
      target: "AppNexus",
      type: LINK_TYPE.FinancialTransaction,
      annotation: "News Corp invests in AppNexus"
    },
    {
      source: "AppNexus",
      target: "Breitbart",
      type: LINK_TYPE.FinancialServiceProvider,
      annotation: "AppNexus advertises on Breitbart"
    },
    {
      source: "Rupert Murdoch",
      target: "News Corp",
      type: LINK_TYPE.InfluenceControl,
      annotation: "Murdoch founded News Corp"
    },
    {
      source: "Elaine Chao",
      target: "News Corp",
      type: LINK_TYPE.InfluenceControl,
      annotation: "Chao was on the board of News Corp"
    },
    {
      source: "Donald Trump",
      target: "Elaine Chao",
      type: LINK_TYPE.Association,
      annotation: "Chao serves on Trump's cabinet"
    },
    {
      source: "Donald Trump",
      target: "Rupert Murdoch",
      type: LINK_TYPE.Association,
      annotation: "Murdoch and Trump are close friends"
    },
    {
      source: "Donald Trump",
      target: "Travis Kalanick",
      type: LINK_TYPE.Association,
      annotation: "Kalanick advised Trump"
    },
    {
      source: "Travis Kalanick",
      target: "Uber",
      type: LINK_TYPE.InfluenceControl,
      annotation: "Kalanick founded Uber"
    },
    {
      source: "Rupert Murdoch",
      target: "21st Century Fox",
      type: LINK_TYPE.InfluenceControl,
      annotation: "Murdoch owns Fox"
    },
    {
      source: "Amazon",
      target: "Breitbart",
      type: LINK_TYPE.FinancialServiceProvider,
      annotation: "Amazon advertises on Breitbart"
    },
    {
      source: "Donald Trump",
      target: "Indra Nooyi",
      type: LINK_TYPE.Association,
      annotation: "Nooyi advises Trump"
    },
    {
      source: "Indra Nooyi",
      target: "PepsiCo",
      type: LINK_TYPE.InfluenceControl,
      annotation: "Nooyi is CEO of PepsiCo"
    },
    {
      source: "Donald Trump",
      target: "Doug McMillon",
      type: LINK_TYPE.Association,
      annotation: "McMillon advises Trump"
    },
    {
      source: "Doug McMillon",
      target: "Walmart",
      type: LINK_TYPE.InfluenceControl,
      annotation: "McMillon is CEO of Walmart"
    },
    {
      source: "Donald Trump",
      target: "Ginni Rometty",
      type: LINK_TYPE.Association,
      annotation: "Rometty advises Trump"
    },
    {
      source: "Ginni Rometty",
      target: "IBM",
      type: LINK_TYPE.InfluenceControl,
      annotation: "Rometty is CEO of IBM"
    },
    {
      source: "Donald Trump",
      target: "Mary Barra",
      type: LINK_TYPE.Association,
      annotation: "Barra advises Trump"
    },
    {
      source: "Mary Barra",
      target: "General Motors",
      type: LINK_TYPE.InfluenceControl,
      annotation: "Barra is CEO of GM"
    },
    {
      source: "Donald Trump",
      target: "Ivanka Trump",
      type: LINK_TYPE.Association,
      annotation: "Ivanka is Donald's daughter"
    },
    {
      source: "Jared Kushner",
      target: "Ivanka Trump",
      type: LINK_TYPE.Association,
      annotation: "Kushner and Trump are married"
    },
    {
      source: "Nordstrom",
      target: "Ivanka Trump",
      type: LINK_TYPE.FinancialTransaction,
      annotation: "Nordstrom carried Trump apparel"
    },
    {
      source: "Amazon",
      target: "Ivanka Trump",
      type: LINK_TYPE.FinancialTransaction,
      annotation: "Amazon carries Trump apparel"
    },
    {
      source: "Walmart",
      target: "Ivanka Trump",
      type: LINK_TYPE.FinancialTransaction,
      annotation: "Walmart carries Trump apparel"
    },
    {
      source: "Macy's",
      target: "Ivanka Trump",
      type: LINK_TYPE.FinancialTransaction,
      annotation: "Macy's carries Trump apparel"
    },
    {
      source: "Zappos",
      target: "Ivanka Trump",
      type: LINK_TYPE.FinancialTransaction,
      annotation: "Zappos carries Trump apparel"
    },
    {
      source: "Hudson's Bay",
      target: "Ivanka Trump",
      type: LINK_TYPE.FinancialTransaction,
      annotation: "Hudson's Bay carries Trump apparel"
    },
    {
      source: "IRS",
      target: "Donald Trump",
      type: LINK_TYPE.FinancialTransaction,
      annotation: "Trump has a federal salary"
    },
    {
      source: "Donald Trump",
      target: "Carl Icahn",
      type: LINK_TYPE.Association,
      annotation: "Icahn advises Trump"
    },
    {
      source: "Carl Icahn",
      target: "Icahn Enterprises",
      type: LINK_TYPE.InfluenceControl,
      annotation: "Icahn founded Icahn Enterprises"
    },
    {
      source: "Icahn Enterprises",
      target: "Lyft",
      type: LINK_TYPE.FinancialTransaction,
      annotation: "Icahn Enterprises invests in Lyft"
    },
    {
      source: "Founders Fund",
      target: "Lyft",
      type: LINK_TYPE.FinancialTransaction,
      annotation: "Founders Fund invests in Lyft"
    },
    {
      source: "General Motors",
      target: "Lyft",
      type: LINK_TYPE.FinancialTransaction,
      annotation: "GM invests in Lyft"
    },
    {
      source: "IRS",
      target: "Elaine Chao",
      type: LINK_TYPE.FinancialTransaction,
      annotation: "Chao has a federal salary"
    },
    {
      source: "Bob Iger",
      target: "Disney",
      type: LINK_TYPE.InfluenceControl,
      annotation: "Iger is CEO of Disney"
    },
    {
      source: "Donald Trump",
      target: "Bob Iger",
      type: LINK_TYPE.Association,
      annotation: "Iger advises Trump"
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
  ];

  // map of name to {name, type}
  nodes = {
    "You": {
      "name": "You",
      "type": "person",
      "x": 21.579138906468,
      "y": 338.20016299542,
      "index": 0,
      "weight": 25,
      "px": 21.579138906468,
      "py": 338.20016299542,
      "fixed": true
    },
    "Donald Trump": {
      "name": "Donald Trump",
      "type": "person",
      "x": 1121.4480837322,
      "y": 361.7227652735,
      "index": 1,
      "weight": 16,
      "px": 1121.4480837322,
      "py": 361.7227652735,
      "fixed": true
    },
    "Peter Thiel": {
      "name": "Peter Thiel",
      "type": "person",
      "x": 887.75846454568,
      "y": 286.10672811642,
      "index": 2,
      "weight": 7,
      "px": 887.75846454568,
      "py": 286.10672811642,
      "fixed": true
    },
    "Jared Kushner": {
      "name": "Jared Kushner",
      "type": "person",
      "x": 1025.3562294646,
      "y": 227.43652563184,
      "index": 3,
      "weight": 7,
      "px": 1025.3562294646,
      "py": 227.43652563184,
      "fixed": true
    },
    "Joshua Kushner": {
      "name": "Joshua Kushner",
      "type": "person",
      "x": 1050.5497581067,
      "y": 135.17515587782,
      "index": 4,
      "weight": 4,
      "px": 1050.5497581067,
      "py": 135.17515587782,
      "fixed": true
    },
    "Stephen Bannon": {
      "name": "Stephen Bannon",
      "type": "person",
      "x": 964.5836525488,
      "y": 665.49538397871,
      "index": 5,
      "weight": 2,
      "px": 964.5836525488,
      "py": 665.49538397871,
      "fixed": true
    },
    "Thrive Capital": {
      "name": "Thrive Capital",
      "type": "organization",
      "x": 687.183535074,
      "y": 69.790016072233,
      "index": 6,
      "weight": 7,
      "px": 687.183535074,
      "py": 69.790016072233,
      "fixed": true
    },
    "Facebook": {
      "name": "Facebook",
      "type": "organization",
      "x": 160.75753330804,
      "y": 542.03301628711,
      "index": 7,
      "weight": 6,
      "px": 160.75753330804,
      "py": 542.03301628711,
      "fixed": true
    },
    "Y Combinator": {
      "name": "Y Combinator",
      "type": "organization",
      "x": 758.72293215582,
      "y": 68.849094348932,
      "index": 8,
      "weight": 3,
      "px": 758.72293215582,
      "py": 68.849094348932,
      "fixed": true
    },
    "Kickstarter": {
      "name": "Kickstarter",
      "type": "organization",
      "x": 533.83877155402,
      "y": 306.71425421352,
      "index": 9,
      "weight": 4,
      "px": 533.83877155402,
      "py": 306.71425421352,
      "fixed": true
    },
    "Etsy": {
      "name": "Etsy",
      "type": "organization",
      "x": 530.96543095701,
      "y": 234.538767986,
      "index": 10,
      "weight": 2,
      "px": 530.96543095701,
      "py": 234.538767986,
      "fixed": true
    },
    "Kushner Properties": {
      "name": "Kushner Properties",
      "type": "organization",
      "x": 835.17968805856,
      "y": 404.1098742116,
      "index": 11,
      "weight": 2,
      "px": 835.17968805856,
      "py": 404.1098742116,
      "fixed": true
    },
    "Elon Musk": {
      "name": "Elon Musk",
      "type": "person",
      "x": 960.13464862256,
      "y": 287.69314275046,
      "index": 12,
      "weight": 4,
      "px": 960.13464862256,
      "py": 287.69314275046,
      "fixed": true
    },
    "SpaceX": {
      "name": "SpaceX",
      "type": "organization",
      "x": 676.82609503326,
      "y": 283.45421235419,
      "index": 13,
      "weight": 3,
      "px": 676.82609503326,
      "py": 283.45421235419,
      "fixed": true
    },
    "IRS": {
      "name": "IRS",
      "type": "organization",
      "x": 591.44313993127,
      "y": 447.20037806325,
      "index": 14,
      "weight": 4,
      "px": 591.44313993127,
      "py": 447.20037806325,
      "fixed": true
    },
    "Palantir": {
      "name": "Palantir",
      "type": "organization",
      "x": 681.11782519546,
      "y": 364.61889275717,
      "index": 15,
      "weight": 3,
      "px": 681.11782519546,
      "py": 364.61889275717,
      "fixed": true
    },
    "FBI": {
      "name": "FBI",
      "type": "organization",
      "x": 682.13628869944,
      "y": 448.279732144,
      "index": 16,
      "weight": 2,
      "px": 682.13628869944,
      "py": 448.279732144,
      "fixed": true
    },
    "Founders Fund": {
      "name": "Founders Fund",
      "type": "organization",
      "x": 832.53580908064,
      "y": 74.10747490195,
      "index": 17,
      "weight": 9,
      "px": 832.53580908064,
      "py": 74.10747490195,
      "fixed": true
    },
    "Airbnb": {
      "name": "Airbnb",
      "type": "organization",
      "link": "http://www.airbnbhell.com/airbnb-competitors/",
      "x": 157.94971615464,
      "y": 378.11829224255,
      "index": 18,
      "weight": 3,
      "px": 157.94971615464,
      "py": 378.11829224255,
      "fixed": true
    },
    "Spotify": {
      "name": "Spotify",
      "type": "organization",
      "x": 89.160471894078,
      "y": 467.69537365425,
      "index": 19,
      "weight": 3,
      "px": 89.160471894078,
      "py": 467.69537365425,
      "fixed": true
    },
    "Stripe": {
      "name": "Stripe",
      "type": "organization",
      "x": 381.21485382321,
      "y": 690.73365322905,
      "index": 20,
      "weight": 5,
      "px": 381.21485382321,
      "py": 690.73365322905,
      "fixed": true
    },
    "Shopify": {
      "name": "Shopify",
      "type": "organization",
      "x": 326.94801690714,
      "y": 610.89344225909,
      "index": 21,
      "weight": 4,
      "px": 326.94801690714,
      "py": 610.89344225909,
      "fixed": true
    },
    "Breitbart": {
      "name": "Breitbart",
      "type": "organization",
      "x": 528.93062591734,
      "y": 627.25519196799,
      "index": 22,
      "weight": 5,
      "px": 528.93062591734,
      "py": 627.25519196799,
      "fixed": true
    },
    "Google": {
      "name": "Google",
      "type": "organization",
      "link": "https://duckduckgo.com/",
      "x": 240.11169066082,
      "y": 608.24988756967,
      "index": 23,
      "weight": 2,
      "px": 240.11169066082,
      "py": 608.24988756967,
      "fixed": true
    },
    "Tesla": {
      "name": "Tesla",
      "type": "organization",
      "x": 335.78397955397,
      "y": 368.07768769347,
      "index": 24,
      "weight": 2,
      "px": 335.78397955397,
      "py": 368.07768769347,
      "fixed": true
    },
    "Oscar Health": {
      "name": "Oscar Health",
      "type": "organization",
      "x": 586.50548172862,
      "y": 158.5905630813,
      "index": 25,
      "weight": 4,
      "px": 586.50548172862,
      "py": 158.5905630813,
      "fixed": true
    },
    "Instagram": {
      "name": "Instagram",
      "type": "organization",
      "x": 87.863326760288,
      "y": 540.6721134193,
      "index": 26,
      "weight": 3,
      "px": 87.863326760288,
      "py": 540.6721134193,
      "fixed": true
    },
    "Hot Potato": {
      "name": "Hot Potato",
      "type": "organization",
      "x": 158.07567662875,
      "y": 468.36750971231,
      "index": 27,
      "weight": 3,
      "px": 158.07567662875,
      "py": 468.36750971231,
      "fixed": true
    },
    "News Corp": {
      "name": "News Corp",
      "type": "organization",
      "x": 528.57294753153,
      "y": 697.74029082698,
      "index": 28,
      "weight": 4,
      "px": 528.57294753153,
      "py": 697.74029082698,
      "fixed": true
    },
    "AppNexus": {
      "name": "AppNexus",
      "type": "organization",
      "x": 465.53520034389,
      "y": 695.09361667437,
      "index": 29,
      "weight": 2,
      "px": 465.53520034389,
      "py": 695.09361667437,
      "fixed": true
    },
    "Rupert Murdoch": {
      "name": "Rupert Murdoch",
      "type": "person",
      "x": 962.31931590752,
      "y": 612.65123491356,
      "index": 30,
      "weight": 3,
      "px": 962.31931590752,
      "py": 612.65123491356,
      "fixed": true
    },
    "Elaine Chao": {
      "name": "Elaine Chao",
      "type": "person",
      "x": 962.47754713512,
      "y": 560.38120533299,
      "index": 31,
      "weight": 2,
      "px": 962.47754713512,
      "py": 560.38120533299,
      "fixed": true
    },
    "Travis Kalanick": {
      "name": "Travis Kalanick",
      "type": "person",
      "x": 962.05702775824,
      "y": 366.21733339884,
      "index": 32,
      "weight": 2,
      "px": 962.05702775824,
      "py": 366.21733339884,
      "fixed": true
    },
    "Uber": {
      "name": "Uber",
      "type": "organization",
      "link": "http://www.flywheel.com/",
      "x": 157.18806961594,
      "y": 231.0579695148,
      "index": 33,
      "weight": 3,
      "px": 157.18806961594,
      "py": 231.0579695148,
      "fixed": true
    },
    "21st Century Fox": {
      "name": "21st Century Fox",
      "type": "organization",
      "x": 527.93098501575,
      "y": 559.09567337175,
      "index": 34,
      "weight": 2,
      "px": 527.93098501575,
      "py": 559.09567337175,
      "fixed": true
    },
    "Amazon": {
      "name": "Amazon",
      "type": "organization",
      "x": 238.96954688626,
      "y": 160.73208620614,
      "index": 35,
      "weight": 5,
      "px": 238.96954688626,
      "py": 160.73208620614,
      "fixed": true
    },
    "Indra Nooyi": {
      "name": "Indra Nooyi",
      "type": "person",
      "x": 1021.735857278,
      "y": 370.60645137902,
      "index": 36,
      "weight": 2,
      "px": 1021.735857278,
      "py": 370.60645137902,
      "fixed": true
    },
    "PepsiCo": {
      "name": "PepsiCo",
      "type": "organization",
      "x": 397.23837798489,
      "y": 299.64778486563,
      "index": 37,
      "weight": 2,
      "px": 397.23837798489,
      "py": 299.64778486563,
      "fixed": true
    },
    "Doug McMillon": {
      "name": "Doug McMillon",
      "type": "person",
      "x": 960.86190203744,
      "y": 497.07462610298,
      "index": 38,
      "weight": 2,
      "px": 960.86190203744,
      "py": 497.07462610298,
      "fixed": true
    },
    "Walmart": {
      "name": "Walmart",
      "type": "organization",
      "x": 432.29601809738,
      "y": 154.99909940964,
      "index": 39,
      "weight": 4,
      "px": 432.29601809738,
      "py": 154.99909940964,
      "fixed": true
    },
    "Ginni Rometty": {
      "name": "Ginni Rometty",
      "type": "person",
      "x": 963.0797933724,
      "y": 428.18043519301,
      "index": 40,
      "weight": 2,
      "px": 963.0797933724,
      "py": 428.18043519301,
      "fixed": true
    },
    "IBM": {
      "name": "IBM",
      "type": "organization",
      "x": 399.07452787653,
      "y": 369.17602300339,
      "index": 41,
      "weight": 2,
      "px": 399.07452787653,
      "py": 369.17602300339,
      "fixed": true
    },
    "Mary Barra": {
      "name": "Mary Barra",
      "type": "person",
      "x": 1022.8251921538,
      "y": 498.4537791966,
      "index": 42,
      "weight": 2,
      "px": 1022.8251921538,
      "py": 498.4537791966,
      "fixed": true
    },
    "General Motors": {
      "name": "General Motors",
      "type": "organization",
      "x": 337.30584749191,
      "y": 301.26372937679,
      "index": 43,
      "weight": 3,
      "px": 337.30584749191,
      "py": 301.26372937679,
      "fixed": true
    },
    "Ivanka Trump": {
      "name": "Ivanka Trump",
      "type": "person",
      "x": 1095.2667663192,
      "y": 227.05223909487,
      "index": 44,
      "weight": 8,
      "px": 1095.2667663192,
      "py": 227.05223909487,
      "fixed": true
    },
    "Nordstrom": {
      "name": "Nordstrom",
      "type": "organization",
      "x": 476.19357919565,
      "y": 87.82563629461,
      "index": 45,
      "weight": 3,
      "px": 476.19357919565,
      "py": 87.82563629461,
      "fixed": true
    },
    "#DeleteUber": {
      "name": "#DeleteUber",
      "type": "action",
      "link": "https://twitter.com/hashtag/deleteuber",
      "x": 61.918589632025,
      "y": 134.72038960414,
      "index": 46,
      "weight": 1,
      "px": 61.918589632025,
      "py": 134.72038960414,
      "fixed": true
    },
    "#DeleteShopify": {
      "name": "#DeleteShopify",
      "type": "action",
      "link": "https://twitter.com/hashtag/deleteshopify",
      "x": 244.16202038732,
      "y": 705.43895288441,
      "index": 47,
      "weight": 1,
      "px": 244.16202038732,
      "py": 705.43895288441,
      "fixed": true
    },
    "#DeleteAmazon": {
      "name": "#DeleteAmazon",
      "type": "action",
      "link": "https://twitter.com/hashtag/deleteamazon",
      "x": 111.99986905486,
      "y": 78.29291050606,
      "index": 48,
      "weight": 1,
      "px": 111.99986905486,
      "py": 78.29291050606,
      "fixed": true
    },
    "#GrabYourWallet": {
      "name": "#GrabYourWallet",
      "type": "action",
      "link": "https://grabyourwallet.org/",
      "x": 399.94857230801,
      "y": 14.868641315202,
      "index": 49,
      "weight": 6,
      "px": 399.94857230801,
      "py": 14.868641315202,
      "fixed": true
    },
    "#DeleteLyft": {
      "name": "#DeleteLyft",
      "type": "action",
      "link": "https://twitter.com/hashtag/deletelyft",
      "x": 35.573309205146,
      "y": 212.42707205548,
      "index": 50,
      "weight": 1,
      "px": 35.573309205146,
      "py": 212.42707205548,
      "fixed": true
    },
    "#Baycott": {
      "name": "#Baycott",
      "type": "action",
      "link": "https://twitter.com/hashtag/baycott",
      "x": 138.30104591227,
      "y": 18.145584392222,
      "index": 51,
      "weight": 1,
      "px": 138.30104591227,
      "py": 18.145584392222,
      "fixed": true
    },
    "#Resist": {
      "name": "#Resist",
      "type": "action",
      "link": "https://www.resistancecalendar.org/",
      "x": 1120.8257783386,
      "y": 170.61018894428,
      "index": 52,
      "weight": 1,
      "px": 1120.8257783386,
      "py": 170.61018894428,
      "fixed": true
    },
    "Carl Icahn": {
      "name": "Carl Icahn",
      "type": "person",
      "x": 967.35114435056,
      "y": 706.53172447203,
      "index": 53,
      "weight": 2,
      "px": 967.35114435056,
      "py": 706.53172447203,
      "fixed": true
    },
    "Icahn Enterprises": {
      "name": "Icahn Enterprises",
      "type": "organization",
      "x": 835.772858956,
      "y": 479.38700980561,
      "index": 54,
      "weight": 2,
      "px": 835.772858956,
      "py": 479.38700980561,
      "fixed": true
    },
    "Lyft": {
      "name": "Lyft",
      "type": "organization",
      "x": 157.87158276016,
      "y": 305.8439129064,
      "index": 55,
      "weight": 5,
      "px": 157.87158276016,
      "py": 305.8439129064,
      "fixed": true
    },
    "Hudson's Bay": {
      "name": "Hudson's Bay",
      "type": "organization",
      "x": 238.93127138461,
      "y": 72.20437241486,
      "index": 56,
      "weight": 4,
      "px": 238.93127138461,
      "py": 72.20437241486,
      "fixed": true
    },
    "Zappos": {
      "name": "Zappos",
      "type": "organization",
      "x": 302.98729232869,
      "y": 156.78307691167,
      "index": 57,
      "weight": 3,
      "px": 302.98729232869,
      "py": 156.78307691167,
      "fixed": true
    },
    "Macy's": {
      "name": "Macy's",
      "type": "organization",
      "x": 366.62440635198,
      "y": 156.70440466031,
      "index": 58,
      "weight": 3,
      "px": 366.62440635198,
      "py": 156.70440466031,
      "fixed": true
    },
    "Disney": {
      "name": "Disney",
      "type": "organization",
      "x": 467.74268256563,
      "y": 560.43787983631,
      "index": 59,
      "weight": 2,
      "px": 467.74268256563,
      "py": 560.43787983631,
      "fixed": true
    },
    "Bob Iger": {
      "name": "Bob Iger",
      "type": "person",
      "link": "https://twitter.com/hashtag/quitthecouncil",
      "x": 1021.5365402182,
      "y": 429.38701233268,
      "index": 60,
      "weight": 2,
      "px": 1021.5365402182,
      "py": 429.38701233268,
      "fixed": true
    }
  };

  var load = localStorage.getItem('LOMBARDI_NODES')
  if (load) {
    load = JSON.parse(load);
    Object.keys(nodes).forEach(function(node) {
      nodes[node] = load[node];
    });
  }

  var missing = {};
  // Compute the distinct nodes from the links.
  links.forEach(function(link) {
    if (!nodes[link.source]) {
      // data isn't populated correctly
      missing[link.source] = true;
    }
    if (!nodes[link.target]) {
      // data isn't populated correctly
      missing[link.target] = true;
    }
    link.source = nodes[link.source];
    link.target = nodes[link.target];
    if (!link.source.neighbors) link.source.neighbors = [];
    if (!link.target.neighbors) link.target.neighbors = [];
    link.source.neighbors.push(link.target); // TODO cache this stuff
    link.target.neighbors.push(link.source);
  });
  missing = Object.keys(missing);
  if (missing.length) {
    console.log(missing);
  }
}