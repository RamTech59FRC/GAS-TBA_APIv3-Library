/**
 * Mirror of: /teams/{page_num}
 * 
 * Returns an array of teams per page in groups of 500
 * 
 * @param {Number}
 *            pageNum - page num of results, zero indexed
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns an array of teams per page in groups of 500
 */
function getTeams(pageNum, header, raw) {
	return apiDataCall("teams/" + pageNum, header, raw);
}

/**
 * Mirror of: /teams/{page_num}/simple
 * 
 * Returns an array of teams_simple per page in groups of 500
 * 
 * @param {Number}
 *            pageNum - page num of results, zero indexed
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns an array of teams_simple per page in groups of 500
 */
function getTeamsSimple(pageNum, header, raw) {
	return apiDataCall("teams/" + pageNum + "/simple", header, raw);
}

/**
 * Mirror of: /teams/{page_num}/keys
 * 
 * Returns an array of team keys per page in groups of 500
 * 
 * @param {Number}
 *            pageNum - page num of results, zero indexed
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns an array of team keys per page in groups of 500
 */
function getTeamKeys(pageNum, raw) {
	return apiDataCall("teams/" + pageNum + "/keys", "", raw);
}

/**
 * Mirror of: /teams/{year}/{page_num}
 * 
 * Returns an array of teams that competed in the specified year per page in
 * groups of 500
 * 
 * @param {Number}
 *            year - Year, must be 4 digits
 * @param {Number}
 *            pageNum - page num of results, zero indexed
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns an array of teams that competed in the specified
 *          year per page in groups of 500
 */
function getTeamsYear(year, pageNum, header, raw) {
	return apiDataCall(year + "/teams/" + pageNum, header, raw);
}

/**
 * Mirror of: /teams/{year}/{page_num}/simple
 * 
 * Returns an array of teams_simple that competed in the specified year per page
 * in groups of 500
 * 
 * @param {Number}
 *            year - Year, must be 4 digits
 * @param {Number}
 *            pageNum - page num of results, zero indexed
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns an array of teams_simple that competed in the
 *          specified year per page in groups of 500
 */
function getTeamsYearSimple(year, pageNum, header, raw) {
	return apiDataCall(year + "/teams/" + pageNum + "/simple", header, raw);
}

/**
 * Mirror of: /teams/{year}/{page_num}/keys
 * 
 * Returns an array of teams_simple that competed in the specified year per page
 * in groups of 500
 * 
 * @param {Number}
 *            year - Year, must be 4 digits
 * @param {Number}
 *            pageNum - page num of results, zero indexed
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns an array of teams_simple that competed in the
 *          specified year per page in groups of 500
 */
function getTeamKeysYear(year, pageNum, header, raw) {
	return apiDataCall("team/" + year + "/" + pageNum + "/keys", header, raw);
}

/**
 * Mirror of: /team/{team_key}
 * 
 * Gets the team information specified by the team key
 * 
 * @param {String}
 *            teamKey - FRC team key
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns the information pertaining to the team
 */
function getTeam(teamKey, header, raw) {
	return apiDataCall("team/" + teamKey, header, raw);
}

/**
 * Mirror of: /team/{team_key}/simple
 * 
 * Gets the simplified team information specified by the team key
 * 
 * @param {String}
 *            teamKey - FRC team key
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns the simplified information pertaining to the team
 */
function getTeamSimple(teamKey, header, raw) {
	return apiDataCall("team/" + teamKey + "/simple", header, raw);
}

/**
 * Mirror of: /team/{team_key}/years_participated
 * 
 * Gets the years that the specified team has participated
 * 
 * @param {String}
 *            teamKey - FRC team key
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns the years that the team has participated
 */
function getYearsParticipated(teamKey, raw) {
	return apiDataCall("team/" + teamKey + "/years_participated", "", raw);
}

/**
 * Mirror of: /team/{team_key}/districts
 * 
 * Gets an array of districts representing each year the team was in a district.
 * Will return an empty array if the team was never in a district.
 * 
 * @param {String}
 *            teamKey - FRC team key
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns an array of districts representing each year the
 *          team was in a district
 */
function getTeamDistricts(teamKey, header, raw) {
	return apiDataCall("team/" + teamKey + "/districts", header, raw);
}

/**
 * Mirror of: /team/{team_key}/robots
 * 
 * Gets a list of year and robot name pairs for each year that a robot name was
 * provided. Will return an empty array if the team has never named a robot.
 * 
 * @param {String}
 *            teamKey - FRC team key
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns a list of year and robot name pairs for each year
 *          that a robot name was provided
 */
function getRobots(teamKey, header, raw) {
	return apiDataCall("team/" + teamKey + "/robots", header, raw);
}

/**
 * Mirror of: /team/{team_key}/events
 * 
 * Gets a list of all events this team has competed at.
 * 
 * @param {String}
 *            teamKey - FRC team key
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns a list of all events this team has competed at
 */
