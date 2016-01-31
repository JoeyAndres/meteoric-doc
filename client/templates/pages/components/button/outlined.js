Template.ComponentButtonOutlined.helpers({
    snippet_1: function() {
        return marked("```html\n" + [
                `<button class="button button-outline button-positive">`,
                `  Outlined Button`,
                `</button>`
            ].join('\n') + "```");
    }
});