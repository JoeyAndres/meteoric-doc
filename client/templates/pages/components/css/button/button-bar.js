Template.ComponentCssButtonBar.helpers({
    snippet_1: function() {
        return marked("```handlebars\n" + [
                `<div class="button-bar">`,
                `  <a class="button">First</a>`,
                `  <a class="button">Second</a>`,
                `  <a class="button">Third</a>`,
                `</div>`
            ].join('\n') + "```");
    }
});