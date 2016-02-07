Template.ComponentCSSSASS.helpers({
    snippet_1: function() {
        return marked([
            "```scss",
            `@import '{jandres:meteoric-sass}/scss/ionic.scss';`,
            `@import '{jandres:meteoric-sass}/scss/ionicons/ionicons.scss';`,
            "```"
        ].join("\n"));
    }
});