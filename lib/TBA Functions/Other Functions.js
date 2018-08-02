/**
 * Returns API status, and TBA Status information.
 * 
 * @param {String}
 *            header - optional header if requesting specific info - consult TBA
 *            API.
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns API status, and TBA Status information
 */
function getStatus(header, raw) {
	return apiDataCall("status", header, raw)
}

/**
 * Call The Blue Alliance API.
 * 
 * @param {String}
 *            endpoint - endpoint to the requested data - consult TBA API for
 *            valid endpoints.
 * @param {String}
 *            query - optional header if requesting specific info inside
 *            endpoint - consult TBA API.
 * @param {Boolean}
 *            raw - optional config for raw JSON output instead of preformatted
 *            array. Will not output to cells
 * @returns {Array} returns requested data in array form.
 */
function apiDataCall(endpoint, query, raw) {
	var apiURL = getURL_();
	var key = getKey_();
	if(!raw || typeof raw === "undefined") {
		if (typeof query === "undefined") {
			return ImportJSON(apiURL + endpoint + key, "", "noInherit, noTruncate");
		} else {
			query = "/" + query;
			return ImportJSON(apiURL + endpoint + key, query,
					"noInherit, noTruncate");
		}
	}
	else if(raw) {
		return ImportJSONRaw(apiURL + endpoint + key);
	}
	
}

/**
 * Returns personal TBA API Auth Key.
 * 
 * @returns {String} returns personal TBA API Auth Key.
 */
function getKey_() {
	return "?X-TBA-Auth-Key={YOUR-KEY}";
}

/**
 * Returns TBA API URL.
 * 
 * @returns {String} returns TBA API URL.
 */
function getURL_() {
	return "https://www.thebluealliance.com/api/v3/";
}
