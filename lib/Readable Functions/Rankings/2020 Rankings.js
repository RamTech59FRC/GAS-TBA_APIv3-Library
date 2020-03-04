function rankings2020(eventKey) {
    var eventData = getEventRankings(eventKey, "", true);

    var rankings = [ getRank_(eventData), getTeamsRank_(eventData) ];

    rankings = rankings.concat(getData2020_(eventData));

    rankings.push(getRecord_(eventData), getDQ_(eventData),
        getMatchesPlayed_(eventData));

    return transpose_(rankings);
}

function getData2020_(eventData) {
    var data = {
        rankScore : [ "Ranking Score" ],
        auto : [ "Auto" ],
        endGame : [ "Endgame" ],
        teleopCpanel : [ "Teleop Cell + CPanel" ]
    }

    var sortOrders = getRankings_(eventData, "sort_orders");

    data.rankScore = data.rankScore.concat(sortOrders.map(function(a) {
        return a[0]
    }));
    data.auto = data.auto.concat(sortOrders.map(function(a) {
        return a[1]
    }));
    data.endGame = data.endGame.concat(sortOrders.map(function(a) {
        return a[2]
    }));
    data.teleopCpanel = data.teleopCpanel.concat(sortOrders.map(function(a) {
        return a[4]
    }));

    return [ data.rankScore, data.auto, data.endGame, data.teleopCpanel];
}