let base_url = "http://jandres-ionic.meteor.com";
Template.Home.onCreated(function() {
    this.device_src = new ReactiveVar(`${base_url}/`);

    _.extend(this, {
        hide_sub_side_nav: () => {
            this.$('#side-nav-buttons').hide();
            this.$('#side-nav-list').hide();
        },

        scrollspy_main_cb: e => {
            // todo: make a pull request to make this easier.
            let active_nav = this.$('#side-nav > li > a.active').get(0);
            switch(active_nav) {
                case this.$("a[href='#header']").get(0):
                    this.hide_sub_side_nav();
                    this.device_src.set(`${base_url}/header`);
                    break;
                case this.$("a[href='#content']").get(0):
                    this.hide_sub_side_nav();
                    this.device_src.set(`${base_url}/content`);
                    break;
                case this.$("a[href='#footer']").get(0):
                    this.hide_sub_side_nav();
                    this.device_src.set(`${base_url}/footer`);
                    break;
                case this.$("a[href='#buttons']").get(0):
                    this.hide_sub_side_nav();
                    this.device_src.set(`${base_url}/buttons`);
                    this.$('#side-nav-buttons').show();
                    break;
                case this.$("a[href='#list']").get(0):
                    this.hide_sub_side_nav();
                    this.device_src.set(`${base_url}/lists`);
                    this.$('#side-nav-list').show();
                    break;
            }
        },

        scrollspy_buttons_cb: e => {
            let active_nav = this.$('#side-nav-buttons > li > a.active').get(0);
            switch(active_nav) {
                case this.$("a[href='#buttons-block']").get(0):
                    this.device_src.set(`${base_url}/buttons/block`);
                    break;
                case this.$("a[href='#buttons-full-width']").get(0):
                    this.device_src.set(`${base_url}/buttons/full`);
                    break;
                case this.$("a[href='#buttons-different-sizes']").get(0):
                    this.device_src.set(`${base_url}/buttons/different-sizes`);
                    break;
                case this.$("a[href='#buttons-outlined']").get(0):
                    this.device_src.set(`${base_url}/buttons/outlined`);
                    break;
                case this.$("a[href='#buttons-clear']").get(0):
                    this.device_src.set(`${base_url}/buttons/clear`);
                    break;
                case this.$("a[href='#buttons-icons']").get(0):
                    this.device_src.set(`${base_url}/buttons/icons`);
                    break;
                case this.$("a[href='#buttons-header-and-footers']").get(0):
                    this.device_src.set(`${base_url}/buttons/headers-footers/clear`);
                    break;
                case this.$("a[href='#buttons-button-bar']").get(0):
                    this.device_src.set(`${base_url}/buttons/bar`);
                    break;
            }
        },

        scrollspy_list_cb: e => {
            let active_nav = this.$('#side-nav-list > li > a.active').get(0);
            switch(active_nav) {
                case this.$("a[href='#list-divider']").get(0):
                    this.device_src.set(`${base_url}/lists/dividers`);
                    break;
                case this.$("a[href='#list-icons']").get(0):
                    this.device_src.set(`${base_url}/lists/icons`);
                    break;
                case this.$("a[href='#list-buttons']").get(0):
                    this.device_src.set(`${base_url}/lists/buttons`);
                    break;
                case this.$("a[href='#list-avatars']").get(0):
                    this.device_src.set(`${base_url}/lists/avatars`);
                    break;
                case this.$("a[href='#list-thumbnails']").get(0):
                    this.device_src.set(`${base_url}/lists/thumbnails`);
                    break;
                case this.$("a[href='#list-inset-lists']").get(0):
                    this.device_src.set(`${base_url}/lists/inset-lists`);
                    break;
            }
        }
    });
});

Template.Home.onRendered(function() {
    this.$('.collapsible').collapsible();
    this.$('.scrollspy-main').scrollSpy()
        .on("scrollSpy:enter", this.scrollspy_main_cb)
        .on("scrollSpy:exit", this.scrollspy_main_cb);

    this.$('.scrollspy-buttons').scrollSpy()
        .on("scrollSpy:enter", this.scrollspy_buttons_cb)
        .on("scrollSpy:exit", this.scrollspy_buttons_cb);

    this.$('.scrollspy-list').scrollSpy()
        .on("scrollSpy:enter", this.scrollspy_list_cb)
        .on("scrollSpy:exit", this.scrollspy_list_cb);

    this.$('.virtual-mobile-device > div').pushpin({
        top: this.$('.virtual-mobile-device').offset().top,
        offset: 20
    });
    this.hide_sub_side_nav();

    // icon click
    this.$('ul#nav-mobile li.search .search-wrapper i.material-icons').click(() => {
        if (this.$('.search-results .focused').length) {
            this.$('.search-results .focused').first()[0].click();
        } else if ($('.search-results').children().length) {
            this.$('.search-results').children().first()[0].click();
        }
    });
});

Template.Home.helpers({
    device_src: function() {
        return Template.instance().device_src.get();
    }
});