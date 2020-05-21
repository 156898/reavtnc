const initialState = {
	data: {},
}

export default (state = initialState, {
	type,
	payload
}) => {
	switch (type) {

		case "FROMMS":
			return { ...state,
				data: payload
			}

		default:
			return state
	}
}
