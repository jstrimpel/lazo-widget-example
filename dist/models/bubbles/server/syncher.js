define(['lazoSyncher', 'fs', 'path'], function (LazoSyncher, fs, path) {

    return LazoSyncher.extend({

        fetch: function (options) {
            var file = path.join(LAZO.FILE_REPO_PATH, 'models', 'bubbles', 'server', 'data.json')

            fs.readFile(file, function (err, data) {
                try {
                    options.success(JSON.parse(data));
                } catch (e) {
                    options.error(e);
                }
            });
        }

    });

});