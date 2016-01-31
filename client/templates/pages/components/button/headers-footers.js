Template.ComponentButtonHeadersFooters.helpers({
    snippet_1: function() {
        return marked("```html\n" + [
                `<div class="bar bar-header">`,
                `  <button class="button icon ion-navicon"></button>`,
                `  <h1 class="title">Header Buttons</h1>`,
                `  <button class="button">Edit</button>`,
                `</div>`
            ].join('\n') + "```");
    }
});