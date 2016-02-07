Template.ComponentCssFooter.helpers({
    snippet_1: function() {
        return marked([
            "```handlebars",
            `<div class="bar bar-footer bar-balanced">`,
            `  <div class="title">Footer</div>`,
            `</div>`,
            "```"
        ].join("\n"));
    },

    snippet_2: function() {
        return marked([
            "```handlebars",
            `<div class="bar bar-footer">`,
            `  <button class="button button-clear">Left</button>`,
            `    <div class="title">Title</div>`,
            `  <button class="button button-clear">Right</button>`,
            `</div>`,
            "```"
        ].join("\n"));
    },

    snippet_3: function() {
        return marked([
            "```handlebars",
            `<div class="bar bar-footer">`,
            `  <button class="button button-clear pull-right">Right</button>`,
            `</div>`,
            "```"
        ].join("\n"));
    }
});