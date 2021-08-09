function checktoken() {
    return async function (ctx, next) {
        console.log('啊这')
        await next()
    }
}

module.exports = checktoken