Template.ComponentCssButtonDifferentSizes.helpers({
    snippet_1: function() {
        return marked("```handlebars\n" + [
                `<button class="button button-small button-assertive">`,
                `  Small Button`,
                `</button>`,
                `<button class="button button-large button-positive">`,
                `  Large Button`,
                `</button>`
            ].join('\n') + "```");
    }
});