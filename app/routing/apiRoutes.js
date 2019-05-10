var path = require("path");

var friends = require('../data/friends.js')

// module.exports = function (app) {


//     app.get("/api/friends", function (req, res) {
//         res.json(friends)
//     })

//     app.post("/api/friends", function (req, res) {
//         var friendMatch = { name: "", photo: "", friendDifference: 1000 };
//         console.log(req.body);

//         var newUser = req.body;
//         var newUserScores = newUser.scores;

//         console.log(newUserScores);

//         var totalDifference = 0;

//         for (var i in friends) {
//             for (var j in friends[i].scores) {
//                 totalDifference += Math.abs(parseInt(newUserScores[j]) - parseInt(friends[i].scores[j]))
//             }
//             if (totalDifference <= friendMatch.friendDifference) {
//                 friendMatch.name = friends[i].name
//                 friendMatch = friends[i].photo
//                 friendMatch = friends[i].totalDifference
//             }
//         }
//         friends.push(newUser);
//         res.json(friendMatch);
//     })
// }

module.exports = function (app) {


    app.get('/api/friends', function (req, res) {
        res.json(friends)
    })

    app.post('/api/friends', function (req, res) {
        var totalDifference;
        var lowestTotalDifference = 41;
        var match;
        var newUser = req.body
        for (var i in friends) {
            totalDifference = 0;
            for (var j in friends[i].scores) {
                totalDifference += Math.abs(friends[i].scores[j] - newUser.scores[j])
            }
            if (totalDifference < lowestTotalDifference) {
                lowestTotalDifference = totalDifference;
                match = friends[i]
            }
        }
        friends.push(newUser)
        res.json(match);
        //console.log("Match", match);
        //console.log("Lowest Total", lowestTotalDifference);

    })
}