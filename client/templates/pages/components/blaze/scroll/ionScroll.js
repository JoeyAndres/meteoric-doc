Template.ComponentBlazeScrollionScroll.helpers({
    snippet_1: function() {
        return marked(["```handlebars",
            `{{#ionScroll direction="xy" zooming=true locking=false}}`,
            `    <img src="map.png">`,
            `{{/ionScroll}}`,
            "```"
        ].join("\n"));
    }
});