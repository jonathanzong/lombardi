'use strict';
// forked from http://bl.ocks.org/mbostock/1153292
$(function(){
  // http://www.lombardinetworks.net/lombardi.owl
  // convention: map wordcased name to css class
  var LINK_TYPE = {
    Association: 0,
    InfluenceControl: 1,
    FinancialTransaction: "financial-transaction",
  }

  // array of {source, target, type}
  var links = [
    {source: "Microsoft", target: "Amazon", type: "licensing"},
    {source: "Microsoft", target: "HTC", type: "licensing"},
    {source: "Samsung", target: "Apple", type: "suit"},
    {source: "Motorola", target: "Apple", type: "suit"},
    {source: "Nokia", target: "Apple", type: LINK_TYPE.FinancialTransaction},
    {source: "HTC", target: "Apple", type: "suit"},
    {source: "Kodak", target: "Apple", type: "suit"},
    {source: "Microsoft", target: "Barnes & Noble", type: "suit"},
    {source: "Microsoft", target: "Foxconn", type: "suit"},
    {source: "Oracle", target: "Google", type: "suit"},
    {source: "Apple", target: "HTC", type: "suit"},
    {source: "Microsoft", target: "Inventec", type: "suit"},
    {source: "Samsung", target: "Kodak", type: LINK_TYPE.FinancialTransaction},
    {source: "LG", target: "Kodak", type: LINK_TYPE.FinancialTransaction},
    {source: "RIM", target: "Kodak", type: "suit"},
    {source: "Sony", target: "LG", type: "suit"},
    {source: "Kodak", target: "LG", type: LINK_TYPE.FinancialTransaction},
    {source: "Apple", target: "Nokia", type: LINK_TYPE.FinancialTransaction},
    {source: "Qualcomm", target: "Nokia", type: LINK_TYPE.FinancialTransaction},
    {source: "Apple", target: "Motorola", type: "suit"},
    {source: "Microsoft", target: "Motorola", type: "suit"},
    {source: "Motorola", target: "Microsoft", type: "suit"},
    {source: "Huawei", target: "ZTE", type: "suit"},
    {source: "Ericsson", target: "ZTE", type: "suit"},
    {source: "Kodak", target: "Samsung", type: LINK_TYPE.FinancialTransaction},
    {source: "Apple", target: "Samsung", type: "suit"},
    {source: "Kodak", target: "RIM", type: "suit"},
    {source: "Nokia", target: "Qualcomm", type: "suit"}
  ];

  // http://www.lombardinetworks.net/lombardi.owl
  var NODE_TYPE = {
    Person: "person",
    Institution: "institution",
  }

  // map of name to {name, type}
  var nodes = {};

  // Compute the distinct nodes from the links.
  links.forEach(function(link) {
    // TODO this is temporary
    link.source = nodes[link.source] || (nodes[link.source] = {name: link.source, type: NODE_TYPE.Institution});
    link.target = nodes[link.target] || (nodes[link.target] = {name: link.target, type: NODE_TYPE.Person});
    /*
    if (!(nodes[link.source] && nodes[link.target])) {
      // data isn't populated correctly
      debugger;
    }
    link.source = nodes[link.source];
    link.target = nodes[link.target];
    */
  });

  var width = $(window).width(),
      height = $(window).height();

  var force = d3.layout.force()
      .nodes(d3.values(nodes))
      .links(links)
      .size([width, height])
      .linkDistance(180)
      .charge(-800)
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

  // Per-type markers, as they don't inherit styles.
  svg.append("defs").selectAll("marker")
      .data(["suit", "licensing", LINK_TYPE.FinancialTransaction])
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
    .enter().append("g");

    circle.append("circle")
      .attr("class", function(d) { return "node " + d.type; })
      .attr("r", 30)
      .call(force.drag);
    circle.append("text")
      .attr("text-anchor", "middle")
      .attr("dy", 3)
      .text(function(d) { return d.name; });

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

});