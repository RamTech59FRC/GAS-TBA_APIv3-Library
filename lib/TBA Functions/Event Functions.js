/**
 * Mirror of: /events/{year}
 * 
 * Gets a list of events in the given year.
 * 
 * @param {Number}
 *            year - Year, must be 4 digits
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns a list of events in the given year
 */
function getEvents(year, header, raw) {
	return apiDataCall("events/" + year, header, raw);
}

/**
 * Mirror of: /events/{year}/simple
 * 
 * Gets a simple-list of events in the given year.
 * 
 * @param {Number}
 *            year - Year, must be 4 digits
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns a simple-list of events in the given year
 */
function getEventsSimple(year, header, raw) {
	return apiDataCall("events/" + year + "/simple", header, raw);
}

/**
 * Mirror of: /events/{year}/keys
 * 
 * Gets a list of event keys in the given year.
 * 
 * @param {String}
 *            year - Year, must be 4 digits
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns a list of event keys in the given year
 */
function getEventKeys(year, header, raw) {
	return apiDataCall("events/" + year + "/keys", header, raw);
}

/**
 * Mirror of: /event/{event_key}/teams
 * 
 * Gets a list of teams that competed in the given event
 * 
 * @param {String}
 *            eventKey - FRC Event Key
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns a list of teams that competed in the given event
 */
function getEventTeams(eventKey, header, raw) {
	return apiDataCall("event/" + eventKey + "/teams", header, raw);
}

/**
 * Mirror of: /event/{event_key}/teams/simple
 * 
 * Gets a list of simple teams that competed in the given event
 * 
 * @param {String}
 *            eventKey - FRC Event Key
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns a list of simple teams that competed in the given
 *          event
 */
function getEventTeamsSimple(eventKey, header, raw) {
	return apiDataCall("event/" + eventKey + "/teams/simple", header, raw);
}

/**
 * Mirror of: /event/{event_key}/teams/keys
 * 
 * Gets a list of team keys that competed in the given event
 * 
 * @param {String}
 *            eventKey - FRC Event Key
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns a list of team keys that competed in the given event
 */
function getEventTeamKeys(eventKey, raw) {
	return apiDataCall("event/" + eventKey + "/teams/keys", "", raw);
}

/**
 * Mirror of: /event/{event_key}/teams/statuses
 * 
 * Gets a key-value list of the event statuses for teams competing at the given
 * event.
 * 
 * @param {String}
 *            eventKey - FRC Event Key
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns a key-value list of the event statuses for teams
 *          competing at the given event
 */
function getEventTeamStatuses(eventKey, header, raw) {
	return apiDataCall("event/" + eventKey + "/teams/statuses", header, raw);
}

/**
 * Mirror of: /event/{event_key}
 * 
 * Gets an event.
 * 
 * @param {String}
 *            eventKey - FRC Event Key
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns the event associated with the event key
 */
function getEvent(eventKey, header, raw) {
	return apiDataCall("event/" + eventKey, header, raw);
}

/**
 * Mirror of: /event/{event_key}/simple
 * 
 * Gets a simple event.
 * 
 * @param {String}
 *            eventKey - FRC Event Key
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns the simple event associated with the event key
 */
function getEventSimple(eventKey, header, raw) {
	return apiDataCall("event/" + eventKey + "/simple", header, raw);
}

/**
 * Mirror of: /event/{event_key}/oprs
 * 
 * Gets a set of Event OPRs (including OPR, DPR, and CCWM) for the given Event.
 * 
 * @param {String}
 *            eventKey - FRC Event Key
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns the Event OPRs (including OPR, DPR, and CCWM) for
 *          the given Event
 */
function getOPRs(eventKey, header, raw) {
	return apiDataCall("event/" + eventKey + "/oprs", header, raw);
}

