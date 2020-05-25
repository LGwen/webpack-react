const proxy = {
    'GET /repos/hello': (req, res) => {
        debugger
        console.log('/repos/hello:=>>>', req.params)
        return res.json({
            text: 'this is from mock server'
        });
    },
    'GET /repos/home': (req, res) => {
        
        console.log('/repos/home:=>>>', req.params)
        return res.json({
            text: 'this is home data'
        });
    },
}
module.exports = proxy;