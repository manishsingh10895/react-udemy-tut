const 
    express = require('express'),
    port = process.env.PORT || 5000,
    app = express();

app.get('/hello', (req, res) => {
    res.json({ message: "Hello" });
});

app.listen(port, () => {
    console.log("Server running on port" + port);
});

