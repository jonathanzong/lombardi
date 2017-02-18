'use strict';
// forked from http://bl.ocks.org/mbostock/1153292
$(function(){
  // http://www.lombardinetworks.net/lombardi.owl
  // convention: map wordcased name to css class
  var LINK_TYPE = {
    Association: "assocation",
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
      source: "Bloomingdale's",
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
      target: "Bloomingdale's",
      type: LINK_TYPE.FinancialTransaction,
    },
    {
      source: "You",
      target: "Hudson's Bay",
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
      target: "Bloomingdale's",
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
      name: "You",
      type: NODE_TYPE.Person,
    },
    "Donald Trump": {
      name: "Donald Trump",
      type: NODE_TYPE.Person,
    },
    "Peter Thiel": {
      name: "Peter Thiel",
      type: NODE_TYPE.Person,
    },
    "Jared Kushner": {
      name: "Jared Kushner",
      type: NODE_TYPE.Person,
    },
    "Joshua Kushner": {
      name: "Joshua Kushner",
      type: NODE_TYPE.Person,
    },
    "Stephen Bannon": {
      name: "Stephen Bannon",
      type: NODE_TYPE.Person,
    },
    "Thrive Capital": {
      name: "Thrive Capital",
      type: NODE_TYPE.Organization,
    },
    "Facebook": {
      name: "Facebook",
      type: NODE_TYPE.Organization,
    },
    "Y Combinator": {
      name: "Y Combinator",
      type: NODE_TYPE.Organization,
    },
    "Kickstarter": {
      name: "Kickstarter",
      type: NODE_TYPE.Organization,
    },
    "Etsy": {
      name: "Etsy",
      type: NODE_TYPE.Organization,
    },
    "Kushner Properties": {
      name: "Kushner Properties",
      type: NODE_TYPE.Organization,
    },
    "Elon Musk": {
      name: "Elon Musk",
      type: NODE_TYPE.Person,
    },    
    "SpaceX": {
      name: "SpaceX",
      type: NODE_TYPE.Organization,
    },
    "IRS": {
      name: "IRS",
      type: NODE_TYPE.Organization,
    },
    "Palantir": {
      name: "Palantir",
      type: NODE_TYPE.Organization,
    },
    "FBI": {
      name: "FBI",
      type: NODE_TYPE.Organization,
    },
    "Founders Fund": {
      name: "Founders Fund",
      type: NODE_TYPE.Organization,
    },
    "Airbnb": {
      name: "Airbnb",
      type: NODE_TYPE.Organization,
    },
    "Spotify": {
      name: "Spotify",
      type: NODE_TYPE.Organization,
    },
    "Stripe": {
      name: "Stripe",
      type: NODE_TYPE.Organization,
    },
    "Shopify": {
      name: "Shopify",
      type: NODE_TYPE.Organization,
    },
    "Breitbart": {
      name: "Breitbart",
      type: NODE_TYPE.Organization,
    },
    "Google": {
      name: "Google",
      type: NODE_TYPE.Organization,
    },
    "Tesla": {
      name: "Tesla",
      type: NODE_TYPE.Organization,
    },
    "Oscar Health": {
      name: "Oscar Health",
      type: NODE_TYPE.Organization,
    },
    "Instagram": {
      name: "Instagram",
      type: NODE_TYPE.Organization,
    },
    "Hot Potato": {
      name: "Hot Potato",
      type: NODE_TYPE.Organization,
    },
    "News Corp": {
      name: "News Corp",
      type: NODE_TYPE.Organization,
    },
    "AppNexus": {
      name: "AppNexus",
      type: NODE_TYPE.Organization,
    },
    "Rupert Murdoch": {
      name: "Rupert Murdoch",
      type: NODE_TYPE.Person,
    },
    "Elaine Chao": {
      name: "Elaine Chao",
      type: NODE_TYPE.Person,
    },
    "Travis Kalanick": {
      name: "Travis Kalanick",
      type: NODE_TYPE.Person,
    },
    "Uber": {
      name: "Uber",
      type: NODE_TYPE.Organization,
    },
    "21st Century Fox": {
      name: "21st Century Fox",
      type: NODE_TYPE.Organization,
    },
    "Amazon": {
      name: "Amazon",
      type: NODE_TYPE.Organization,
    },
    "Indra Nooyi": {
      name: "Indra Nooyi",
      type: NODE_TYPE.Person,
    },
    "PepsiCo": {
      name: "PepsiCo",
      type: NODE_TYPE.Organization,
    },
    "Doug McMillon": {
      name: "Doug McMillon",
      type: NODE_TYPE.Person,
    },
    "Walmart": {
      name: "Walmart",
      type: NODE_TYPE.Organization,
    },
    "Ginni Rometty": {
      name: "Ginni Rometty",
      type: NODE_TYPE.Person,
    },
    "IBM": {
      name: "IBM",
      type: NODE_TYPE.Organization,
    },
    "Mary Barra": {
      name: "Mary Barra",
      type: NODE_TYPE.Person,
    },
    "General Motors": {
      name: "General Motors",
      type: NODE_TYPE.Organization,
    },
    "Ivanka Trump": {
      name: "Ivanka Trump",
      type: NODE_TYPE.Person,
    },
    "Nordstrom": {
      name: "Nordstrom",
      type: NODE_TYPE.Organization,
    },
    "#DeleteUber": {
      name: "#DeleteUber",
      type: NODE_TYPE.Action,
    },
    "#DeleteShopify": {
      name: "#DeleteShopify",
      type: NODE_TYPE.Action,
    },
    "#DeleteAmazon": {
      name: "#DeleteAmazon",
      type: NODE_TYPE.Action,
    },
    "#GrabYourWallet": {
      name: "#GrabYourWallet",
      type: NODE_TYPE.Action,
    },
    "#DeleteLyft": {
      name: "#DeleteLyft",
      type: NODE_TYPE.Action,
    },
    "#Baycott": {
      name: "#Baycott",
      type: NODE_TYPE.Action,
    },
    "#Resist": {
      name: "#Resist",
      type: NODE_TYPE.Action,
    },
    "Carl Icahn": {
      name: "Carl Icahn",
      type: NODE_TYPE.Person,
    },
    "Icahn Enterprises": {
      name: "Icahn Enterprises",
      type: NODE_TYPE.Organization,
    },
    "Lyft": {
      name: "Lyft",
      type: NODE_TYPE.Organization,
    },
    "Bloomingdale's": {
      name: "Bloomingdale's",
      type: NODE_TYPE.Organization,
    },
    "Hudson's Bay": {
      name: "Hudson's Bay",
      type: NODE_TYPE.Organization,
    },
    "Zappos": {
      name: "Zappos",
      type: NODE_TYPE.Organization,
    },
    "Macy's": {
      name: "Macy's",
      type: NODE_TYPE.Organization,
    },
  };

  var missing = {};
  // Compute the distinct nodes from the links.
  links.forEach(function(link) {
    // link.source = nodes[link.source] || (nodes[link.source] = {name: link.source, type: NODE_TYPE.Organization});
    // link.target = nodes[link.target] || (nodes[link.target] = {name: link.target, type: NODE_TYPE.Person});
    
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
    
  });
  missing = Object.keys(missing);
  if (missing.length) {
    console.log(missing);
  }

  var width = $(window).width(),
      height = $(window).height();

  var force = d3.layout.force()
      .nodes(d3.values(nodes))
      .links(links)
      .size([width, height])
      .linkDistance(180)
      .linkStrength(0.8)
      .charge(-800)
      .alpha(0.2)
      .on("tick", tick)
      .start();

  var svg = d3.select("body").append("svg")
      .attr("width", width)
      .attr("height", height);

  function resize() {
    width = window.innerWidth, height = window.innerHeight;
    svg.attr("width", width).attr("height", height);
    force.size([width, height]).resume();
  }

  resize();
  d3.select(window).on("resize", resize);

  // TODO association should be bidirectional
  // Per-type markers, as they don't inherit styles.
  svg.append("defs").selectAll("marker")
      .data([LINK_TYPE.Association, LINK_TYPE.InfluenceControl, LINK_TYPE.FinancialTransaction])
    .enter().append("marker")
      .attr("id", function(d) { return d; })
      .attr("viewBox", "0 -5 10 10")
      .attr("refX", 60)
      .attr("refY", -4)
      .attr("markerWidth", 6)
      .attr("markerHeight", 6)
      .attr("orient", "auto")
    .append("path")
      .attr("d", "M0,-5L10,0L0,5");

  var path = svg.append("g").selectAll("path")
      .data(force.links())
    .enter().append("path")
      .attr("class", function(d) { return "link " + d.type; })
      .attr("marker-end", function(d) { return "url(#" + d.type + ")"; });

  var circle = svg.append("g").selectAll("circle")
      .data(force.nodes())
    .enter().append("g")
      .attr("class", function(d) { return "node " + d.type; });

    circle.append("circle")
      .attr("r", 30)
      .call(force.drag);
    circle.append("text")
      .attr("text-anchor", "middle")
      .attr("dy", 0.3)
      .text(function(d) { return d.name; })
      .call(wrap, 50);

  // Use elliptical arc path segments to doubly-encode directionality.
  function tick() {
    path.attr("d", linkArc);
    circle.attr("transform", transform);
  }

  function linkArc(d) {
    var dx = d.target.x - d.source.x,
        dy = d.target.y - d.source.y,
        dr = Math.sqrt(dx * dx + dy * dy);
    return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
  }

  function transform(d) {
    return "translate(" + d.x + "," + d.y + ")";
  }

  function wrap(text, width) {
  text.each(function() {
    var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.1, // em
        y = text.attr("y"),
        dy = parseFloat(text.attr("dy")),
        tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));
      if (line.length > 1 && tspan.node().getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        lineNumber++;
        tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", 1 * lineHeight + dy + "em").text(word);
      }
    }
    text.attr("transform", "translate(0, " +(lineNumber * -7) + ")")
  });
}

});