const ContestController = require('../controllers/contest.controller');
module.exports = function(app){


    app.post('/api/contest/new', ContestController.createContest);
    // ...
app.get('/api/contest/', ContestController.getAllContest);
// // ...

app.get('/api/contest/:id', ContestController.getContest);
app.put('/api/contest/:id', ContestController.updateContest);
app.delete('/api/contest/:id', ContestController.deleteContest);




}
