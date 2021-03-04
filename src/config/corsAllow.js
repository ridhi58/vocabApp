const corsAllow = (req, res, next) => {
    const corsWhitelist = [
        'http://localhost:19000',

    ];
    if (corsWhitelist.indexOf(req.headers.origin) !== -1) {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        res.header("Access-Control-Allow-Credentials", true);
    }
    next();
}

module.exports = corsAllow