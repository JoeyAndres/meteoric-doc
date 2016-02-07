Template.ComponentBlazeListionItem.helpers({
    snippet_1: function() {
        return marked(["```handlebars",
            `{{#ionItem class="item-avatar-left item-button-right"}}`,
            `  {{#ionItemContent}}`,
            `    <img src="https://randomuser.me/api/portraits/thumb/men/27.jpg">`,
            ``,
            `    <!--Get the data context of its parent which is the integer inside items array.-->`,
            `    <h2>John Smith {{{..}}}</h2>`,
            `    <p>(555) 555-1212</p>`,
            `    <button class="button button-assertive">{{> ionIcon icon="ios-telephone"}}</button>`,
            `  {{/ionItemContent}}`,
            `{{/ionItem}}`,
            "```"
        ].join("\n"));
    },

    snippet_2: function() {
        return marked(["```handlebars",
            `{{#ionItem class="item-avatar-left item-button-right"}}`,
            `  {{#ionItemContent}}`,
            `    <img src="https://randomuser.me/api/portraits/thumb/men/27.jpg">`,
            ``,
            `    <!--Get the data context of its parent which is the integer inside items array.-->`,
            `    <h2>John Smith {{{..}}}</h2>`,
            `    <p>(555) 555-1212</p>`,
            `  {{/ionItemContent}}`,
            `  {{#ionItemOptions}}`,
            `    {{#ionOptionButton class="button-info"}}`,
            `      Share`,
            `    {{/ionOptionButton}}`,
            `    {{#ionOptionButton class="button-assertive"}}`,
            `      Edit`,
            `    {{/ionOptionButton}}`,
            `  {{/ionItemOptions}}`,
            ``,
            `  {{#ionDeleteButton class="ion-minus-circled"}}{{/ionDeleteButton}}`,
            `  {{#ionReorderButton class="ion-navicon"}}{{/ionReorderButton}}`,
            `{{/ionItem}}`,
            "```"
        ].join("\n"));
    }
});