/**
 * Mirror of: /match/{match_key}
 * 
 * Gets match information for the given match key.
 * 
 * @param {String}
 *            matchKey - FRC Match Key
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns match information for the given match key
 */
function getMatch(matchKey, header, raw) {
	return apiDataCall("match/" + matchKey, header, raw);
}

/**
 * Mirror of: /match/{match_key}/simple
 * 
 * Gets simple match information for the given match key.
 * 
 * @param {String}
 *            matchKey - FRC Match Key
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns match information for the given match key
 */
function getMatchSimple(matchKey, header, raw) {
	return apiDataCall("match/" + matchKey + "/simple", header, raw);
}

/**
 * Mirror of: /match/{match_key}/timeseries
 * 
 * Gets an array of game-specific Match Timeseries objects for the given match
 * key or an empty array if not available. WARNING: This is not official data,
 * and is subject to a significant possibility of error, or missing data. Do not
 * rely on this data for any purpose. In fact, pretend we made it up. WARNING:
 * This endpoint and corresponding data models are under active development and
 * may change at any time, including in breaking ways.
 * 
 * @param {String}
 *            matchKey - FRC Match Key
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns match information for the given match key
 */
function getMatchTimeseries(matchKey) {
	return apiDataCall("match/" + matchKey+"/timeseries", "", raw);
}