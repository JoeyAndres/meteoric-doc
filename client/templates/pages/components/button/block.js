Template.ComponentButtonBlock.helpers({
    snippet_1: function() {
        return marked("```html\n" + [
                `<button class="button button-block button-positive">`,
                `  Block Button`,
                `</button>`
            ].join('\n') + "```");
    }
});