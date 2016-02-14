Template.ComponentBlazeScrollionInfiniteScroll.helpers({
    snippet_1: function() {
        return marked(["```handlebars",
            `{{#ionContent}}`,
            `  {{#ionList onReorder=onReorder showDelete=deletable showReorder=sortable canSwipe=true}}`,
            `      {{#each items}}`,
            `          {{#ionItem class="item-avatar-left"}}`,
            `              <!-- List items go here. -->`,
            `          {{/ionItem}}`,
            `      {{/each}}`,
            `  {{/ionList}}`,
            ``,
            `  // ionInfiniteScroll must be under ionContent.`,
            `  {{> ionInfiniteScroll`,
            `      onInfinite=onInfinite`,
            `      distance="10%" `,
            `      spinner="android"`,
            `      immediateCheck=true`,
            `      enable=hasMore}}`,
            `{{/ionContent}}`,
            "```"
        ].join("\n"));
    },

    snippet_2: function() {
        return marked(["```js",
            `// onCreated method`,
            ``,
            `Template.listsComplex.helpers({`,
            `  onInfinite: function() {`,
            `    let templateInstance = Template.instance();`,
            `    return () => {`,
            `      Meteor.setTimeout(() => {`,
            `        let new_items = templateInstance.items.get();`,
            `        if (templateInstance.maxNum <= 30) {`,
            `          new_items.push(templateInstance.maxNum);`,
            `          templateInstance.maxNum++;`,
            `        }`,
            `        templateInstance.items.set(new_items);`,
            `        $(window).trigger('scroll.infiniteScrollComplete');`,
            `      }, 100);`,
            `    };`,
            `  },`,
            ``,
            `  hasMore: function() {`,
            `    return Template.instance().items.get().length < 30;`,
            `  }`,
            `  // Other helpers.`,
            "```"
            ].join('\n'));
    }
});