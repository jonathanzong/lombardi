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
var nodes = {"You":{"name":"You","type":"person","x":21.579138906468003,"y":368.20016299542,"index":0,"weight":25,"px":21.579138906468003,"py":368.20016299542,"fixed":true},"Donald Trump":{"name":"Donald Trump","type":"person","x":1121.44808373216,"y":391.7227652735,"index":1,"weight":16,"px":1121.44808373216,"py":391.7227652735,"fixed":true},"Peter Thiel":{"name":"Peter Thiel","type":"person","x":887.75846454568,"y":316.10672811642,"index":2,"weight":7,"px":887.75846454568,"py":316.10672811642,"fixed":true},"Jared Kushner":{"name":"Jared Kushner","type":"person","x":1025.35622946464,"y":257.43652563184,"index":3,"weight":7,"px":1025.35622946464,"py":257.43652563184,"fixed":true},"Joshua Kushner":{"name":"Joshua Kushner","type":"person","x":1026.54975810672,"y":134.17515587782,"index":4,"weight":4,"px":1026.54975810672,"py":134.17515587782,"fixed":true},"Stephen Bannon":{"name":"Stephen Bannon","type":"person","x":964.5836525487999,"y":695.49538397871,"index":5,"weight":2,"px":964.5836525487999,"py":695.49538397871,"fixed":true},"Thrive Capital":{"name":"Thrive Capital","type":"organization","x":687.183535074,"y":99.790016072233,"index":6,"weight":7,"px":687.183535074,"py":99.790016072233,"fixed":true},"Facebook":{"name":"Facebook","type":"organization","x":160.75753330804002,"y":572.03301628711,"index":7,"weight":6,"px":160.75753330804002,"py":572.03301628711,"fixed":true},"Y Combinator":{"name":"Y Combinator","type":"organization","x":758.7229321558241,"y":98.849094348932,"index":8,"weight":3,"px":758.7229321558241,"py":98.849094348932,"fixed":true},"Kickstarter":{"name":"Kickstarter","type":"organization","x":533.838771554024,"y":336.71425421352,"index":9,"weight":4,"px":533.838771554024,"py":336.71425421352,"fixed":true},"Etsy":{"name":"Etsy","type":"organization","x":530.965430957008,"y":264.538767986,"index":10,"weight":2,"px":530.965430957008,"py":264.538767986,"fixed":true},"Kushner Properties":{"name":"Kushner Properties","type":"organization","x":835.17968805856,"y":434.1098742116,"index":11,"weight":2,"px":835.17968805856,"py":434.1098742116,"fixed":true},"Elon Musk":{"name":"Elon Musk","type":"person","x":960.1346486225601,"y":317.69314275046,"index":12,"weight":4,"px":960.1346486225601,"py":317.69314275046,"fixed":true},"SpaceX":{"name":"SpaceX","type":"organization","x":676.826095033256,"y":313.45421235419,"index":13,"weight":3,"px":676.826095033256,"py":313.45421235419,"fixed":true},"IRS":{"name":"IRS","type":"organization","x":591.443139931272,"y":477.20037806325,"index":14,"weight":4,"px":591.443139931272,"py":477.20037806325,"fixed":true},"Palantir":{"name":"Palantir","type":"organization","x":681.117825195464,"y":394.61889275717,"index":15,"weight":3,"px":681.117825195464,"py":394.61889275717,"fixed":true},"FBI":{"name":"FBI","type":"organization","x":682.13628869944,"y":478.279732144,"index":16,"weight":2,"px":682.13628869944,"py":478.279732144,"fixed":true},"Founders Fund":{"name":"Founders Fund","type":"organization","x":832.53580908064,"y":104.10747490195,"index":17,"weight":9,"px":832.53580908064,"py":104.10747490195,"fixed":true},"Airbnb":{"name":"Airbnb","type":"organization","x":157.94971615464002,"y":408.11829224255,"index":18,"weight":3,"px":157.94971615464002,"py":408.11829224255,"fixed":true},"Spotify":{"name":"Spotify","type":"organization","x":89.1604718940776,"y":497.6953736542487,"index":19,"weight":3,"px":89.1604718940776,"py":497.6953736542487,"fixed":true},"Stripe":{"name":"Stripe","type":"organization","x":381.21485382320805,"y":720.73365322905,"index":20,"weight":5,"px":381.21485382320805,"py":720.73365322905,"fixed":true},"Shopify":{"name":"Shopify","type":"organization","x":326.948016907144,"y":640.89344225909,"index":21,"weight":4,"px":326.948016907144,"py":640.89344225909,"fixed":true},"Breitbart":{"name":"Breitbart","type":"organization","x":528.930625917344,"y":657.25519196799,"index":22,"weight":5,"px":528.930625917344,"py":657.25519196799,"fixed":true},"Google":{"name":"Google","type":"organization","x":240.11169066081604,"y":638.24988756967,"index":23,"weight":2,"px":240.11169066081604,"py":638.24988756967,"fixed":true},"Tesla":{"name":"Tesla","type":"organization","x":335.78397955396804,"y":398.07768769347,"index":24,"weight":2,"px":335.78397955396804,"py":398.07768769347,"fixed":true},"Oscar Health":{"name":"Oscar Health","type":"organization","x":586.505481728624,"y":188.5905630813,"index":25,"weight":4,"px":586.505481728624,"py":188.5905630813,"fixed":true},"Instagram":{"name":"Instagram","type":"organization","x":87.86332676028782,"y":570.6721134193037,"index":26,"weight":3,"px":87.86332676028782,"py":570.6721134193037,"fixed":true},"Hot Potato":{"name":"Hot Potato","type":"organization","x":158.0756766287518,"y":498.36750971231436,"index":27,"weight":3,"px":158.0756766287518,"py":498.36750971231436,"fixed":true},"News Corp":{"name":"News Corp","type":"organization","x":528.572947531528,"y":727.74029082698,"index":28,"weight":4,"px":528.572947531528,"py":727.74029082698,"fixed":true},"AppNexus":{"name":"AppNexus","type":"organization","x":465.53520034388805,"y":725.09361667437,"index":29,"weight":2,"px":465.53520034388805,"py":725.09361667437,"fixed":true},"Rupert Murdoch":{"name":"Rupert Murdoch","type":"person","x":962.3193159075199,"y":642.65123491356,"index":30,"weight":3,"px":962.3193159075199,"py":642.65123491356,"fixed":true},"Elaine Chao":{"name":"Elaine Chao","type":"person","x":962.4775471351201,"y":590.38120533299,"index":31,"weight":2,"px":962.4775471351201,"py":590.38120533299,"fixed":true},"Travis Kalanick":{"name":"Travis Kalanick","type":"person","x":962.05702775824,"y":396.21733339884,"index":32,"weight":2,"px":962.05702775824,"py":396.21733339884,"fixed":true},"Uber":{"name":"Uber","type":"organization","x":157.18806961594402,"y":261.0579695148,"index":33,"weight":3,"px":157.18806961594402,"py":261.0579695148,"fixed":true},"21st Century Fox":{"name":"21st Century Fox","type":"organization","x":527.930985015752,"y":589.09567337175,"index":34,"weight":2,"px":527.930985015752,"py":589.09567337175,"fixed":true},"Amazon":{"name":"Amazon","type":"organization","x":238.96954688626403,"y":190.73208620614,"index":35,"weight":5,"px":238.96954688626403,"py":190.73208620614,"fixed":true},"Indra Nooyi":{"name":"Indra Nooyi","type":"person","x":1021.735857278,"y":400.60645137902,"index":36,"weight":2,"px":1021.735857278,"py":400.60645137902,"fixed":true},"PepsiCo":{"name":"PepsiCo","type":"organization","x":397.238377984888,"y":329.64778486563,"index":37,"weight":2,"px":397.238377984888,"py":329.64778486563,"fixed":true},"Doug McMillon":{"name":"Doug McMillon","type":"person","x":960.8619020374401,"y":527.07462610298,"index":38,"weight":2,"px":960.8619020374401,"py":527.07462610298,"fixed":true},"Walmart":{"name":"Walmart","type":"organization","x":432.29601809737596,"y":184.99909940964,"index":39,"weight":4,"px":432.29601809737596,"py":184.99909940964,"fixed":true},"Ginni Rometty":{"name":"Ginni Rometty","type":"person","x":963.0797933724,"y":458.18043519301,"index":40,"weight":2,"px":963.0797933724,"py":458.18043519301,"fixed":true},"IBM":{"name":"IBM","type":"organization","x":399.074527876528,"y":399.17602300339,"index":41,"weight":2,"px":399.074527876528,"py":399.17602300339,"fixed":true},"Mary Barra":{"name":"Mary Barra","type":"person","x":1022.82519215384,"y":528.4537791966,"index":42,"weight":2,"px":1022.82519215384,"py":528.4537791966,"fixed":true},"General Motors":{"name":"General Motors","type":"organization","x":337.305847491912,"y":331.26372937679,"index":43,"weight":3,"px":337.305847491912,"py":331.26372937679,"fixed":true},"Ivanka Trump":{"name":"Ivanka Trump","type":"person","x":1095.2667663192,"y":257.05223909487,"index":44,"weight":8,"px":1095.2667663192,"py":257.05223909487,"fixed":true},"Nordstrom":{"name":"Nordstrom","type":"organization","x":476.193579195648,"y":117.82563629461,"index":45,"weight":3,"px":476.193579195648,"py":117.82563629461,"fixed":true},"#DeleteUber":{"name":"#DeleteUber","type":"action","x":61.918589632024805,"y":164.72038960414,"index":46,"weight":1,"px":61.918589632024805,"py":164.72038960414,"fixed":true},"#DeleteShopify":{"name":"#DeleteShopify","type":"action","x":244.16202038732,"y":735.43895288441,"index":47,"weight":1,"px":244.16202038732,"py":735.43895288441,"fixed":true},"#DeleteAmazon":{"name":"#DeleteAmazon","type":"action","x":111.999869054864,"y":108.29291050606,"index":48,"weight":1,"px":111.999869054864,"py":108.29291050606,"fixed":true},"#GrabYourWallet":{"name":"#GrabYourWallet","type":"action","x":399.948572308012,"y":44.868641315202204,"index":49,"weight":6,"px":399.948572308012,"py":44.868641315202204,"fixed":true},"#DeleteLyft":{"name":"#DeleteLyft","type":"action","x":35.5733092051464,"y":242.42707205548,"index":50,"weight":1,"px":35.5733092051464,"py":242.42707205548,"fixed":true},"#Baycott":{"name":"#Baycott","type":"action","x":138.301045912272,"y":48.145584392222,"index":51,"weight":1,"px":138.301045912272,"py":48.145584392222,"fixed":true},"#Resist":{"name":"#Resist","type":"action","x":1112.82577833856,"y":190.61018894428,"index":52,"weight":1,"px":1112.82577833856,"py":190.61018894428,"fixed":true},"Carl Icahn":{"name":"Carl Icahn","type":"person","x":967.35114435056,"y":736.5317244720325,"index":53,"weight":2,"px":967.35114435056,"py":736.5317244720325,"fixed":true},"Icahn Enterprises":{"name":"Icahn Enterprises","type":"organization","x":835.772858956,"y":509.38700980561,"index":54,"weight":2,"px":835.772858956,"py":509.38700980561,"fixed":true},"Lyft":{"name":"Lyft","type":"organization","x":157.87158276016,"y":335.8439129064,"index":55,"weight":5,"px":157.87158276016,"py":335.8439129064,"fixed":true},"Hudson's Bay":{"name":"Hudson's Bay","type":"organization","x":238.931271384608,"y":102.20437241486,"index":56,"weight":4,"px":238.931271384608,"py":102.20437241486,"fixed":true},"Zappos":{"name":"Zappos","type":"organization","x":302.987292328688,"y":186.78307691167,"index":57,"weight":3,"px":302.987292328688,"py":186.78307691167,"fixed":true},"Macy's":{"name":"Macy's","type":"organization","x":366.624406351976,"y":186.70440466031,"index":58,"weight":3,"px":366.624406351976,"py":186.70440466031,"fixed":true},"Disney":{"name":"Disney","type":"organization","x":467.74268256563204,"y":590.43787983631,"index":59,"weight":2,"px":467.74268256563204,"py":590.43787983631,"fixed":true},"Bob Iger":{"name":"Bob Iger","type":"person","x":1021.5365402181601,"y":459.38701233268,"index":60,"weight":2,"px":1021.5365402181601,"py":459.38701233268,"fixed":true}};
