V = {

    initial : function() { console.log("nothing by default");  },

    // for
    //  renders to the target domAreaId
    //  using the mustache template with the templateId
    //  and passing the data object to mustach
    for : function(domAreaId, templateId, data) {
        var template = $("#" + templateId).html();
        Mustache.parse(template);
        var rendered = Mustache.render(template, data);
        $("#" + domAreaId).html(rendered);
    },

    // click
    //  handle a click action
    click : function(domSelector, action) {
        $(document).on("click", domSelector, action);
    },

    // clear
    //  emptys out the target domAreaId
    clear : function(domAreaId) {
        $("#" + domAreaId).empty();
    },

    // go
    //  kicks off the controller
    go : function() { this.initial(); }
};
