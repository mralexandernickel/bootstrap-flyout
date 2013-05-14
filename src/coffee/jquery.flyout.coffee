# 
#  the jquery plugin for the flyout navigation
#  
#  @author Alexander Nickel <mr.alexander.nickel@gmail.com>
#  @date 2013-05-13T18:23:44Z
# 
$ = jQuery

config =
  container: false
  # gets used if the the navigation object is not set on init
  navigation_url: "navigation.json"
  context:
    # will hold the precompiled search template
    search: false
    # will hold the navigation object
    navigation: false

methods =
  init: (options) ->
    # set options
    $.extend config, options
    config.container = $(document.body)
    # start the engines
    methods.get_navigation()
  
  get_navigation: ->
    # get the navigation via ajax, if its not set on init
    unless config.context.navigation
      $.get config.navigation_url, (response) ->
        config.context.navigation = response
        methods.inject_flyout()
    else
      methods.inject_flyout()
  
  inject_flyout: ->
    # just inserting the handlebars template, if no #flyout is already present.
    # this way the user don't need to use handlebars.
    unless $("#flyout").length > 0
      # load handleabars runtime
      $.getScript "assets/lib/handlebars.js/handlebars.runtime.js", ->
        # load handlebars templates
        $.getScript "assets/js/templates.js", ->      
          # inject precompiled handlebars template into DOM
          config.container.prepend Handlebars.templates["flyout"](config.context)
          # we need this here, cause if we just leave the else, it is not safe
          # that the script is loaded at the point we are binding the event!
          $("#flyout_toggle").click (e) ->
            e.preventDefault()
            $("#flyout").toggleClass "open"
    else
      # bind click event to the toggle button
      $("#flyout_toggle").click (e) ->
        e.preventDefault()
        $("#flyout").toggleClass "open"


$.flyout = (method,options...) ->
  if methods[method]
    methods[method].apply this, options
  else if typeof method is "object" or not method
    methods.init.apply this, arguments
  else
    $.error "Method " + method + " does not exist in Bootstrap Flyout"