function getTeamEvents(teamKey, header, raw) {
	return apiDataCall("team/" + teamKey + "/events", header, raw);
}

/**
 * Mirror of: /team/{team_key}/events/simple
 * 
 * Gets a short-form list of all events this team has competed at.
 * 
 * @param {String}
 *            teamKey - FRC team key
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns a short-form list of all events this team has
 *          competed at
 */
function getTeamEventsSimple(teamKey, header, raw) {
	return apiDataCall("team/" + teamKey + "/events/simple", header, raw);
}

/**
 * Mirror of: /team/{team_key}/events/keys
 * 
 * Gets a list of the event keys for all events this team has competed at.
 * 
 * @param {String}
 *            teamKey - FRC team key
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns a list of the event keys for all events this team
 *          has competed at
 */
function getTeamEventKeys(teamKey, raw) {
	return apiDataCall("team/" + teamKey + "/events/keys", "", raw);
}

/**
 * Mirror of: /team/{team_key}/events/{year}
 * 
 * Gets a list of events this team has competed at in the given year.
 * 
 * @param {String}
 *            teamKey - FRC team key
 * @param {Number}
 *            year - Year, must be 4 digits
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns a list of all events this team has competed at in
 *          the given year
 */
function getTeamEventsYear(teamKey, year, header, raw) {
	return apiDataCall("team/" + teamKey + "/events/" + year, header, raw);
}

/**
 * Mirror of: /team/{team_key}/events/{year}/simple
 * 
 * Gets a short-form list of events this team has competed at in the given year.
 * 
 * @param {String}
 *            teamKey - FRC team key
 * @param {Number}
 *            year - Year, must be 4 digits
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns a short-form list of all events this team has
 *          competed at in the given year
 */
function getTeamEventsYearSimple(teamKey, year, header, raw) {
	return apiDataCall("team/" + teamKey + "/events/" + year + "/simple",
			header, raw);
}

/**
 * Mirror of: /team/{team_key}/events/{year}/keys
 * 
 * Gets a list of the event keys for events this team has competed at in the
 * given year.
 * 
 * @param {String}
 *            teamKey - FRC team key
 * @param {Number}
 *            year - Year, must be 4 digits
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns a list of the event keys for events this team has
 *          competed at in the given year
 */
function getTeamEventYearKeys(teamKey, year, raw) {
	return apiDataCall("team/" + teamKey + "/events/" + year + "/keys", "", raw);
}

/**
 * Mirror of: /team/{team_key}/events/{year}/statuses
 * 
 * Gets a key-value list of the event statuses for events this team has competed
 * at in the given year.
 * 
 * @param {String}
 *            teamKey - FRC team key
 * @param {Number}
 *            year - Year, must be 4 digits
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns a key-value list of the event statuses for events
 *          this team has competed at in the given year
 */
function getTeamEventsYearStatuses(teamKey, year, header, raw) {
	return apiDataCall("team/" + teamKey + "/events/" + year + "/statuses",
			header, raw);
}

/**
 * Mirror of: /team/{team_key}/event/{event_key}/matches
 * 
 * Gets a list of matches for the given team and event.
 * 
 * @param {String}
 *            teamKey - FRC team key
 * @param {String}
 *            eventKey - FRC event key
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns a list of matches for the given team and event
 */
function getTeamEventMatches(teamKey, eventKey, header, raw) {
	return apiDataCall("team/" + teamKey + "/event/" + eventKey + "/matches",
			header, raw);
}

/**
 * Mirror of: /team/{team_key}/event/{event_key}/matches/simple
 * 
 * Gets a short-form list of matches for the given team and event.
 * 
 * @param {String}
 *            teamKey - FRC team key
 * @param {String}
 *            eventKey - FRC event key
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns a short-form list of matches for the given team and
 *          event
 */
function getTeamEventMatchesSimple(teamKey, eventKey, header, raw) {
	return apiDataCall("team/" + teamKey + "/event/" + eventKey
			+ "/matches/simple", header, raw);
}

/**
 * Mirror of: /team/{team_key}/event/{event_key}/matches/keys
 * 
 * Gets a list of the match keys for specified event.
 * 
 * @param {String}
 *            teamKey - FRC team key
 * @param {String}
 *            eventKey - FRC event key
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns a list of the match keys for specified event
 */
function getTeamMatchKeys(teamKey, eventKey, raw) {
	return apiDataCall("team/" + teamKey + "/event/" + eventKey
			+ "/matches/keys", "", raw);
}

/**
 * Mirror of: /team/{team_key}/event/{event_key}/awards
 * 
 * Gets a list of awards the given team won at the given event.
 * 
 * @param {String}
 *            teamKey - FRC team key
 * @param {String}
 *            eventKey - FRC event key
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns a list of awards the given team won at the given
 *          event
 */
