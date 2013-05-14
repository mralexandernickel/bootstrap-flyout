(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['flyout'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <li class=\"";
  stack1 = helpers['if'].call(depth0, depth0.active, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n          <a href=\""
    + escapeExpression(((stack1 = depth0.href),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = depth0.title),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n        </li>\n        ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "active";
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <li class=\"";
  stack1 = helpers['if'].call(depth0, depth0.active, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n        <a href=\""
    + escapeExpression(((stack1 = depth0.href),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = depth0.title),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\n      </li>\n      ";
  return buffer;
  }

  buffer += "<div id=\"flyout\">\n  <div class=\"flyout-bar\">\n    <a id=\"flyout_toggle\" class=\"toggle hidden-desktop\" href=\"#\">\n      <i class=\"icon-reorder\"></i>\n    </a>\n    <div id=\"flyout_bar_container\" class=\"container clearfix\">\n      <ul class=\"nav nav-desktop pull-left visible-desktop\">\n        ";
  stack1 = helpers.each.call(depth0, depth0.navigation, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </ul>\n      ";
  if (stack1 = helpers.search) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.search; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n    </div>\n  </div>\n  <div class=\"container-flyout\">\n    <ul class=\"nav nav-list\">\n      <li class=\"nav-header\">Pages</li>\n      ";
  stack1 = helpers.each.call(depth0, depth0.navigation, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n  </div>\n</div>";
  return buffer;
  });
})();