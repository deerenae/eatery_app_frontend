const intialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false, 
    user: null
}

export default function(state = intialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}