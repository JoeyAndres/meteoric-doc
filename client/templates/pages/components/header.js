Template.ComponentHeader.helpers({
    bar_snippet: function(bar_type) {
        return marked("```html\n" + [
                `<div class="bar bar-header bar-${bar_type}">`,
                `  <h1 class="title">bar-${bar_type}</h1>`,
                `</div>`
            ].join('\n') + "```")
    },

    sub_header_snippet: function() {
        return marked("```html\n" + [
                `<div class="bar bar-header">`,
                `  <h1 class="title">Header</h1>`,
                `</div>`,
                `<div class="bar bar-subheader">`,
                `  <h2 class="title">Sub Header</h2>`,
                `</div>`
            ].join('\n') + "```");
    }
});