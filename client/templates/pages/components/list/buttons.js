Template.ComponentListButtons.helpers({
    snippet_1: function() {
        return marked([
            "```html",
            `<div class="list">`,
            ``,
            `  <div class="item item-button-right">`,
            `    Call Ma`,
            `    <button class="button button-positive">`,
            `      <i class="icon ion-ios-telephone"></i>`,
            `    </button>`,
            `  </div>`,

            `...`,

            `</div>`,
            "```"
        ].join("\n"));
    }
});