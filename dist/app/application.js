define(['lazoApp'], function (LazoApp) {

    'use strict';

    return LazoApp.extend({
        initialize: function (callback) {
            this.setDefaultTitle('Lazo Widget Example');
            callback();
        }
    });

});