(function() {
  $(function() {
    return $.flyout({
      context: {
        navigation: [
          {
            title: "One",
            href: "#",
            active: true
          }, {
            title: "Two",
            href: "#",
            active: false
          }, {
            title: "Three",
            href: "#",
            active: false
          }, {
            title: "Four",
            href: "#",
            active: false
          }, {
            title: "Five",
            href: "#",
            active: false
          }
        ]
      }
    });
  });

}).call(this);
(function() {
  var $, config, methods,
    __slice = [].slice;

  $ = jQuery;

  config = {
    container: false,
    navigation_url: "navigation.json",
    context: {
      search: false,
      navigation: false
    }
  };

  methods = {
    init: function(options) {
      $.extend(config, options);
      config.container = $(document.body);
      return methods.get_navigation();
    },
    get_navigation: function() {
      if (!config.context.navigation) {
        return $.get(config.navigation_url, function(response) {
          config.context.navigation = response;
          return methods.inject_flyout();
        });
      } else {
        return methods.inject_flyout();
      }
    },
    inject_flyout: function() {
      if (!($("#flyout").length > 0)) {
        return $.getScript("assets/lib/handlebars.js/handlebars.runtime.js", function() {
          return $.getScript("assets/js/templates.js", function() {
            config.container.prepend(Handlebars.templates["flyout"](config.context));
            return $("#flyout_toggle").click(function(e) {
              e.preventDefault();
              return $("#flyout").toggleClass("open");
            });
          });
        });
      } else {
        return $("#flyout_toggle").click(function(e) {
          e.preventDefault();
          return $("#flyout").toggleClass("open");
        });
      }
    }
  };

  $.flyout = function() {
    var method, options;

    method = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    if (methods[method]) {
      return methods[method].apply(this, options);
    } else if (typeof method === "object" || !method) {
      return methods.init.apply(this, arguments);
    } else {
      return $.error("Method " + method + " does not exist in Bootstrap Flyout");
    }
  };

}).call(this);
