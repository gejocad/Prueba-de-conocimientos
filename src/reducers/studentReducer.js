import { types } from "../types/types";

const initialState = {
    student: [],
    active: {
        name: '',
        lastName: '',
        fullName: '',
        typedoc: '',
        document: '',
        email: '',
        finscrip: '',
        prog: '',
    }
}

export const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.addStudent:
            return {
                ...state,
                student: [action.payload, ...state.student]
            }
        case types.loadStudent:
            return {
                ...state,
                student: [...action.payload]
            }
        case types.activeStudent:
            return {
                ...state,
                active: {...action.payload}
            }
        case types.updateStudent:
            return {}

        case types.ListarBusqueda:
                return{
                    ...state,
                    search: [...action.payload]
                }
        default:
            return state
            
    }
        
}