const { Contest } = require('../models/Contest.model');

    // The method below is new
module.exports.createContest = (request, response) => {
    const { question, country1,vote1,country2,vote2,country3,vote3 } = request.body;
    Contest.create({
        question,
        country1,
        vote1,
        country2,
        vote2,
        country3,
        vote3,
    })
        .then(Contest => response.json(Contest))
        .catch(err => response.json(err));
}

module.exports.getAllContest = (request, response) => {
    Contest.find({})
        .then(Contests => response.json(Contests))
        .catch(err => response.json(err))
}

module.exports.getContest = (request, response) => {
    Contest.findOne({_id:request.params.id})
        .then(contest => response.json(contest))
        .catch(err => response.json(err))
}

module.exports.updateContest = (request, response) => {
    Contest.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedContest => response.json(updatedContest))
        .catch(err => response.json(err))
}


module.exports.deleteContest = (request, response) => {
    Contest.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}










