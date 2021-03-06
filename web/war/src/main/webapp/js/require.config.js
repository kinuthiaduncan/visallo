
/*eslint no-undef:0,strict:0,quote-props:0*/
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
     } else if (typeof module === 'object' && module.exports) {
         module.exports = factory();
     } else {
         root.require = factory();
     }
}(this, function() {
    return {
        baseUrl: 'jsc',
        waitSeconds: 0,
        map: {
            '*': {
                'lodash': 'underscore',
                'reselect': 'Reselect',
                'jquery-ui': 'jquery-ui-bundle',
                'jquery-ui/droppable': 'jquery-ui-bundle',
                'jquery-ui/core': 'jquery-ui-bundle',
                'jquery-ui/widget': 'jquery-ui-bundle',
                'jquery-ui/mouse': 'jquery-ui-bundle',
                'jquery-ui/resizable': 'jquery-ui-bundle',
                'jquery-ui/draggable': 'jquery-ui-bundle',
                'prop-types': 'util/component/env-proptypes'
            }
        },
        paths: {
            'async': '../libs/requirejs-plugins/src/async',
            'atmosphere': '../libs/atmosphere.js/lib/atmosphere',
            'beautify': '../libs/js-beautify/js/lib/beautify',
            'bootstrap': '../libs/@visallo/bootstrap/docs/assets/js/bootstrap.min',
            'bootstrap-datepicker': '../libs/bootstrap-datepicker/dist/js/bootstrap-datepicker.min',
            'bootstrap-timepicker': '../libs/bootstrap-timepicker/js/bootstrap-timepicker',
            'bluebird': '../libs/bluebird/js/browser/bluebird.min',
            'chrono': '../libs/chrono-node/chrono.min',
            'classnames': '../libs/classnames/index',
            'colorjs': '../libs/color-js/color',
            'cytoscape': '../libs/cytoscape/dist/cytoscape',
            'd3': '../libs/d3/d3.min',
            'd3-tip': '../libs/d3-tip/index',
            'd3-plugins': '../libs/d3-plugins-dist/dist/mbostock',
            'deep-freeze-strict': '../libs/amd-wrap/deep-freeze-strict/index',
            'duration-js': '../libs/duration-js/duration',
            'easing': '../libs/jquery.easing/jquery.easing.1.3',
            'ejs': '../libs/ejs/ejs',
            'fast-json-patch': '../libs/fast-json-patch/dist/fast-json-patch.min',
            'flight': '../libs/flightjs/build/flight',
            'flight/lib': 'util/flight/compat',
            'goog': '../libs/requirejs-plugins/src/goog',
            'gremlins': '../libs/gremlins.js/gremlins.min',
            'gridstack': '../libs/gridstack/dist/gridstack.min',
            'hbs': 'util/requirejs/hbs-legacy-loader',
            'handlebars': '../libs/handlebars/dist/handlebars.amd.min',
            'jstz': '../libs/jstimezonedetect/dist/jstz.min',
            'jquery': '../libs/jquery/dist/jquery.min',
            'jquery-ui-bundle': '../libs/jquery-ui-bundle/jquery-ui.min',
            'jquery-scrollstop': '../libs/jquery-scrollstop/jquery.scrollstop.min',
            'jscache': '../libs/@visallo/jscache-lru/cache',
            'less': '../libs/@visallo/requirejs-less/less',
            'lessc': '../libs/@visallo/requirejs-less/lessc',
            'moment': '../libs/moment/min/moment-with-locales.min',
            'moment-timezone': '../libs/moment-timezone/builds/moment-timezone-with-data.min',
            'normalize': '../libs/@visallo/requirejs-less/normalize',
            'openlayers': '../libs/openlayers/dist/ol-debug',
            'pathfinding': '../libs/pathfinding/lib/pathfinding-browser.min',
            'propertyParser': '../libs/requirejs-plugins/src/propertyParser',
            'rangy-core': '../libs/rangy/lib/rangy-core',
            'rangy-text': '../libs/rangy/lib/rangy-textrange',
            'rangy-highlighter': '../libs/rangy/lib/rangy-highlighter',
            'rangy-cssclassapplier': '../libs/rangy/lib/rangy-classapplier',
            'rangy-serializer': '../libs/rangy/lib/rangy-serializer',

            'react': '../libs/react/dist/react.min',
            'react-dom': '../libs/react-dom/dist/react-dom.min',
            'create-react-class': '../libs/create-react-class/create-react-class.min',
            'react-proptypes-dev': '../libs/prop-types/prop-types.min',
            'react-redux': '../libs/react-redux/dist/react-redux.min',
            'react-virtualized': '../libs/react-virtualized/dist/umd/react-virtualized',
            'react-virtualized-select': '../libs/@visallo/react-virtualized-select/dist/umd/react-virtualized-select',
            'Reselect': '../libs/reselect/dist/reselect',
            'redux': '../libs/redux/dist/redux.min',
            'sf': '../libs/sf/sf',
            'text': '../libs/requirejs-text/text',
            'tpl': '../libs/@visallo/requirejs-ejs-plugin/rejs',
            'underscore': '../libs/underscore/underscore-min',
            'underscore.inflection': '../libs/underscore.inflection/lib/underscore.inflection',
            'updeep': '../libs/updeep/dist/umd/updeep-standalone.min',
            'videojs': '../libs/video.js/dist/video.min'
        },
        shim: {
            'atmosphere': { init: function() { return $.atmosphere; }, deps: ['jquery'] },
            'bootstrap': { exports: 'window', deps: ['jquery', 'jquery-ui-bundle'] },
            'bootstrap-datepicker': { exports: 'window', deps: ['bootstrap'] },
            'bootstrap-timepicker': { exports: 'window', deps: ['bootstrap'] },
            'chrono': { exports: 'chrono' },
            'colorjs': { init: function() { return this.net.brehaut.Color; } },
            'd3': { exports: 'd3' },
            'd3-plugins/tile/amd/index': { exports: 'd3', deps: ['d3'] },
            'duration-js': { exports: 'Duration' },
            'easing': { init: function() { return $.easing; }, deps: ['jquery'] },
            'ejs': { exports: 'ejs' },
            'fast-json-patch': { exports: 'jsonpatch' },
            'jquery': { exports: 'jQuery' },
            'jstz': { exports: 'jstz' },
            'pathfinding': { exports: 'PF' },
            'rangy-text': { deps: ['rangy-core']},
            'rangy-highlighter': { deps: ['rangy-core', 'rangy-cssclassapplier', 'rangy-serializer']},
            'rangy-cssclassapplier': { deps: ['rangy-core'] },
            'rangy-serializer': { deps: ['rangy-core'] },
            'create-react-class': { deps: ['react'] },
            'prop-types': { deps: ['react'] },
            'jquery-scrollstop': { exports: 'jQuery', deps: ['jquery'] },
            'underscore': { exports: '_' },
            'videojs': { exports: 'videojs' }
        },
        amdWrap: [
            'deep-freeze-strict/index.js'
        ]
    };
}));
