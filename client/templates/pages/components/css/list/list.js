Template.ComponentCssList.helpers({
    snippet_1: function() {
        return marked([
            "```handlebars",
            `<ul class="list">`,
            `  <li class="item">`,
            `    Such item. Much data.`,
            `  </li>`,
            `</ul>`,
            "```"
        ].join("\n"));
    }
});