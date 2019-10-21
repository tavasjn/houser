const intialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zipcode: 0,
    image: '',
    mortgage: 0,
    rent: 0,
}

// Action Types
export const UPDATE_STEP_ONE = 'UPDATE_STEP_ONE',
        UPDATE_STEP_TWO = 'UPDATE_STEP_TWO',
        UPDATE_STEP_THREE = 'UPDATE_STEP_THREE';


export const saveStep1 = (
    name,
    address,
    city,
    state,
    zipcode
) => {
    console.log(name)
    return {
        type: UPDATE_STEP_ONE,
        payload: [
            name,
            address,
            city,
            state,
            zipcode
        ]
    }
}

// export const 



export default function (state = intialState, action){
    const {type, payload} = action;

    switch(type) {
        case UPDATE_STEP_ONE:
            return{...state, name: payload[0], address: payload[1], city: payload[2], state: payload[3], zipcode: payload[4]}
        default:
            return state;
    }
}