/**
 * Mirror of: /event/{event_key}/predictions
 * 
 * Gets information on TBA-generated predictions for the given Event. Contains
 * year-specific information.
 * 
 * @param {String}
 *            eventKey - FRC Event Key
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns information on TBA-generated predictions for the
 *          given Event. Contains year-specific information
 */
function getPredictions(eventKey, header, raw) {
	return apiDataCall("event/" + eventKey + "/predictions", header, raw);
}

/**
 * Mirror of: /event/{event_key}/matches
 * 
 * Gets a list of matches for the given event
 * 
 * @param {String}
 *            eventKey - FRC Event Key
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns a list of matches for the given event
 */

function getMatches(eventKey, header, raw) {
	return apiDataCall("event/" + eventKey + "/matches", header, raw);
}

/**
 * Mirror of: /event/{event_key}/matches/simple
 * 
 * Gets a simple list of matches for the given event
 * 
 * @param {String}
 *            eventKey - FRC Event Key
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns a simple list of matches for the given event
 */

function getMatchesSimple(eventKey, header, raw) {
	return apiDataCall("event/" + eventKey + "/matches/simple", header, raw);
}

/**
 * Mirror of: /event/{event_key}/matches/keys
 * 
 * Gets a list of match keys for the given event.
 * 
 * @param {String}
 *            eventKey - FRC Event Key
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns a list of match keys for the given event
 */

function getMatchKeys(eventKey) {
	return apiDataCall("event/" + eventKey + "/matches/keys", "", raw);
}

/**
 * Mirror of: /event/{event_key}/awards
 * 
 * Gets a list of awards from the given event.
 * 
 * @param {String}
 *            eventKey - FRC Event Key
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns a list of awards from the given event
 */

function getEventAwards(eventKey, header, raw) {
	return apiDataCall("event/" + eventKey + "/awards", header, raw);
}

/**
 * Mirror of: /event/{event_key}/alliances
 * 
 * Gets a list of Elimination Alliances for the given Event.
 * 
 * @param {String}
 *            eventKey - FRC Event Key
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns a list of Elimination Alliances for the given Event
 */
function getEventAlliances(eventKey, header, raw) {
	return apiDataCall("event/" + eventKey + "/alliances", header, raw);
}

/**
 * Mirror of: /event/{event_key}/insights
 * 
 * Gets a set of Event-specific insights for the given Event.
 * 
 * @param {String}
 *            eventKey - FRC Event Key
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns a set of Event-specific insights for the given Event
 */
function getEventInsights(eventKey, header, raw) {
	return apiDataCall("event/" + eventKey + "/insights", header, raw);
}

/**
 * Mirror of: /event/{event_key}/rankings
 * 
 * Gets a list of team rankings for the Event.
 * 
 * @param {String}
 *            eventKey - FRC Event Key
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns a list of team rankings for the Event
 */
function getEventRankings(eventKey, header, raw) {
	return apiDataCall("event/" + eventKey + "/rankings", header, raw);
}

/**
 * Mirror of: /event/{event_key}/district_points
 * 
 * Gets a list of team rankings for a District Event.
 * 
 * @param {String}
 *            eventKey - FRC Event Key
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns a list of team rankings for a District Event
 */
function getEventDistrictPoints(eventKey, header, raw) {
	return apiDataCall("event/" + eventKey + "/district_points", header, raw);
}

/**
 * Mirror of: /event/{event_key}/matches/timeseries
 * 
 * Gets an array of Match Keys for the given event key that have timeseries
 * data. Returns an empty array if no matches have timeseries data. WARNING:
 * This is not official data, and is subject to a significant possibility of
 * error, or missing data. Do not rely on this data for any purpose. In fact,
 * pretend we made it up. WARNING: This endpoint and corresponding data models
 * are under active development and may change at any time, including in
 * breaking ways.
 * 
 * @param {String}
 *            eventKey - FRC Event Key
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns a list of team rankings for a District Event
 */
function getEventTimeseries(eventKey, raw) {
	return apiDataCall("event/" + eventKey + "/matches/timeseries", "", raw);
}
