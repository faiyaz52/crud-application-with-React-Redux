const initialstate = {
    employees: [
        { id: 1, employeeName: "Faiyaz Alam", email:"faiyaz21@gmail.com",mobile:"8553586799",companyName:"Microsoft", address: "Bangalore" },
        { id: 2, employeeName: "Ankit Agarwal", email:"ankit33@gmail.com",mobile:"8876554321",companyName:"Dell", address: "Kolkata" },
        { id: 3, employeeName: "Ankul Kumar", email:"ankan52@gmail.com",mobile:"7876554321",companyName:"Lowe\'s", address: "Chennai" },
        { id: 4, employeeName: "Amal Kumar", email:"amalraj@gmail.com",mobile:"7876554321",companyName:"Schinder", address: "Hyderbad" }
    ]
};

const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'GET_EMPLOYEE':
            return {
                ...state
            };
        case 'ADD_EMPLOYEE':
            return {
                ...state,
                employees: state.employees.concat(action.payload)
            };
        case 'EDIT_EMPLOYEE':
            return {
                ...state,
                employees: state.employees.map(
                    (content, i) => content.id === action.payload.id ? {...content, employeeName : action.payload.employeeName , email : action.payload.email ,mobile : action.payload.mobile ,companyName : action.payload.companyName, address : action.payload.address }
                                            : content)
            };
        case 'DELETE_EMPLOYEE':
            return {
                ...state,
                employees: state.employees.filter(item => item.id !== action.payload)
            };
        default:
            return state;
    }
};

export default reducer;
