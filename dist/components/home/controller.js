define(['lazoCtl'], function (LazoCtl) {

    'use strict';

    return LazoCtl.extend({

        index: function (options) {
            var self = this;

            this.loadModel('bubbles', {
                success: function (model) {
                    self.ctx.models.bubbles = model;
                    options.success('index');
                },
                error: function (err) {
                    options.error(err);
                }
            });
        }

    });

})