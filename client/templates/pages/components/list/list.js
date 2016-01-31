Template.ComponentList.helpers({
    snippet_1: function() {
        return marked([
            "```html",
            `<ul class="list">`,
            `  <li class="item">`,
            `    Such item. Much data.`,
            `  </li>`,
            `</ul>`,
            "```"
        ].join("\n"));
    }
});