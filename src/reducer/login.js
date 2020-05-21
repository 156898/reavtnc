const initialState = {
	data: {},
}

export default (state = initialState, {
	type,
	payload
}) => {
	switch (type) {

		case "LOGIN_Name":
			return { ...state,
				data: payload
			}

		default:
			return state
	}
}
