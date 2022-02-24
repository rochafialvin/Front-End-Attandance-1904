const init = {
    id: 0,
    nis: "",
    berhasil: "lanjut gan"
};


const authReducer = (state = init, action) => {
    // console.log(state)
    switch(action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                id: action.payload.id,
                nis: action.payload.nis
            };

        case "LOGOUT_SUCCESS":
            return init;

        default:
            return state;
    };
};

export default authReducer;