Template.ComponentCssButtonBlock.helpers({
    snippet_1: function() {
        return marked("```handlebars\n" + [
                `<button class="button button-block button-positive">`,
                `  Block Button`,
                `</button>`
            ].join('\n') + "```");
    }
});