Template.ComponentListDivider.helpers({
    snippet_1: function() {
        return marked([
            "```html",
            `<div class="list">`,

            `  <div class="item item-divider">`,
            `    Candy Bars`,
            `  </div>`,

            `  <a class="item" href="#">`,
            `    Butterfinger`,
            `  </a>`,

            `  ...`,

            `</div>`,
            "```"
        ].join("\n"));
    }
});