/**
 * Mirror of: /district/{district_key}/teams
 * 
 * Gets a list of teams that competed in events in the given district.
 * 
 * @param {String}
 *            districtKey - FRC District Key
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns a list of teams that competed in events in the given
 *          district
 */
function getDistrictTeams(districtKey, header, raw) {
	return apiDataCall("district/" + districtKey + "/teams", header, raw);
}

/**
 * Mirror of: /district/{district_key}/teams/simple
 * 
 * Gets a simple list of teams that competed in events in the given district.
 * 
 * @param {String}
 *            districtKey - FRC District Key
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns a simple list of teams that competed in events in
 *          the given district
 */
function getDistrictTeamsSimple(districtKey, header, raw) {
	return apiDataCall("district/" + districtKey + "/teams/simple", header, raw);
}

/**
 * Mirror of: /district/{district_key}/teams/keys
 * 
 * Gets a list of team's keys that competed in events in the given district.
 * 
 * @param {String}
 *            districtKey - FRC District Key
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns a list of team's keys that competed in events in the
 *          given district
 */
function getDistrictTeamKeys(districtKey, raw) {
	return apiDataCall("district/" + districtKey + "/teams/keys", "", raw);
}

/**
 * Mirror of: /district/{district_key}/events
 * 
 * Gets a list of events in the given district.
 * 
 * @param {String}
 *            districtKey - FRC District Key
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns a list of events in the given district
 */
function getDistrictEvents(districtKey, header, raw) {
	return apiDataCall("district/" + districtKey + "/events", header, raw);
}

/**
 * Mirror of: /district/{district_key}/events/simple
 * 
 * Gets a simple list of events in the given district.
 * 
 * @param {String}
 *            districtKey - FRC District Key
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns a simple list of events in the given district
 */
function getDistrictEventsSimple(districtKey, header, raw) {
	return apiDataCall("district/" + districtKey + "/events/simple", header,
			raw);
}

/**
 * Mirror of: /district/{district_key}/events/keys
 * 
 * Gets a list of event keys for events in the given district.
 * 
 * @param {String}
 *            districtKey - FRC District Key
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns a list of event keys for events in the given
 *          district
 */
function getDistrictEventKeys(districtKey, raw) {
	return apiDataCall("district/" + districtKey + "/events/keys", "", raw);
}

/**
 * Mirror of: /districts/{year}
 * 
 * Gets a list of districts and their corresponding district key, for the given
 * year.
 * 
 * @param {Number}
 *            year - Year, must be 4 digits
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns a list of districts and their corresponding district
 *          key, for the given year.
 */
function getDistricts(year, header, raw) {
	return apiDataCall("districts/" + year, header, raw);
}

/**
 * Mirror of: /district/{district_key}/rankings
 * 
 * Gets a list of team district rankings for the given district.
 * 
 * @param {String}
 *            districtKey - FRC District Key
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns a list of team district rankings for the given
 *          district
 */
function getDistrictRankings(districtKey, header, raw) {
	return apiDataCall("district/" + districtKey + "/rankings", header, raw);
}