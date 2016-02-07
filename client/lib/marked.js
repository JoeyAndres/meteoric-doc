Meteor.startup(() => {
    if (Meteor.isClient) {
        hljs.initHighlightingOnLoad();
    }
});

if (Meteor.isClient) {
    marked.setOptions({
        highlight: function (code, lang) {
            if (lang) {
                try {
                    return hljs.highlight(lang, code).value;
                } catch (error) {
                    return code;
                }
            } else {
                return hljs.highlightAuto(code).value;
            }
        }
    });
}