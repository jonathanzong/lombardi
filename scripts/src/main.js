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
    $('.intro-text').fadeOut();
    $('.svg-container').removeClass('intro');
    $('.about-button').removeClass('intro');
    simulation.restart();
    var a1 = $(nodes["You"]).animate({x:21, px: 21});
    var a2 = $(nodes["Donald Trump"]).animate({x:1121, px: 1121});
    $.when( a1, a2 ).then(function() {
      simulation.stop();
      nodes = {};
      links = [];
      restart();
      initData();
      restart();
      $('.ui-container').fadeIn(500);
      panIfSmall();
      $(window).resize(panIfSmall);
      setTimeout(function() {
        simulation.stop();
      }, 5000);
    });
  }
  var panZoom;
  function panIfSmall() {
    if (!panZoom && ($(window).width() < 900 || $(window).height() < 576)) {
      panZoom = $('.svg-container svg').svgPanZoom({
        events: {
          mouseWheel: false,
          doubleClick: false
        },
      });
    }
    else if (panZoom) {
      panZoom.reset();
    }
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

  var colorScale = d3.scaleOrdinal(d3.schemeCategory20);

  restart();
  $(".svg-container svg > g").one('click', function(){
    expandGraph();
  });

  function restart() {
    // Apply the general update pattern to the nodes.
    node = node.data(d3.values(nodes), function(d) { return d.name;});
    node.exit().remove();

    node = node.enter().append("g")
        .attr("class", function(d) { return "node " + d.type; })
        .attr("opacity", 0)
        .call(function(node) { node.transition().duration(300).attr("opacity", 1); });
    var a = node.append("a")
      .attr("href", function(n) {return n.link})
      .attr("target", "_blank");
    a.append("circle")
        .attr("r", 30);
    a.append("text")
        .attr("text-anchor", "middle")
        .attr("dy", 0.3)
        .text(function(d) { return d.name; })
        .call(wrap, 50);
    node = node.merge(node);

    // Apply the general update pattern to the links.
    link = link.data(links, function(d) { return d.source.name + "-" + d.target.name; });

    // Keep the exiting links connected to the moving remaining nodes.
    link.exit().transition()
        .attr("opacity", 0)
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
        .style("opacity", 0)
        .call(function(link) { link.transition().style("opacity", 0.5).duration(500); })
      .merge(link);

     node.on('mouseover', function(d) {
      if (d.name == "You" || d.name == "Donald Trump") {
        link.transition().style("opacity", 1);
        node.transition().style("opacity", 1);
        return;
      }
      var toPath = d.toPath;
      if (!toPath) {
        toPath = [d.name];
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
        d.toPath = toPath;
      }
      var colorIdx = 0;
      $('.legend').hide();
      link.transition().duration(150).style("opacity", function(l) {
          if (toPath.indexOf(l.source.name) >= 0 && toPath.indexOf(l.target.name) >= 0) {
            return 1;
          }
          else {
            return 0.1;
          }
        })
        .style("stroke", function(l) {
          if (l.annotation && toPath.indexOf(l.source.name) >= 0 && toPath.indexOf(l.target.name) >= 0) {
            var color = colorScale(colorIdx++);
            var div = d3.select('.ui-container').append('div').attr('class', 'legend legend-hover');
            div.append('svg')
              .attr('height', 10)
              .attr('width', 50)
              .append('path')
                .attr('class', "link "+l.type)
                .attr('d', "M0 7 l50 0")
                .style('stroke', color);
            div.append('span').text(l.annotation)
            return color;
          }
        });
      node.transition().duration(150).style("opacity", function(n) {
          return toPath.indexOf(n.name) >= 0 ? 1 : 0.2;
        });
    });

    // Set the stroke width back to normal when mouse leaves the node.
    node.on('mouseout', function() {
      link.interrupt().style('opacity', 0.5).style('stroke', '');
      node.interrupt().style('opacity', 1);
      d3.select('.ui-container').selectAll('.legend-hover').remove();
      $('.legend').show();
    });

    // Update and restart the simulation.
    simulation.nodes(nodes);
    simulation.force("link").links(links);
    simulation.alpha(1).on("tick", tick).restart();
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

  $('.about-button').click(function() {
    $('.about-container').toggleClass('active');
    return false;
  });

  $(document).click(function(event) { 
    if(!$(event.target).closest('.about-container').length) {
      if($('.about-container').hasClass('active')) {
        $('.about-container').removeClass('active');
        return false;
      }
    }
  })

  $('.select-en').click(function() {
    $('.fr').hide();
    $('.en').show();
    $('.select').removeClass('active');
    $(this).addClass('active');
    return false;
  });

  $('.select-fr').click(function() {
    $('.en').hide();
    $('.fr').show();
    $('.select').removeClass('active');
    $(this).addClass('active');
    return false;
  });

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
