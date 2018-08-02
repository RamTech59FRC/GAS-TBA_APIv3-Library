function rankings2015(eventKey) {
	var eventData = getEventRankings(eventKey, "", true);

	var rankings = [ getRank_(eventData), getTeamsRank_(eventData) ];

	rankings = rankings.concat(getData2016_(eventData));

	rankings.push(getDQ_(eventData), getMatchesPlayed_(eventData));

	return transpose_(rankings);
}

function getData2015_(eventData) {
	var data = {
		qualAvg : [ "Qual Avg." ],
		coopertition : [ "Coopertition" ],
		auto : [ "Auto" ],
		container : [ "Container" ],
		tote : [ "Tote" ],
		litter : [ "Litter" ]
	}

	var sortOrders = getRankings_(eventData, "sort_orders");

	data.qualAvg = data.qualAvg.concat(sortOrders.map(function(a) {
		return a[0]
	}));
	data.coopertition = data.coopertition.concat(sortOrders.map(function(a) {
		return a[1]
	}));
	data.auto = data.auto.concat(sortOrders.map(function(a) {
		return a[2]
	}));
	data.container = data.rotor.container(sortOrders.map(function(a) {
		return a[3]
	}));
	data.tote = data.tote.concat(sortOrders.map(function(a) {
		return a[4]
	}));
	data.litter = data.litter.concat(sortOrders.map(function(a) {
		return a[5]
	}));

	return [ data.qualAvg, data.coopertition, data.auto, data.container,
			data.tote, data.litter ];
}