function getTeamEventAwards(teamKey, eventKey, header, raw) {
	return apiDataCall("team/" + teamKey + "/event/" + eventKey + "/awards",
			header, raw);
}

/**
 * Mirror of: /team/{team_key}/event/{event_key}/status
 * 
 * Gets the competition rank and status of the team at the given event.
 * 
 * @param {String}
 *            teamKey - FRC team key
 * @param {String}
 *            eventKey - FRC event key
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns the competition rank and status of the team at the
 *          given event
 */
function getTeamEventStatus(teamKey, eventKey, header, raw) {
	return apiDataCall("team/" + teamKey + "/event/" + eventKey + "/status",
			header, raw);
}

/**
 * Mirror of: /team/{team_key}/awards
 * 
 * Gets a list of awards the given team has won.
 * 
 * @param {String}
 *            teamKey - FRC team key
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns all the awards this team has won
 */
function getTeamAwards(teamKey, header, raw) {
	return apiDataCall("team/" + teamKey + "/awards", header, raw);
}

/**
 * Mirror of: /team/{team_key}/awards/{year}
 * 
 * Gets a list of awards the given team has won.
 * 
 * @param {String}
 *            teamKey - FRC team key
 * @param {Number}
 *            year - Year, must be 4 digits
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns all the awards this team has won
 */
function getTeamAwardsYear(teamKey, year, header, raw) {
	return apiDataCall("team/" + teamKey + "/awards/" + year, header, raw);
}

/**
 * Mirror of: /team/{team_key}/matches/{year}
 * 
 * Gets a list of matches for the given team and year.
 * 
 * @param {String}
 *            teamKey - FRC team key
 * @param {Number}
 *            year - Year, must be 4 digits
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns all the matches the specified team was in for the
 *          specified year
 */
function getTeamMatches(teamKey, year, header, raw) {
	return apiDataCall("team/" + teamKey + "/matches/" + year, header, raw);
}

/**
 * Mirror of: /team/{team_key}/matches/{year}/simple
 * 
 * Gets a list of matches for the given team and year.
 * 
 * @param {String}
 *            teamKey - FRC team key
 * @param {Number}
 *            year - Year, must be 4 digits
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns all the matches the specified team was in for the
 *          specified year simplified
 */
function getTeamMatchesSimple(teamKey, year, header, raw) {
	return apiDataCall("team/" + teamKey + "/matches/" + year + "/simple",
			header, raw);
}

/**
 * Mirror of: /team/{team_key}/matches/{year}/keys
 * 
 * Gets a list of match keys for matches for the given team and year.
 * 
 * @param {String}
 *            teamKey - FRC team key
 * @param {Number}
 *            year - Year, must be 4 digits
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns all match string keys for each match
 */
function getTeamMatchKeysYear(teamKey, year, raw) {
	return apiDataCall("team/" + teamKey + "/matches/" + year + "/keys", "", raw);
}

/**
 * Mirror of: /team/{team_key}/media/{year}
 * 
 * Gets a list of match keys for matches for the given team and year.
 * 
 * @param {String}
 *            teamKey - FRC team key
 * @param {Number}
 *            year - Year, must be 4 digits
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns all the media associated with this team for the
 *          specified year
 */
function getTeamMedia(teamKey, year, header, raw) {
	return apiDataCall("team/" + teamKey + "/media/" + year, header, raw);
}

/**
 * Mirror of: /team/{team_key}/media/tag/{media_tag}
 * 
 * Gets a list of match keys for matches for the given team and tag.
 * 
 * @param {String}
 *            teamKey - FRC team key
 * @param {String}
 *            mediaTag - Media tag
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns a list of Media (videos / pictures) for the given
 *          team and tag.
 */
function getTeamMediaTag(teamKey, mediaTag, header, raw) {
	return apiDataCall("team/" + teamKey + "/media/tag/" + mediaTag, header, raw);
}

/**
 * Mirror of: /team/{team_key}/media/tag/{media_tag}/{year}
 * 
 * Gets a list of match keys for matches for the given team and year.
 * 
 * @param {String}
 *            teamKey - FRC team key
 * @param {String}
 *            mediaTag - Media tag
 * @param {Number}
 *            year - Year, must be 4 digits
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns all the media associated with this team for the
 *          specified year
 */
function getTeamMediaTagYear(teamKey, mediaTag, year, header, raw) {
	return apiDataCall("team/" + teamKey + "/media/tag/" + mediaTag + "/"
			+ year, header, raw);
}

/**
 * Mirror of: /team/{team_key}/social_media
 * 
 * Gets a list of match keys for matches for the given team and year.
 * 
 * @param {String}
 *            teamKey - FRC team key
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns all social media associated with this team
 */
function getTeamSocialMedia(teamKey, header, raw) {
	return apiDataCall("team/" + teamKey + "/social_media", header, raw);
}
