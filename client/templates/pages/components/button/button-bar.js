Template.ComponentButtonBar.helpers({
    snippet_1: function() {
        return marked("```html\n" + [
                `<div class="button-bar">`,
                `  <a class="button">First</a>`,
                `  <a class="button">Second</a>`,
                `  <a class="button">Third</a>`,
                `</div>`
            ].join('\n') + "```");
    }
});