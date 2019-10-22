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

export const saveStep2 = (
    image
 ) => {
    console.log(image)
    return {
        type: UPDATE_STEP_TWO,
        payload: [
            image
        ]
    }
}

export const saveStep3 = (
    mortgage,
    rent
) => {
    console.log(mortgage)
    console.log(rent)
    return {
        type: UPDATE_STEP_THREE,
        payload: [
            mortgage,
            rent
        ]
    }
}



export default function (state = intialState, action){
    const {type, payload} = action;

    switch(type) {
        case UPDATE_STEP_ONE:
            return{...state, name: payload[0], address: payload[1], city: payload[2], state: payload[3], zipcode: payload[4]}
        case UPDATE_STEP_TWO:
            return{...state, image: payload[0]}
        case UPDATE_STEP_THREE:
            return{...state, mortgage: payload[0], rent: payload[1]}
        default:
            return state;
    }
}
