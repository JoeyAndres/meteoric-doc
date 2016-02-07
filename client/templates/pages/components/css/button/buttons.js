Template.ComponentCssButtons.helpers({
    snippet_1: function() {
        return marked("```handlebars\n" + [
                `<button class="button">`,
                `  Default`,
                `</button>`,

                `<button class="button button-light">`,
                `  button-light`,
                `</button>`,

                `<button class="button button-stable">`,
                `  button-stable`,
                `</button>`,

                `<button class="button button-positive">`,
                `  button-positive`,
                `</button>`,

                `<button class="button button-calm">`,
                `  button-calm`,
                `</button>`,

                `<button class="button button-balanced">`,
                `  button-balanced`,
                `</button>`,

                `<button class="button button-energized">`,
                `  button-energized`,
                `</button>`,

                `<button class="button button-assertive">`,
                `  button-assertive`,
                `</button>`,

                `<button class="button button-royal">`,
                `  button-royal`,
                `</button>`,

                `<button class="button button-dark">`,
                `  button-dark`,
                `</button>`,
            ].join('\n') + "```");
    }
});