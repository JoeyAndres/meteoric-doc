Template.ComponentCssListThumbnails.helpers({
    snippet_1: function() {
        return marked([
            "```handlebars",
            `<div class="list">`,
            ``,
            `  <a class="item item-thumbnail-left" href="#">`,
            `    <img src="cover.jpg">`,
            `    <h2>Pretty Hate Machine</h2>`,
            `    <p>Nine Inch Nails</p>`,
            `  </a>`,
            ``,
            `  ...`,
            ``,
            `</div>`,
            "```"
        ].join("\n"));
    }
});