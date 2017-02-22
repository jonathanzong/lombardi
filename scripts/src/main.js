'use strict';
// forked from http://bl.ocks.org/mbostock/1153292
$(function(){
  // http://www.lombardinetworks.net/lombardi.owl
  // convention: map wordcased name to css class

  nodes = {
    "You": {
      "name": "You",
      "type": "person",
      "x": 500.579138906468,
      "y": 338.20016299542,
      "px": 500.579138906468,
      "py": 338.20016299542,
      "neighbors": [],
      "fixed": true
    },
    "Donald Trump": {
      "name": "Donald Trump",
      "type": "person",
      "x": 642.4480837322,
      "y": 338.20016299542,
      "px": 642.4480837322,
      "py": 338.20016299542,
      "neighbors": [],
      "fixed": true
    }
  }
  nodes["You"].neighbors.push(nodes["Donald Trump"]);
  nodes["Donald Trump"].neighbors.push(nodes["You"]);
  links = [{
    source: nodes["You"],
    target: nodes["Donald Trump"],
    type: LINK_TYPE.FinancialTransaction
  }];

  function expandGraph() {
    var a1 = $(nodes["You"]).animate({x:21, px: 21});
    var a2 = $(nodes["Donald Trump"]).animate({x:1121, px: 1121});
    $.when( a1, a2 ).then(function() {
      simulation.stop();
      nodes = {};
      links = [];
      restart();
      initData();
      restart();
    });
  }

  var width = window.innerWidth, height = window.innerHeight;

  var simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).distance(200))
    .alphaTarget(1)
    .on("tick", tick);

  var svg = d3.select(".svg-container").append("svg")
      // .attr("width", width)
      // .attr("height", height);
      .attr("viewBox", "0 0 1152 737")
      .attr("preserveAspectRatio", "xMidYMid meet");

  $(".svg-container svg").one('mouseup', function(){
    expandGraph();
    $(this).svgPanZoom({
      events: {
        mouseWheel: false,
        doubleClick: false
      },
    });
    $(this).addClass("pannable");
  });


  // TODO association should be bidirectional
  // Per-type markers, as they don't inherit styles.
  svg.append("defs").selectAll("marker")
      .data(["markerend"])
    .enter().append("marker")
      .attr("id", String)
      .attr("viewBox", "0 -5 10 10")
      .attr("refX", 45)
      .attr("refY", -4)
      .attr("markerWidth", 8)
      .attr("markerHeight", 8)
      .attr("markerUnits", "userSpaceOnUse")
      .attr("orient", "auto")
    .append("path")
      .attr("d", "M0,-5L10,0L0,5");

  svg.append("defs").selectAll("marker")
      .data(["markerstart"])
    .enter().append("marker")
      .attr("id", String)
      .attr("viewBox", "0 -5 10 10")
      .attr("refX", -35)
      .attr("refY", -6)
      .attr("markerWidth", 8)
      .attr("markerHeight", 8)
      .attr("markerUnits", "userSpaceOnUse")
      .attr("orient", "auto")
    .append("path")
      .attr("d", "M0,0L10,5L10,-5Z");

  var g = svg.append("g");
  var link = g.append("g").selectAll("path");
  var node = g.append("g").selectAll("circle");

  restart();

  var stopTimeout;

  function restart() {
    // Apply the general update pattern to the nodes.
    node = node.data(d3.values(nodes), function(d) { return d.name;});
    node.exit().remove();

    node = node.enter().append("g")
        .attr("class", function(d) { return "node " + d.type; });
    node.append("circle")
        .attr("r", 30);
    node.append("text")
        .attr("text-anchor", "middle")
        .attr("dy", 0.3)
        .text(function(d) { return d.name; })
        .call(wrap, 50);
    node = node.merge(node);

    // Apply the general update pattern to the links.
    link = link.data(links, function(d) { return d.source.name + "-" + d.target.name; });

    // Keep the exiting links connected to the moving remaining nodes.
    link.exit().transition()
        .attr("stroke-opacity", 0)
        .remove();

    link = link.enter().append("path")
        .attr("class", function(d) { return "link " + d.type; })
        .attr("marker-end", function(d) {
          if (d.type == LINK_TYPE.Association ||
               d.type == LINK_TYPE.FinancialServiceProvider ||
               d.type == LINK_TYPE.InfluenceControl ||
               d.type == LINK_TYPE.FinancialTransaction) {
            return "url(#markerend)";
          }
        })
        .attr("marker-start", function(d) {
          if (d.type == LINK_TYPE.Association ||
              d.type == LINK_TYPE.FinancialServiceProvider) {
            return "url(#markerstart)";
          }
        })
        .call(function(link) { link.transition().attr("stroke-opacity", 1); })
      .merge(link);

     node.on('mouseover', function(d) {
      var toPath = [d.name]; // TODO cache this stuff
      for (var i = 0; i < d.neighbors.length; i++) {
        if (d.neighbors[i].type == NODE_TYPE.Action) {
          toPath.push(d.neighbors[i].name);
        }
        else {
          if (d.neighbors[i].name !== "Donald Trump") {
            var yPath = shortestPath(d.neighbors[i], nodes["You"], "Donald Trump");
            toPath.push.apply(toPath, yPath);        
          }
          if (d.neighbors[i].name !== "You") {
            var tPath = shortestPath(d.neighbors[i], nodes["Donald Trump"], "You");
            toPath.push.apply(toPath, tPath);
          }
        }
      }
      link.style('opacity', function(l) {
        if (toPath.indexOf(l.source.name) >= 0 && toPath.indexOf(l.target.name) >= 0) {
          return 1;
        }
        else {
          return 0.1;
        }
      });
      node.style('opacity', function(n) {
        return toPath.indexOf(n.name) >= 0 ? 1 : 0.2;
      });
      // $('.ui-info').text(d.name + ' insert citation / explanation here'); // TODO
    });

    // Set the stroke width back to normal when mouse leaves the node.
    node.on('mouseout', function() {
      link.style('opacity', '');
      node.style('opacity', '');
      $('.ui-info').text('');
    });

    // Update and restart the simulation.
    simulation.nodes(nodes);
    simulation.force("link").links(links);
    simulation.alpha(1).on("tick", tick).restart();
    if (stopTimeout) clearTimeout(stopTimeout);
    stopTimeout = setTimeout(function() {
      simulation.stop();
      console.log("stopped");
    }, 5000);
  }

  // Use elliptical arc path segments to doubly-encode directionality.
  function tick() {
    link.attr("d", linkArc);

      // path.attr("x1", function(d) { return d.source.x; })
      //     .attr("y1", function(d) { return d.source.y; })
      //     .attr("x2", function(d) { return d.target.x; })
      //     .attr("y2", function(d) { return d.target.y; });
    node.attr("transform", transform);
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


function saveState() {
  localStorage.setItem('LOMBARDI_NODES', JSON.stringify(nodes));
}

function logState() {
  // Object.keys(nodes).forEach(function(node) {
  //   nodes[node].py -= 30;
  //   nodes[node].y -= 30;
  // });
  console.log(JSON.stringify(nodes));
}

function clearState() {
  localStorage.setItem('LOMBARDI_NODES', '');
}

function shortestPath(source, target, excludeName) {
  if (source.name == target.name) {
    return [source.name];
  }
  var queue = [source],
      visited = {},
      pred = {},
      tail = 0;
  visited[source.name] = true;
  if (excludeName) {
    visited[excludeName] = true;
  }
  while (tail < queue.length) {
    var u = queue[tail++];
    for (var i = 0; i < u.neighbors.length; i++) {
      // try all neighbors
      var v = u.neighbors[i];
      if (visited[v.name]) continue;
      visited[v.name] = true;
      if (v.name == target.name) {
        var path = [v.name];
        while (u.name !== source.name) {
          path.push(u.name);
          u = pred[u.name];
        }
        path.push(u.name);
        return path;
      }
      pred[v.name] = u;
      queue.push(v);
    }
  }
  return [];
}
