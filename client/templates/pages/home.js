let base_url = "http://jandres-ionic.meteor.com";
Template.Home.onCreated(function() {
    this.device_src = new ReactiveVar(`${base_url}/`);
});

Template.Home.onRendered(function() {
    this.$('.virtual-mobile-device > div').pushpin({
        top: this.$('.virtual-mobile-device').offset().top,
        offset: 20
    });

    // icon click
    this.$('ul#nav-mobile li.search .search-wrapper i.material-icons').click(() => {
        if (this.$('.search-results .focused').length) {
            this.$('.search-results .focused').first()[0].click();
        } else if ($('.search-results').children().length) {
            this.$('.search-results').children().first()[0].click();
        }
    });

    let main_section = $('[data-section="main"]');
    let section_to_side_nav_dom = new Map();
    let section_to_dom = new Map();
    let dom_to_section = new Map();
    let side_nav = $('#side-nav');

    section_to_side_nav_dom.set(main_section.get(0), side_nav.get(0));
    section_to_dom.set(['main'], main_section.get(0));
    dom_to_section.set(main_section.get(0), ['main']);

    let callback_tree = { main: { enter: function() {}, exit: function() {}, children: {} } };
    let side_nav_section_to_callback_node = new Map();
    side_nav_section_to_callback_node.set(main_section.get(0), callback_tree.main);

    class Queue {
        constructor() {
            this._queue = [];
        }

        length() {
            return this._queue.length;
        }

        enqueue(val) {
            this._queue.push(val);
        }

        dequeue() {
            if (this.length() > 0) {
                 return this._queue.shift();
            }
            return undefined;
        }
    }


    let BreadthFirstSearch = function(options) {
        let queue = new Queue();

        if (_.isArray(options.root)) {
            _.each(options.root, elem => queue.enqueue($(elem)));
        } else {
            queue.enqueue(options.root);
        }

        while (queue.length()) {
            let node = queue.dequeue();

            _.isFunction(options.visit) && options.visit(node);
            if (options.children_fn(node).length > 0) {
                options.children_fn(node).forEach(function (child) {
                    queue.enqueue(child);
                });
            }
        }
    };

    let clean_up_href = function(href) {
        return href.replace('/', '-');
    };
    let clean_up_id = clean_up_href;

    BreadthFirstSearch({
        root: $.makeArray(main_section.children()),
        children_fn: function (node) { return $.makeArray(node.children('[data-section]')).map(node => $(node)); },
        visit: function($node) {
            // Section book-keeping.
            let parent_dom = $node.parent().get(0);
            let parent_section = dom_to_section.get(parent_dom);
            let node_section = _.map(parent_section, _.clone);
            node_section.push($node.data('section'));
            section_to_dom.set(node_section, $node.get(0));
            dom_to_section.set($node.get(0), node_section);

            let $parent_side_nav = $(section_to_side_nav_dom.get($node.parent().get(0)));
            let $parent_side_nav_ul = $parent_side_nav.find('ul').addBack('ul').first();
            let section_spine_case = node_section.join('-');
            let side_nav_section_spine_case = node_section.join('-');
            $node.attr('id', clean_up_id(section_spine_case));

            let parent_side_section_nav_callback_node = side_nav_section_to_callback_node.get(parent_dom);
            let side_nav_section_callback_node = { enter(){}, exit() {}, children: {} };
            parent_side_section_nav_callback_node.children[$node.data('section')] = side_nav_section_callback_node;
            side_nav_section_to_callback_node.set($node.get(0), side_nav_section_callback_node);

            if ($node.children('[data-section]').length > 0) {
                $node.children().scrollSpy();
                let $side_nav_section = $(`<li class="bold"><a href="#${clean_up_href(side_nav_section_spine_case)}" class="waves-effect waves-color">${$node.data('section')}</a><div><ul></ul></div></li>`);
                let $side_nav_section_ul = $side_nav_section.find('ul').addBack('ul').first();

                if (typeof $node.data('side-nav-collapse') !== "undefined") {
                    $side_nav_section_ul.hide();  // Initial state.
                    $node
                        .on("scrollSpy:enter", () => { $side_nav_section_ul.show(); })
                        .on("scrollSpy:exit", () => { $side_nav_section_ul.hide(); });
                }
                $parent_side_nav_ul.append($side_nav_section);
                section_to_side_nav_dom.set($node.get(0), $side_nav_section.get(0));
            } else {
                $parent_side_nav_ul.append($(`<li><a href="#${clean_up_href(side_nav_section_spine_case)}" class="waves-effect waves-color">${$node.data('section')}</a></li>`));
            }

            $node
                .on("scrollSpy:enter", () => { side_nav_section_callback_node.enter(); })
                .on("scrollSpy:exit", () => { side_nav_section_callback_node.exit(); });
        }
    });
    main_section.children().scrollSpy();

    let map_callbacks = function(callbacks) {
        let _callbacks = { children: callbacks };
        BreadthFirstSearch({
            root: _callbacks,
            children_fn: node => node.children ? Object.keys(node.children).map(node_key => node.children[node_key]) : [],
            visit(node) {
                let section_breadcrumb = node.section_breadcrumb || [];
                for (let section in (node.children || {})) {
                    node.children[section].section_breadcrumb = _.clone(section_breadcrumb);
                    node.children[section].section_breadcrumb.push(section);
                }

                if (section_breadcrumb.length) {
                    let traversable_callback_node = callback_tree.main;
                    for (let section of section_breadcrumb) {
                        traversable_callback_node = traversable_callback_node.children[section];
                    }
                    traversable_callback_node.enter = node.enter;
                    traversable_callback_node.exit = node.exit;
                }
            }
        });
    };
    
    map_callbacks({
        overview: {
            enter: function() {},
            exit: function() {},

            children: {
                installation: {
                    enter: () => {
                    },
                    exit: () => {
                    }
                },
                'css/sass': {
                    enter: () => {
                    },
                    exit: () => {
                    }
                },
                about: {
                    enter: () => {
                    },
                    exit: () => {
                    }
                }
            }
        },
        css: {
            enter: function() {},
            exit: function() {},

            children: {
                header: {
                    enter: () => {
                        this.device_src.set(`${base_url}/header`);
                    },
                    exit: () => {
                    }
                },
                content: {
                    enter: () => {
                        this.device_src.set(`${base_url}/content`);
                    },
                    exit: () => {
                    }
                },
                footer: {
                    enter: () => {
                        this.device_src.set(`${base_url}/footer`);
                    },
                    exit: () => {
                    }
                },
                buttons: {
                    enter: () => {
                        this.device_src.set(`${base_url}/buttons`);
                    },
                    exit: () => {
                    },

                    children: {
                        block: {
                            enter: () => {
                                this.device_src.set(`${base_url}/buttons/block`);
                            },
                            exit: () => {
                            }
                        },
                        'full-width': {
                            enter: () => {
                                this.device_src.set(`${base_url}/buttons/full`);
                            },
                            exit: () => {
                            }
                        },
                        sizes: {
                            enter: () => {
                                this.device_src.set(`${base_url}/buttons/different-sizes`);
                            },
                            exit: () => {
                            }
                        },
                        outlined: {
                            enter: () => {
                                this.device_src.set(`${base_url}/buttons/outlined`);
                            },
                            exit: () => {
                            }
                        },
                        clear: {
                            enter: () => {
                                this.device_src.set(`${base_url}/buttons/clear`);
                            },
                            exit: () => {
                            }
                        },
                        icons: {
                            enter: () => {
                                this.device_src.set(`${base_url}/buttons/icons`);
                            },
                            exit: () => {
                            }
                        },
                        'headers/footers': {
                            enter: () => {
                                this.device_src.set(`${base_url}/buttons/headers-footers/clear`);
                            },
                            exit: () => {
                            }
                        },
                        bar: {
                            enter: () => {
                                this.device_src.set(`${base_url}/buttons/bar`);
                            },
                            exit: () => {
                            }
                        }
                    }
                },
                list: {
                    enter: () => {
                        this.device_src.set(`${base_url}/lists`);
                    },
                    exit: () => {
                    },

                    children: {
                        divider: {
                            enter: () => {
                                this.device_src.set(`${base_url}/lists/dividers`);
                            },
                            exit: () => {
                            }
                        },
                        icons: {
                            enter: () => {
                                this.device_src.set(`${base_url}/lists/icons`);
                            },
                            exit: () => {
                            }
                        },
                        buttons: {
                            enter: () => {
                                this.device_src.set(`${base_url}/lists/buttons`);
                            },
                            exit: () => {
                            }
                        },
                        avatars: {
                            enter: () => {
                                this.device_src.set(`${base_url}/lists/avatars`);
                            },
                            exit: () => {
                            }
                        },
                        thumbnails: {
                            enter: () => {
                                this.device_src.set(`${base_url}/lists/thumbnails`);
                            },
                            exit: () => {
                            }
                        },
                        lists: {
                            enter: () => {
                                this.device_src.set(`${base_url}/lists/inset-lists`);
                            },
                            exit: () => {
                            }
                        }
                    }
                }
            }
        },
        blaze: {
            enter: function() {},
            exit: function() {},

            children: {
                list: {
                    enter: () => {
                        this.device_src.set(`${base_url}/lists/complex`);
                    },
                    exit: () => {
                    },

                    children: {
                        ionList: {
                            enter: () => {
                            },
                            exit: () => {
                            }
                        },
                        ionItem: {
                            enter: () => {
                            },
                            exit: () => {
                            }
                        },
                        ionItemContent: {
                            enter: () => {
                            },
                            exit: () => {
                            }
                        },
                        ionItemOptions: {
                            enter: () => {
                            },
                            exit: () => {
                            }
                        },
                        ionOptionButton: {
                            enter: () => {
                            },
                            exit: () => {
                            }
                        },
                        ionDeleteButton: {
                            enter: () => {
                            },
                            exit: () => {
                            }
                        },
                        ionReorderButton: {
                            enter: () => {
                            },
                            exit: () => {
                            }
                        }
                    }
                },
                scroll: {
                    enter: () => {
                    },
                    exit: () => {
                    },

                    children: {
                        ionScroll: {
                            enter: () => {
                                this.device_src.set(`${base_url}/scroll`);
                            },
                            exit: () => {
                            }
                        },
                        ionInfiniteScroll: {
                            enter: () => {
                                this.device_src.set(`${base_url}/lists/ionInfinitescroll`);
                            },
                            exit: () => {
                            }
                        }
                    }
                },
                'side-menu': {
                    enter: () => {
                        this.device_src.set(`${base_url}/sidemenu`);
                    },
                    exit: () => {
                    },
                    children: {
                        ionSideMenuContainer: {
                            enter: () => {
                            },
                            exit: () => {
                            }
                        },
                        ionSideMenus: {
                            enter: () => {
                            },
                            exit: () => {
                            }
                        },
                        ionSideMenu: {
                            enter: () => {
                            },
                            exit: () => {
                            }
                        }
                    }
                }
            }
        }
    })
});

Template.Home.helpers({
    device_src: function() {
        return Template.instance().device_src.get();
    }
});