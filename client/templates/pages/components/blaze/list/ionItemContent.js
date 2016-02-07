Template.ComponentBlazeListionItemContent.helpers({
    snippet_1: function() {
        return marked(["```handlebars",
            `{{#ionItemContent}}`,
            `  <img src="https://randomuser.me/api/portraits/thumb/men/27.jpg">`,
            ``,
            `  <!--Get the data context of its parent which is the integer inside items array.-->`,
            `  <h2>John Smith {{{..}}}</h2>`,
            `  <p>(555) 555-1212</p>`,
            `  <button class="button button-assertive">{{> ionIcon icon="ios-telephone"}}</button>`,
            `{{/ionItemContent}}`,
            "```"
        ].join("\n"));
    }
});