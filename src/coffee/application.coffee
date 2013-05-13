$ ->
  # init the flyout plugin
  $.flyout
    context:
      navigation: [
        { title: "One", href:"#", active:true }
        { title: "Two", href:"#", active:false }
        { title: "Three", href:"#", active:false }
        { title: "Four", href:"#", active:false }
        { title: "Five", href:"#", active:false }
      ]