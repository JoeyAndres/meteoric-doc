Template.ComponentListInsetLists.helpers({
    snippet_1: function() {
        return marked([
            "```html",
            `<div class="list list-inset">`,
            ``,
            `  <div class="item">`,
            `    Raiders of the Lost Ark`,
            `  </div>`,
            ``,
            `  ...`,
            ``,
            `</div>`,
            "```"
        ].join("\n"));
    }
});