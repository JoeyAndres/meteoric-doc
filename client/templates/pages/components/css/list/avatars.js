Template.ComponentCssListAvatars.helpers({
    snippet_1: function() {
        return marked([
            "```handlebars",
            `<div class="list">`,
            ``,
            `  <a class="item item-avatar" href="#">`,
            `    <img src="venkman.jpg">`,
            `    <h2>Venkman</h2>`,
            `    <p>Back off, man. I'm a scientist.</p>`,
            `  </a>`,
            ``,
            `  ...`,
            ``,
            `</div>`,
            "```"
        ].join("\n"));
    }
});