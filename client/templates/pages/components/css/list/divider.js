Template.ComponentCssListDivider.helpers({
    snippet_1: function() {
        return marked([
            "```handlebars",
            `<div class="item item-divider">Such Divide</div>`,
            `<a class="item" href="#">Much conflicts.</a>`,
            `<a class="item" href="#">Such divisiv. Wow.</a>`,
            ``,
            `<div class="item item-divider">Another Divide</div>`,
            `<a class="item" href="#">Such humans.</a>`,
            `<a class="item" href="#">So impulse.</a>`,
            `<a class="item" href="#">amaze</a>`,
            "```"
        ].join("\n"));
    }
});