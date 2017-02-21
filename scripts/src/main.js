'use strict';
// forked from http://bl.ocks.org/mbostock/1153292
$(function(){
  // http://www.lombardinetworks.net/lombardi.owl
  // convention: map wordcased name to css class
  
  // var DOT = "digraph trump {";

  Object.values(nodes).forEach(function(node) {
    node.x = Math.random() * 500;
    node.y = Math.random() * 500;
  });

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
    // link.source = nodes[link.source] || (nodes[link.source] = {name: link.source, type: NODE_TYPE.Organization});
    // link.target = nodes[link.target] || (nodes[link.target] = {name: link.target, type: NODE_TYPE.Person});
    // DOT += "\""+link.source + "\" -> \"" + link.target + "\";";
    // if (link.type == LINK_TYPE.Association) {
    //   DOT += "\""+link.target + "\" -> \"" + link.source + "\";";
    // }
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
  // console.log(DOT + "}");
  missing = Object.keys(missing);
  if (missing.length) {
    console.log(missing);
  }

  var width = window.innerWidth, height = window.innerHeight;

  var force = d3.layout.force()
      .nodes(d3.values(nodes))
      .links(links)
      .size([width, height])
      .linkDistance(100)
      .linkStrength(0.5)
      .charge(-1600)
      .on("tick", tick)
      .start();

  setTimeout(function() {force.stop(); console.log("stopped")}, 5000);


  var drag = force.drag()
    .on("dragstart", dragstart)
        .on("drag", dragmove)
        .on("dragend", dragend);

        function dragstart(d, i) {
        force.stop() // stops the force auto positioning before you start dragging
    }

    function dragmove(d, i) {
        d.px += d3.event.dx;
        d.py += d3.event.dy;
        d.x += d3.event.dx;
        d.y += d3.event.dy; 
        tick(); // this is the key to make it work together with updating both px,py,x,y on d !
    }

    function dragend(d, i) {
        d.fixed = true; // of course set the node to fixed so the force doesn't include the node in its auto positioning stuff
        tick();
        // force.resume();
    }


  var svg = d3.select(".svg-container").append("svg")
      // .attr("width", width)
      // .attr("height", height);
      .attr("viewBox", "0 0 1152 737")
      .attr("preserveAspectRatio", "xMidYMid meet");

  function resize() {
    // var oldWidth = width, oldHeight = height;
    width = window.innerWidth, height = window.innerHeight;
    // if (width > oldWidth || height > oldHeight) {
      // svg.attr("viewBox", "0 0 " + width + " " + height )
    // }
    // svg.attr("width", width).attr("height", height);

      // svg.attr("viewBox", "0 0 " + width + " " + height )
    // force.size([width, height]).resume();
  }

  // resize();
  // d3.select(window).on("resize", resize);

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

  var path = svg.append("g").selectAll("path")
      .data(force.links())
    .enter().append("path")
      .attr("class", function(d) { return "link " + d.type; })
      .attr("marker-end", function(d) {
        if (d.type == LINK_TYPE.Association ||
             d.type == LINK_TYPE.FinancialServiceProvider ||
             d.type == LINK_TYPE.InfluenceControl ||
             d.type == LINK_TYPE.FinancialTransaction) {
          return "url(#markerend)";
        }
      })
      // .attr("x1", function(d) {return d.source.x; })
      // .attr("y1", function(d) {return d.source.y; })
      // .attr("x2", function(d) {return d.target.x; })
      // .attr("y2", function(d) {return d.target.y; })
      .attr("marker-start", function(d) {
        if (d.type == LINK_TYPE.Association ||
            d.type == LINK_TYPE.FinancialServiceProvider) {
          return "url(#markerstart)";
        }
      });

  var circle = svg.append("g").selectAll("circle")
      .data(force.nodes())
    .enter().append("g")
      .attr("class", function(d) { return "node " + d.type; })
      // .call(drag);

    circle.append("circle")
      .attr("r", 30)
    circle.append("text")
      .attr("text-anchor", "middle")
      .attr("dy", 0.3)
      .text(function(d) { return d.name; })
      .call(wrap, 50);

  circle.on('mouseover', function(d) {
    var touchedNodes = {};
    path.style('opacity', function(l) {
      if (d === l.source || d === l.target) {
        touchedNodes[l.source.name] = true;
        touchedNodes[l.target.name] = true;
        return 1;
      }
      else {
        return 0.1;
      }
    });
    circle.style('opacity', function(n) {
      return Object.keys(touchedNodes).indexOf(n.name) >= 0 ? 1 : 0.2;
    });
    // $('.ui-info').text(d.name + ' insert citation / explanation here'); // TODO
  });

  // Set the stroke width back to normal when mouse leaves the node.
  circle.on('mouseout', function() {
    path.style('opacity', '');
    circle.style('opacity', '');
    $('.ui-info').text('');
  });

  // Use elliptical arc path segments to doubly-encode directionality.
  function tick() {
    path.attr("d", linkArc);

      // path.attr("x1", function(d) { return d.source.x; })
      //     .attr("y1", function(d) { return d.source.y; })
      //     .attr("x2", function(d) { return d.target.x; })
      //     .attr("y2", function(d) { return d.target.y; });
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


  $(".svg-container svg").svgPanZoom({
    events: {
        mouseWheel: false,
        doubleClick: false
    },
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
