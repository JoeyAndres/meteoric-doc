Template.ComponentButtonClear.helpers({
    snippet_1: function() {
        return marked("```html\n" + [
                `<button class="button button-clear button-positive">`,
                `  Clear Button`,
                `</button>`
            ].join('\n') + "```");
    }
});