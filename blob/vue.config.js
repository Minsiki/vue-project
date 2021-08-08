module.exports = {
    chaneWebpack: config => {
        config.plugins.delete('prefetch');
    }
}