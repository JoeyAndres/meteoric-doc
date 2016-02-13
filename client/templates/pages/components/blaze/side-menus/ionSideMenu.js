Template.ComponentBlazeSideMenusionSideMenu.helpers({
    snippet_1: function() {
        return marked(["```handlebars",
            `{{#ionSideMenu side="right"}}`,
            `  <div class="bar bar-header bar-dark">`,
            `    <h1 class="title">Right Menu</h1>`,
            `  </div>`,
            `  <div class="content has-header">`,
            `    <div class="list">`,
            `      <div class="item item-icon-left" data-ion-menu-close>`,
            `        {{> ionIcon icon="ios-arrow-left"}} Close Me`,
            `      </div>`,
            `    </div>`,
            `  </div>`,
            `{{/ionSideMenu}}`,
            "```"
        ].join("\n"));
    }
});