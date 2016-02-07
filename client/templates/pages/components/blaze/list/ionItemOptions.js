Template.ComponentBlazeListionItemOptions.helpers({
    snippet_1: function() {
        return marked(["```handlebars",
            `{{#ionItemOptions}}`,
            `  {{#ionOptionButton class="button-info"}}`,
            `    Share`,
            `  {{/ionOptionButton}}`,
            `  {{#ionOptionButton class="button-assertive"}}`,
            `    Edit`,
            `  {{/ionOptionButton}}`,
            `{{/ionItemOptions}}`,
            "```"
        ].join("\n"));
    }
});