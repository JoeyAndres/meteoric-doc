Template.ComponentCssButtonIcons.helpers({
    snippet_1: function() {
        return marked("```handlebars\n" + [
                `<button class="button">`,
                `  <i class="icon ion-loading-c"></i> Loading...`,
                `</button>\n`,
                `<button class="button icon-left ion-home">Home</button>\n`,
                `<button class="button icon-left ion-star button-positive">Favorites</button>\n`,
                `<a class="button icon-right ion-chevron-right button-calm">Learn More</a>\n`,
                `<a class="button icon-left ion-chevron-left button-clear button-dark">Back</a>\n`,
                `<button class="button icon ion-gear-a"></button>\n`,
                `<a class="button button-icon icon ion-settings"></a>\n`,
                `<a class="button button-outline icon-right ion-navicon button-balanced">Reorder</a>\n`,
            ].join('\n') + "```");
    }
});